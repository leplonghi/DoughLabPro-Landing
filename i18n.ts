import { Language } from './types';

export const I18N_VERSION = "v1";

export function detectUserLanguage(): Language {
  const lang = navigator.language || (navigator as any).userLanguage || "en";
  const normalized = lang.toLowerCase();

  if (normalized.startsWith("pt")) return "pt";
  if (normalized.startsWith("es")) return "es";
  return "en";
}

export async function loadTranslations(lang: Language): Promise<{ [key: string]: string }> {
  const cachedVersion = localStorage.getItem("i18n_version");
  const cachedLang = localStorage.getItem("i18n_language");
  const cachedData = localStorage.getItem("i18n_data");

  const isCacheValid =
      cachedVersion === I18N_VERSION &&
      cachedLang === lang &&
      cachedData;

  if (isCacheValid) {
    try {
        return JSON.parse(cachedData!);
    } catch (e) {
        console.error("Failed to parse cached i18n data", e);
        // Corrupted cache, proceed to fetch
    }
  }

  const fetchAndCache = async (langToFetch: Language, isFallback = false) => {
      try {
          const response = await fetch(`/i18n/${langToFetch}.json`, { cache: "no-store" });
          if (!response.ok) throw new Error(`File not found for lang: ${langToFetch}`);

          const data = await response.json();
          
          localStorage.setItem("i18n_language", langToFetch);
          localStorage.setItem("i18n_version", I18N_VERSION);
          localStorage.setItem("i18n_data", JSON.stringify(data));
          
          return data;
      } catch (error) {
          console.error(`Failed to load translations for ${langToFetch}:`, error);
          if (isFallback || langToFetch === 'en') {
              // This should not happen if en.json is guaranteed to exist
              return {}; 
          }
          // If the primary language fails, fetch English as fallback
          return await fetchAndCache('en', true);
      }
  };

  return await fetchAndCache(lang);
}

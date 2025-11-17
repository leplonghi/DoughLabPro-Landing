import { LANDING_LANGS } from "./landingTexts";
import { Language } from "./types";

export function detectLandingLang(): Language {
  const stored = localStorage.getItem("landing.lang");
  if (stored && LANDING_LANGS.includes(stored)) return stored as Language;
  const nav = navigator.language.toLowerCase();
  if (nav.startsWith("pt")) return "pt";
  if (nav.startsWith("es")) return "es";
  return "en";
}

export function setLandingLang(lang: Language) {
  localStorage.setItem("landing.lang", lang);
  window.location.reload();
}

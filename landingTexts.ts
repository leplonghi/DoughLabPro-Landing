export const LANDING_LANGS = ["pt", "en", "es"];

export const landingTexts = {
  pt: {
    nav: {
      "forWhom": "Para Quem É",
      "calculator": "Calculadora",
      "myLab": "MyLab",
      "learn": "Aprender",
      "proTools": "Ferramentas",
      "community": "Comunidade",
      "pricing": "Planos",
      "ariaLabel": "Navegação principal"
    },
    hero: {
      tagline: [
        "Better dough starts here.",
        "A massa perfeita começa aqui.",
        "La masa perfecta empieza aquí."
      ],
      title: "Deixe de adivinhar e comece a dominar suas massas.",
      subtitle: "O DoughLabPro transforma sua cozinha em um laboratório de precisão, oferecendo ferramentas de nível profissional para o entusiasta caseiro, o padeiro artesanal e o pequeno negócio de pizza.",
      cta: "Começar grátis",
      imageAlt: "Demonstração da interface do aplicativo DoughLab Pro."
    },
    forWhom: {
        title: "Para quem é o DoughLabPro?",
        profiles: [
            "Entusiasta caseiro: quer sair do achismo e ter resultados consistentes e de alta qualidade em casa.",
            "Padeiro amador / estudante de gastronomia: quer entender a ciência por trás de cada etapa do processo.",
            "Pequeno profissional / dono de pizzaria artesanal: precisa de uma ferramenta de precisão para desenvolver receitas, escalar produção e treinar a equipe com base em dados."
        ]
    },
    calculator: {
        title: "Calculadora Inteligente e Flexível",
        summary: "O coração do DoughLabPro é a calculadora. Ela vai muito além das planilhas básicas, oferecendo dois modos poderosos para estilos clássicos e criação autoral.",
        guided: {
            title: "Modo Guiado (Pro)",
            description: "Perfeito para iniciantes ou para quem busca consistência. Escolha um estilo clássico – Napolitana, New York, Romana, Detroit e outros – e a calculadora ajusta automaticamente hidratação, sal, fermento, óleo e tempo de fermentação, com parâmetros técnicos validados."
        },
        free: {
            title: "Modo Livre (Avançado)",
            description: "Controle total para o padeiro experiente. Ajuste cada variável – hidratação, sal, óleo, tipo de fermento, percentual de pré-fermento (biga, poolish, massa madre) – e crie receitas com precisão matemática."
        }
    },
    myLab: {
        title: "Meu Lab (MyLab): seu diário de bordo pessoal",
        summary: "Mais do que um app, o MyLab é o seu ecossistema de aprendizado. Ele registra cada fornada, cada ajuste e cada insight, para que você nunca mais dependa apenas da memória.",
        features: [
            "Fornadas: registre fotos, notas detalhadas, avaliação e status de cada fornada.",
            "Levain Pet: gerencie sua cultura de fermento natural com status, histórico de alimentações e integração direta com a calculadora.",
            "Receitas e Farinhas: salve presets e crie uma biblioteca de farinhas com notas de performance e hidratação ideal.",
            "Insights e Evolução: acompanhe gráficos de hidratação média, estilos mais usados e padrões que explicam por que algumas fornadas ficam melhores que outras."
        ]
    },
    learn: {
        title: "Aprender: sua enciclopédia técnica integrada",
        summary: "Chega de informação solta e contraditória. A seção Aprender reúne guias técnicos profundos sobre ciência da massa, ingredientes críticos, técnicas e solução de problemas, tudo dentro do próprio app.",
        topics: [
            "Ciência da Massa: bioquímica da fermentação, formação de glúten, oven spring, maturação sensorial.",
            "Ingredientes Críticos: farinhas (W, P/L), queijos, molhos, carnes e mais.",
            "Técnicas e Métodos: pré-fermentos, autólise, dobras, boleamento, controle de temperatura (DDT).",
            "Solução de Problemas: diagnósticos para gum line, snap-back, massa que não cresce e outros erros comuns."
        ]
    },
    proTools: {
        title: "Ferramentas de nível profissional",
        summary: "Quando você estiver pronto para ir além do básico, o DoughLabPro oferece um conjunto de ferramentas avançadas para análise e criação.",
        tools: [
            "Recheios & Combinações: galeria técnica de toppings, equilíbrio de sabor, umidade e peso, com pairing inteligente.",
            "Análise de Forno: adapte a massa ao seu forno (doméstico, lastro, pedra, aço, lenha).",
            "Massabot (Doughbot): assistente de diagnóstico para identificar a causa-raiz dos problemas da massa.",
            "Pizza de Despensa: selecione o que tem em casa e receba sugestões de pizzas possíveis."
        ]
    },
    community: {
        title: "Comunidade ativa e colaborativa",
        summary: "Aprenda com outros padeiros, compartilhe suas fornadas e transforme o DoughLabPro em um espaço vivo de troca.",
        topics: [
            "Explore Fornadas Públicas: veja fotos, receitas e notas da comunidade.",
            "Clone Receitas: com um clique, traga a configuração de outra pessoa para a sua calculadora.",
            "Compartilhe Seu Sucesso: publique suas melhores fornadas e receba feedback."
        ]
    },
    pricing: {
      title: "Escolha o plano ideal para sua jornada",
      subtitle: "Comece de graça e evolua para o Pro quando estiver pronto para dominar suas massas.",
      plans: {
        free: {
          title: "Free",
          price: "R$ 0",
          period: "",
          headline: "O essencial para começar com o pé direito.",
          features: [
            "Calculadora básica",
            "Até 3 fornadas salvas no MyLab",
            "Acesso limitado à seção Aprender",
            "1 perfil de forno"
          ],
          cta: "Começar grátis"
        },
        pro: {
          title: "Pro",
          price: "R$ 19,90",
          period: "/mês",
          headline: "O laboratório completo para resultados de nível profissional.",
          isRecommended: true,
          recommendation: "Mais Popular",
          features: [
            "Tudo do plano Free, e mais:",
            "Calculadora avançada (Modo Guiado e Livre)",
            "Fornadas e receitas ilimitadas no MyLab",
            "Acesso total à enciclopédia Aprender",
            "Ferramentas Pro (Análise de Forno, Doughbot)",
            "Integração com Levain Pet"
          ],
          cta: "Assinar o Pro"
        },
        levain: {
          title: "Levain Pet",
          price: "R$ 9,90",
          period: "/mês",
          headline: "O companheiro inteligente para seu fermento natural.",
          features: [
            "Requer o plano Pro",
            "Monitoramento de saúde do levain",
            "Lembretes de alimentação inteligentes",
            "Histórico completo de refrescos",
            "Análise de força e atividade"
          ],
          cta: "Adicionar Levain Pet"
        }
      }
    },
    final: {
      title: "Pronto para levar suas massas a outro nível?",
      subtitle: "Comece hoje e transforme cada fornada em um experimento controlado, não em um chute.",
      cta: "Começar grátis"
    },
    footer: {
        "tagline": "DoughLabPro – A ciência das massas na sua mão.",
        "copyright": "© {year} DoughLab Pro. Todos os direitos reservados.",
        "share": "Compartilhe",
        "shareOnTwitter": "Compartilhar no Twitter",
        "shareOnFacebook": "Compartilhar no Facebook",
        "shareOnLinkedIn": "Compartilhar no LinkedIn",
        "links": {
          "calculator": "Calculadora",
          "learn": "Aprender",
          "community": "Comunidade",
          "mylab": "Meu Lab",
          "support": "Suporte",
          "privacy": "Privacidade"
        }
    },
    // FIX: Add missing translation keys to resolve errors
    howItWorks: {
        title: "Como funciona?",
        copy: "O DoughLabPro simplifica a complexidade da panificação, guiando você desde a receita até a fornada perfeita com ferramentas de precisão.",
        imageAlt: "Fluxograma do processo do DoughLabPro."
    },
    features: {
        title: "Tudo que você precisa para massas perfeitas",
        subtitle: "De uma calculadora poderosa a uma comunidade engajada, temos as ferramentas para cada etapa da sua jornada.",
        list: {
            calculator: {
                title: "Calculadora Inteligente",
                description: "Modos guiado e livre para controle total sobre hidratação, fermento, sal e mais."
            },
            mylab: {
                title: "MyLab Pessoal",
                description: "Registre cada fornada, gerencie seu levain e crie uma biblioteca de farinhas."
            },
            learn: {
                title: "Conteúdo Técnico",
                description: "Aprenda a ciência por trás da massa com guias profundos e solução de problemas."
            },
            assistant: {
                title: "Doughbot Assistente",
                description: "Diagnóstico com IA para identificar a causa-raiz dos problemas da sua massa.",
                tooltip: "Recurso Pro em breve!"
            },
            pantry: {
                title: "Pizza de Despensa",
                description: "Descubra receitas incríveis com os ingredientes que você já tem em casa."
            },
            oven: {
                title: "Análise de Forno",
                description: "Adapte suas receitas para o seu forno específico, seja ele doméstico ou profissional."
            }
        }
    },
    socialProof: {
        title: "Amado por padeiros de todos os níveis",
        subtitle: "Veja o que nossos usuários estão dizendo sobre o DoughLabPro.",
        editButton: "Editar",
        editModal: {
            title: "Editar Depoimento",
            label: "Texto do depoimento:",
            cancel: "Cancelar",
            save: "Salvar"
        },
        testimonials: {
            mariana: {
                role: "Entusiasta Caseira",
                quote: "Finalmente consigo consistência nas minhas pizzas. O MyLab mudou meu jogo!"
            },
            john: {
                role: "Padeiro Artesanal",
                quote: "A calculadora é incrivelmente precisa. Me ajuda a testar novas receitas com confiança."
            },
            carlos: {
                role: "Dono de Pizzaria",
                quote: "Uso para treinar minha equipe e padronizar as receitas. Essencial para o meu negócio."
            }
        }
    },
    faq: {
        title: "Perguntas Frequentes",
        subtitle: "Tem alguma dúvida? Encontre as respostas aqui.",
        items: {
            q1: {
                question: "O DoughLabPro é para iniciantes?",
                answer: "Sim! O Modo Guiado da calculadora é perfeito para quem está começando, oferecendo parâmetros validados para estilos clássicos de pizza e pão."
            },
            q2: {
                question: "Posso usar minhas próprias receitas?",
                answer: "Com certeza. O Modo Livre da calculadora te dá controle total para inserir e salvar suas próprias receitas, ajustando cada variável como preferir."
            },
            q3: {
                question: "O plano Pro vale a pena?",
                answer: "O plano Pro desbloqueia ferramentas avançadas como o Modo Guiado, o Levain Pet, o Doughbot e a capacidade de salvar fornadas e receitas ilimitadas. É ideal para quem leva a panificação a sério."
            },
            q4: {
                question: "Como funciona a comunidade?",
                answer: "Você pode compartilhar suas fornadas (fotos, receitas e notas) com a comunidade, explorar o que outros padeiros estão fazendo e até clonar as receitas deles para a sua calculadora com um clique."
            }
        }
    }
  },
  en: {
    nav: {
      "forWhom": "For Whom",
      "calculator": "Calculator",
      "myLab": "MyLab",
      "learn": "Learn",
      "proTools": "Tools",
      "community": "Community",
      "pricing": "Plans",
      "ariaLabel": "Main navigation"
    },
    hero: {
      tagline: [
        "Better dough starts here.",
        "A massa perfeita começa aqui.",
        "La masa perfecta empieza aquí."
      ],
      title: "Stop guessing and start mastering your dough.",
      subtitle: "DoughLabPro turns your kitchen into a precision lab, giving you professional-grade tools for home enthusiasts, artisan bakers and small pizza shops.",
      cta: "Start for free",
      imageAlt: "Demonstration of the DoughLab Pro application interface."
    },
    forWhom: {
        title: "Who is DoughLabPro for?",
        profiles: [
            "Home baking enthusiast: wants to leave guesswork behind and get consistent, high-quality results at home.",
            "Hobby baker / culinary student: wants to understand the science behind every step.",
            "Small professional / artisan pizza owner: needs a precision tool to develop recipes, scale production and train the team with data."
        ]
    },
    calculator: {
        title: "Smart and Flexible Dough Calculator",
        summary: "The heart of DoughLabPro is the calculator. It goes far beyond basic spreadsheets, offering two powerful modes for classic styles and custom creations.",
        guided: {
            title: "Guided Mode (Pro)",
            description: "Perfect for beginners or anyone chasing consistency. Pick a classic style – Neapolitan, New York, Roman, Detroit and more – and the calculator auto-adjusts hydration, salt, yeast, oil and fermentation time using validated technical presets."
        },
        free: {
            title: "Free Mode (Advanced)",
            description: "Full control for experienced bakers. Fine-tune hydration, salt, oil, leavening type, preferment percentage (biga, poolish, sourdough) and build recipes with mathematical precision."
        }
    },
    myLab: {
        title: "MyLab: your personal baking logbook",
        summary: "More than an app, MyLab is your learning ecosystem. It records every bake, every tweak and every insight so you never rely on memory alone.",
        features: [
            "Batches: log photos, detailed notes, rating and status for every bake.",
            "Levain Pet: manage your sourdough starter with status, feeding history and direct integration with the calculator.",
            "Recipes & Flours: save presets and build a flour library with performance notes and ideal hydration.",
            "Insights & Progress: see charts of average hydration, favorite styles and patterns behind your best bakes."
        ]
    },
    learn: {
        title: "Learn: your integrated technical library",
        summary: "No more random, conflicting information. The Learn section brings deep technical guides on dough science, key ingredients, techniques and troubleshooting — all inside the app.",
        topics: [
            "Dough Science: fermentation biochemistry, gluten development, oven spring, flavor maturation.",
            "Key Ingredients: flours (W, P/L), cheeses, sauces, meats and more.",
            "Techniques & Methods: preferments, autolyse, stretch & fold, shaping, temperature control (DDT).",
            "Troubleshooting: practical guides for gum line, snap-back, weak rise and other common issues."
        ]
    },
    proTools: {
        title: "Professional-grade tools",
        summary: "When you’re ready to go beyond the basics, DoughLabPro offers a set of advanced tools for analysis and creation.",
        tools: [
            "Toppings & Pairings: technical gallery of toppings, balance of flavor, moisture and weight, with smart pairing suggestions.",
            "Oven Analysis: adapt your dough to your actual oven (home, stone, steel, deck, wood-fired).",
            "Doughbot: diagnostic assistant to identify root causes of dough problems.",
            "Pantry Pizza: select what you have at home and get ideas for pizzas you can actually make."
        ]
    },
    community: {
        title: "An active, collaborative community",
        summary: "Learn from other bakers, share your bakes and turn DoughLabPro into a living space for exchange.",
        topics: [
            "Explore Public Batches: browse photos, recipes and notes from the community.",
            "Clone Recipes: with one click, bring someone else’s configuration into your calculator.",
            "Share Your Success: publish your best bakes and get feedback."
        ]
    },
    pricing: {
      title: "Choose the ideal plan for your journey",
      subtitle: "Start for free and upgrade to Pro when you're ready to master your dough.",
      plans: {
        free: {
          title: "Free",
          price: "$0",
          period: "",
          headline: "The essentials to get started on the right foot.",
          features: [
            "Basic calculator",
            "Up to 3 saved bakes in MyLab",
            "Limited access to Learn section",
            "1 oven profile"
          ],
          cta: "Start for Free"
        },
        pro: {
          title: "Pro",
          price: "$4.99",
          period: "/month",
          headline: "The complete lab for professional-level results.",
          isRecommended: true,
          recommendation: "Most Popular",
          features: [
            "Everything in Free, plus:",
            "Advanced calculator (Guided & Free Modes)",
            "Unlimited bakes and recipes in MyLab",
            "Full access to the Learn encyclopedia",
            "Pro Tools (Oven Analysis, Doughbot)",
            "Levain Pet Integration"
          ],
          cta: "Get Pro"
        },
        levain: {
          title: "Levain Pet",
          price: "$2.49",
          period: "/month",
          headline: "The smart companion for your sourdough starter.",
          features: [
            "Requires Pro plan",
            "Sourdough starter health monitoring",
            "Smart feeding reminders",
            "Complete refresh history",
            "Strength and activity analysis"
          ],
          cta: "Add Levain Pet"
        }
      }
    },
    final: {
      title: "Ready to take your dough to the next level?",
      subtitle: "Start today and turn every bake into a controlled experiment, not a guess.",
      cta: "Start for free"
    },
    footer: {
      "tagline": "DoughLabPro – The science of dough in your hand.",
      "copyright": "© {year} DoughLab Pro. All rights reserved.",
      "share": "Share",
      "shareOnTwitter": "Share on Twitter",
      "shareOnFacebook": "Share on Facebook",
      "shareOnLinkedIn": "Share on LinkedIn",
      "links": {
        "calculator": "Calculator",
        "learn": "Learn",
        "community": "Community",
        "mylab": "My Lab",
        "support": "Support",
        "privacy": "Privacy"
      }
    },
    // FIX: Add missing translation keys to resolve errors
    howItWorks: {
        title: "How It Works",
        copy: "DoughLabPro simplifies the complexity of baking, guiding you from recipe to the perfect batch with precision tools.",
        imageAlt: "Flowchart of the DoughLabPro process."
    },
    features: {
        title: "Everything you need for perfect dough",
        subtitle: "From a powerful calculator to an engaged community, we have the tools for every step of your journey.",
        list: {
            calculator: {
                title: "Smart Calculator",
                description: "Guided and free modes for total control over hydration, yeast, salt, and more."
            },
            mylab: {
                title: "Personal MyLab",
                description: "Log every bake, manage your sourdough starter, and create a flour library."
            },
            learn: {
                title: "Technical Content",
                description: "Learn the science behind the dough with in-depth guides and troubleshooting."
            },
            assistant: {
                title: "Doughbot Assistant",
                description: "AI-powered diagnostics to identify the root cause of your dough problems.",
                tooltip: "Pro feature coming soon!"
            },
            pantry: {
                title: "Pantry Pizza",
                description: "Discover amazing recipes with the ingredients you already have at home."
            },
            oven: {
                title: "Oven Analysis",
                description: "Adapt your recipes for your specific oven, whether it's a home or professional one."
            }
        }
    },
    socialProof: {
        title: "Loved by bakers of all levels",
        subtitle: "See what our users are saying about DoughLabPro.",
        editButton: "Edit",
        editModal: {
            title: "Edit Testimonial",
            label: "Testimonial text:",
            cancel: "Cancel",
            save: "Save"
        },
        testimonials: {
            mariana: {
                role: "Home Enthusiast",
                quote: "I finally get consistency in my pizzas. The MyLab is a game-changer!"
            },
            john: {
                role: "Artisan Baker",
                quote: "The calculator is incredibly accurate. It helps me test new recipes with confidence."
            },
            carlos: {
                role: "Pizzeria Owner",
                quote: "I use it to train my staff and standardize recipes. Essential for my business."
            }
        }
    },
    faq: {
        title: "Frequently Asked Questions",
        subtitle: "Have a question? Find the answers here.",
        items: {
            q1: {
                question: "Is DoughLabPro for beginners?",
                answer: "Yes! The Guided Mode in the calculator is perfect for those starting out, offering validated parameters for classic pizza and bread styles."
            },
            q2: {
                question: "Can I use my own recipes?",
                answer: "Absolutely. The Free Mode of the calculator gives you full control to enter and save your own recipes, adjusting every variable as you wish."
            },
            q3: {
                question: "Is the Pro plan worth it?",
                answer: "The Pro plan unlocks advanced tools like Guided Mode, Levain Pet, Doughbot, and the ability to save unlimited batches and recipes. It's ideal for anyone serious about baking."
            },
            q4: {
                question: "How does the community work?",
                answer: "You can share your bakes (photos, recipes, and notes) with the community, explore what other bakers are doing, and even clone their recipes into your calculator with one click."
            }
        }
    }
  },
  es: {
    nav: {
      "forWhom": "Para Quién Es",
      "calculator": "Calculadora",
      "myLab": "MyLab",
      "learn": "Aprender",
      "proTools": "Herramientas",
      "community": "Comunidad",
      "pricing": "Planes",
      "ariaLabel": "Navegación principal"
    },
    hero: {
      tagline: [
        "Better dough starts here.",
        "A massa perfeita começa aqui.",
        "La masa perfecta empieza aquí."
      ],
      title: "Deja de adivinar y empieza a dominar tus masas.",
      subtitle: "DoughLabPro convierte tu cocina en un laboratorio de precisión, con herramientas de nivel profesional para aficionados caseros, panaderos artesanales y pequeñas pizzerías.",
      cta: "Empezar gratis",
      imageAlt: "Demostración de la interfaz de la aplicación DoughLab Pro."
    },
    forWhom: {
        title: "¿Para quién es DoughLabPro?",
        profiles: [
            "Aficionado casero: quiere dejar las suposiciones y lograr resultados consistentes y de alta calidad en casa.",
            "Panadero amateur / estudiante de gastronomía: quiere entender la ciencia detrás de cada etapa.",
            "Pequeño profesional / dueño de pizzería artesanal: necesita una herramienta de precisión para desarrollar recetas, escalar producción y entrenar al equipo con datos."
        ]
    },
    calculator: {
        title: "Calculadora de masa inteligente y flexible",
        summary: "El corazón de DoughLabPro es la calculadora. Va mucho más allá de las hojas de cálculo básicas, con dos modos potentes para estilos clásicos y creaciones propias.",
        guided: {
            title: "Modo Guiado (Pro)",
            description: "Perfecto para principiantes o para quien busca consistencia. Elige un estilo clásico – Napolitana, New York, Romana, Detroit y otros – y la calculadora ajusta automáticamente hidratación, sal, levadura, aceite y fermentación con parámetros validados."
        },
        free: {
            title: "Modo Libre (Avanzado)",
            description: "Control total para panaderos experimentados. Ajusta hidratación, sal, aceite, tipo de fermento y porcentaje de prefermento (biga, poolish, masa madre) para crear recetas con precisión matemática."
        }
    },
    myLab: {
        title: "MyLab: tu cuaderno de bitácora de panificación",
        summary: "Más que una app, MyLab es tu ecosistema de aprendizaje. Registra cada hornada, cada ajuste y cada insight, para que no dependas solo de la memoria.",
        features: [
            "Hornadas: registra fotos, notas detalladas, valoración y estado de cada hornada.",
            "Levain Pet: gestiona tu masa madre con estado, historial de alimentaciones e integración directa con la calculadora.",
            "Recetas y Harinas: guarda presets y crea una biblioteca de harinas con notas de rendimiento e hidratación ideal.",
            "Insights y Evolución: sigue gráficos de hidratación media, estilos más usados y patrones que explican por qué algunas hornadas salen mejor."
        ]
    },
    learn: {
        title: "Learn: tu biblioteca técnica integrada",
        summary: "Basta de información suelta y contradictoria. La sección Learn reúne guías técnicas profundas sobre ciencia de la masa, ingredientes clave, técnicas y resolución de problemas, todo dentro de la app.",
        topics: [
            "Ciencia de la Masa: bioquímica de la fermentación, formación de gluten, oven spring, maduración sensorial.",
            "Ingredientes Clave: harinas (W, P/L), quesos, salsas, carnes y más.",
            "Técnicas y Métodos: prefermentos, autólisis, pliegues, boleado, control de temperatura (DDT).",
            "Solución de Problemas: guía práctica para gum line, snap-back, masa que no crece y otros errores frecuentes."
        ]
    },
    proTools: {
        title: "Herramientas de nivel profesional",
        summary: "Cuando estés listo para ir más allá de lo básico, DoughLabPro ofrece un conjunto de herramientas avanzadas para análisis y creación.",
        tools: [
            "Toppings & Combinaciones: galería técnica de toppings, equilibrio de sabor, humedad y peso, con pairing inteligente.",
            "Análisis de Horno: adapta la masa a tu horno real (doméstico, piedra, acero, deck, leña).",
            "Doughbot: asistente de diagnóstico para encontrar la causa raíz de los problemas de masa.",
            "Pizza de Despensa: selecciona lo que tienes en casa y recibe sugerencias de pizzas posibles."
        ]
    },
    community: {
        title: "Una comunidad activa y colaborativa",
        summary: "Aprende de otros panaderos, comparte tus hornadas y convierte DoughLabPro en un espacio vivo de intercambio.",
        topics: [
            "Explora Hornadas Públicas: mira fotos, recetas y notas de la comunidad.",
            "Clona Recetas: con un clic, lleva la configuración de otro usuario a tu calculadora.",
            "Comparte tu Éxito: publica tus mejores hornadas y recibe feedback."
        ]
    },
    pricing: {
      title: "Elige el plan ideal para tu viaje",
      subtitle: "Empieza gratis y actualiza a Pro cuando estés listo para dominar tus masas.",
      plans: {
        free: {
          title: "Free",
          price: "$0",
          period: "",
          headline: "Lo esencial para empezar con buen pie.",
          features: [
            "Calculadora básica",
            "Hasta 3 hornadas guardadas en MyLab",
            "Acceso limitado a la sección Aprender",
            "1 perfil de horno"
          ],
          cta: "Empezar gratis"
        },
        pro: {
          title: "Pro",
          price: "$4.99",
          period: "/mes",
          headline: "El laboratorio completo para resultados de nivel profesional.",
          isRecommended: true,
          recommendation: "Más Popular",
          features: [
            "Todo en el plan Free, y más:",
            "Calculadora avanzada (Modo Guiado y Libre)",
            "Hornadas y recetas ilimitadas en MyLab",
            "Acceso total a la enciclopedia Aprender",
            "Herramientas Pro (Análisis de Horno, Doughbot)",
            "Integración con Levain Pet"
          ],
          cta: "Obtener Pro"
        },
        levain: {
          title: "Levain Pet",
          price: "$2.49",
          period: "/mes",
          headline: "El compañero inteligente para tu masa madre.",
          features: [
            "Requiere el plan Pro",
            "Monitoreo de salud de la masa madre",
            "Recordatorios de alimentación inteligentes",
            "Historial completo de refrescos",
            "Análisis de fuerza y actividad"
          ],
          cta: "Añadir Levain Pet"
        }
      }
    },
    final: {
      title: "¿Listo para llevar tus masas al siguiente nivel?",
      subtitle: "Empieza hoy y convierte cada hornada en un experimento controlado, no en una apuesta.",
      cta: "Empezar gratis"
    },
    footer: {
      "tagline": "DoughLabPro – La ciencia de las masas en tu mano.",
      "copyright": "© {year} DoughLab Pro. Todos los derechos reservados.",
      "share": "Compartir",
      "shareOnTwitter": "Compartir en Twitter",
      "shareOnFacebook": "Compartir en Facebook",
      "shareOnLinkedIn": "Compartir en LinkedIn",
      "links": {
        "calculator": "Calculadora",
        "learn": "Aprender",
        "community": "Comunidad",
        "mylab": "Mi Lab",
        "support": "Soporte",
        "privacy": "Privacidad"
      }
    },
    // FIX: Add missing translation keys to resolve errors
    howItWorks: {
        title: "¿Cómo funciona?",
        copy: "DoughLabPro simplifica la complejidad de la panadería, guiándote desde la receta hasta la hornada perfecta con herramientas de precisión.",
        imageAlt: "Diagrama de flujo del proceso de DoughLabPro."
    },
    features: {
        title: "Todo lo que necesitas para masas perfectas",
        subtitle: "Desde una potente calculadora hasta una comunidad activa, tenemos las herramientas para cada paso de tu viaje.",
        list: {
            calculator: {
                title: "Calculadora Inteligente",
                description: "Modos guiado y libre para un control total sobre hidratación, levadura, sal y más."
            },
            mylab: {
                title: "MyLab Personal",
                description: "Registra cada hornada, gestiona tu masa madre y crea una biblioteca de harinas."
            },
            learn: {
                title: "Contenido Técnico",
                description: "Aprende la ciencia detrás de la masa con guías detalladas y solución de problemas."
            },
            assistant: {
                title: "Asistente Doughbot",
                description: "Diagnóstico con IA para identificar la causa raíz de los problemas de tu masa.",
                tooltip: "¡Función Pro próximamente!"
            },
            pantry: {
                title: "Pizza de Despensa",
                description: "Descubre recetas increíbles con los ingredientes que ya tienes en casa."
            },
            oven: {
                title: "Análisis de Horno",
                description: "Adapta tus recetas a tu horno específico, ya sea doméstico o profesional."
            }
        }
    },
    socialProof: {
        title: "Amado por panaderos de todos los niveles",
        subtitle: "Mira lo que nuestros usuarios dicen de DoughLabPro.",
        editButton: "Editar",
        editModal: {
            title: "Editar Testimonio",
            label: "Texto del testimonio:",
            cancel: "Cancelar",
            save: "Guardar"
        },
        testimonials: {
            mariana: {
                role: "Entusiasta Casera",
                quote: "¡Finalmente consigo consistencia en mis pizzas. El MyLab ha cambiado las reglas del juego!"
            },
            john: {
                role: "Panadero Artesano",
                quote: "La calculadora es increíblemente precisa. Me ayuda a probar nuevas recetas con confianza."
            },
            carlos: {
                role: "Dueño de Pizzería",
                quote: "Lo uso para entrenar a mi personal y estandarizar recetas. Esencial para mi negocio."
            }
        }
    },
    faq: {
        title: "Preguntas Frecuentes",
        subtitle: "¿Tienes alguna pregunta? Encuentra las respuestas aquí.",
        items: {
            q1: {
                question: "¿DoughLabPro es para principiantes?",
                answer: "¡Sí! El Modo Guiado de la calculadora es perfecto para quienes están empezando, ofreciendo parámetros validados para estilos clásicos de pizza y pan."
            },
            q2: {
                question: "¿Puedo usar mis propias recetas?",
                answer: "Por supuesto. El Modo Libre de la calculadora te da control total para introducir y guardar tus propias recetas, ajustando cada variable como prefieras."
            },
            q3: {
                question: "¿Vale la pena el plan Pro?",
                answer: "El plan Pro desbloquea herramientas avanzadas como el Modo Guiado, Levain Pet, Doughbot y la capacidad de guardar hornadas y recetas ilimitadas. Es ideal para cualquiera que se tome en serio la panadería."
            },
            q4: {
                question: "¿Cómo funciona la comunidad?",
                answer: "Puedes compartir tus hornadas (fotos, recetas y notas) con la comunidad, explorar lo que otros panaderos están haciendo e incluso clonar sus recetas en tu calculadora con un solo clic."
            }
        }
    }
  }
};
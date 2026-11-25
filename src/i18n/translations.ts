import type {CategoryId, DifficultyLevel, LangCode} from '../types/workflow';

export interface UITranslations {
  siteTitle: string;
  siteDescription: string;
  nav: {
    catalog: string;
    diagram: string;
    prompt: string;
    guide: string;
    saved: string;
  };
  hero: {
    headline: string;
    subtitle: string;
    searchIntentNote: string;
    transparentNotice: string;
  };
  categories: Record<CategoryId, {name: string; short: string}>;
  allCategories: string;
  difficulties: Record<DifficultyLevel, string>;
  catalog: {
    searchPlaceholder: string;
    filterAll: string;
    filterFavorites: string;
    filterCompleted: string;
    workflowsCount: string;
    minutesUnit: string;
    emptyTitle: string;
    emptyAction: string;
    modulePrefix: string;
  };
  diagram: {
    heading: string;
    play: string;
    pause: string;
    prev: string;
    next: string;
    reset: string;
    stepOf: string;
    humanGateLabel: string;
    inputLabel: string;
    aiDraftLabel: string;
    finalOutputLabel: string;
  };
  checklist: {
    heading: string;
    completedCount: string;
    markWorkflowDone: string;
    workflowDone: string;
    verificationTitle: string;
  };
  promptBuilder: {
    heading: string;
    subheading: string;
    generatedLabel: string;
    copyBtn: string;
    copiedBtn: string;
    resetBtn: string;
    notesLabel: string;
    notesPlaceholder: string;
  };
  actions: {
    favorite: string;
    favorited: string;
    printCard: string;
    exportJson: string;
    importJson: string;
    clearLocal: string;
    copyShareLink: string;
    linkCopied: string;
    importSuccess: string;
    importError: string;
    clearedMessage: string;
  };
  ads: {
    label: string;
  };
  affiliate: {
    heading: string;
    subheading: string;
    disclosure: string;
    cta: string;
    items: Array<{
      category: string;
      title: string;
      reason: string;
      url: string;
    }>;
  };
  editorial: {
    heading: string;
    intro: string;
    sections: Array<{
      title: string;
      body: string;
      bullets: string[];
    }>;
    faqHeading: string;
    faqs: Array<{
      q: string;
      a: string;
    }>;
  };
  footer: {
    tagline: string;
    canonicalNote: string;
    privacyNote: string;
  };
}

export const UI_TRANSLATIONS: Record<LangCode, UITranslations> = {
  en: {
    siteTitle: 'AIDoSteps — How to Do Everyday Tasks with AI, Step-by-Step Workflows & SVG Diagrams',
    siteDescription:
      '40 practical step-by-step AI workflows with interactive SVG flow diagrams, local fillable prompt builders, and verification checklists. 100% client-side, no API key needed.',
    nav: {
      catalog: '40 Workflows',
      diagram: 'SVG Flow',
      prompt: 'Prompt Builder',
      guide: 'Guide & FAQ',
      saved: 'Export JSON',
    },
    hero: {
      headline: 'How to Do Everyday Tasks with AI, Step by Step',
      subtitle:
        'Pick one of 40 practical tasks—from writing a clear email or summarizing a PDF to planning meals or fixing a spreadsheet formula—follow the interactive SVG workflow, fill the local prompt builder, and verify the output.',
      searchIntentNote:
        'Popular guides: how to write an email with AI · how to summarize a PDF with AI · how to study with AI · how to plan meals with AI · how to compare options with AI',
      transparentNotice:
        '100% client-side AI workflow guides and local prompt builders. No AI API calls are made by this site; always verify facts, figures, dates, and sensitive outputs before using them.',
    },
    categories: {
      writing: {name: 'Writing & Emails', short: 'Emails, clarity, tone & agendas'},
      studying: {name: 'Studying & Reading', short: 'Summaries, analogies & quizzes'},
      planning: {name: 'Planning & Home', short: 'Meals, travel, chores & lists'},
      work: {name: 'Work & Decisions', short: 'Comparisons, interviews & risks'},
      creativity: {name: 'Creativity & Slides', short: 'Ideas, decks, names & drafts'},
      spreadsheets: {name: 'Sheets & Scripts', short: 'Formulas, cleanup & automation'},
    },
    allCategories: 'All 40 Tasks',
    difficulties: {
      starter: 'Starter',
      structured: 'Structured',
      'multi-step': 'Multi-Step',
    },
    catalog: {
      searchPlaceholder: 'Search task (e.g. email, PDF, meal, Excel)...',
      filterAll: 'All',
      filterFavorites: 'Favorites',
      filterCompleted: 'Completed',
      workflowsCount: 'workflows',
      minutesUnit: 'min',
      emptyTitle: 'No workflows match that filter.',
      emptyAction: 'Show all 40 workflows',
      modulePrefix: 'Task',
    },
    diagram: {
      heading: 'Interactive Workflow Diagram',
      play: 'Play',
      pause: 'Pause',
      prev: 'Previous',
      next: 'Next',
      reset: 'Reset',
      stepOf: 'Step',
      humanGateLabel: 'Human Verification Gate',
      inputLabel: 'Your Input & Constraints',
      aiDraftLabel: 'AI Draft Output',
      finalOutputLabel: 'Verified Result',
    },
    checklist: {
      heading: 'Step-by-Step Checklist',
      completedCount: 'steps checked',
      markWorkflowDone: 'Mark Workflow Complete',
      workflowDone: 'Workflow Completed',
      verificationTitle: 'Human Verification Required',
    },
    promptBuilder: {
      heading: 'Local Prompt Builder',
      subheading: 'Fill in your own details below to assemble a structured prompt locally in your browser.',
      generatedLabel: 'Ready-to-Copy Prompt',
      copyBtn: 'Copy Prompt',
      copiedBtn: 'Copied to Clipboard',
      resetBtn: 'Reset Defaults',
      notesLabel: 'Personal Notes & Drafts (saved locally)',
      notesPlaceholder: 'Paste your draft edits, verification reminders, or tweaks here...',
    },
    actions: {
      favorite: 'Save Favorite',
      favorited: 'Saved',
      printCard: 'Print Sheet',
      exportJson: 'Export JSON',
      importJson: 'Import JSON',
      clearLocal: 'Reset Saved Data',
      copyShareLink: 'Copy Task Link',
      linkCopied: 'Link Copied',
      importSuccess: 'Local progress and prompt drafts imported.',
      importError: 'Invalid JSON backup file. Please select a valid AIDoSteps export.',
      clearedMessage: 'Local progress and custom drafts reset.',
    },
    ads: {
      label: 'Sponsored',
    },
    affiliate: {
      heading: 'Practical Gear & Reference Guides for Focused Work',
      subheading:
        'Selected physical tools and books that pair well with structured writing, planning, and deep work.',
      disclosure: 'Affiliate links: we may earn a small commission at no extra cost to you.',
      cta: 'View Resource',
      items: [
        {
          category: 'Clear Writing Book',
          title: 'On Writing Well / Plain-Language Editing Guides',
          reason: 'Sharpens your eye for cutting fluff when reviewing AI-generated drafts.',
          url: 'https://www.amazon.com/s?k=On+Writing+Well+William+Zinsser',
        },
        {
          category: 'Planning Notebook & Desk Pad',
          title: 'Weekly Structured Desk Planner & Dot-Grid Pad',
          reason: 'Ideal for sketching task priorities and meal plans alongside digital checklists.',
          url: 'https://www.amazon.com/s?k=structured+weekly+desk+planner+pad',
        },
        {
          category: 'Voice & Calls',
          title: 'USB Condenser Microphone & Noise-Canceling Headset',
          reason: 'Clean voice dictation lets you speak rough context 3x faster before prompting.',
          url: 'https://www.amazon.com/s?k=usb+desk+microphone+noise+canceling+headset',
        },
        {
          category: 'Desk Ergonomics',
          title: 'Compact Desktop Whiteboard & Monitor Light Bar',
          reason: 'Keeps daily human verification rules and active priorities visible without eye strain.',
          url: 'https://www.amazon.com/s?k=desktop+glass+whiteboard+monitor+light+bar',
        },
      ],
    },
    editorial: {
      heading: 'How to Get Reliable Results from AI on Everyday Tasks',
      intro:
        'Most disappointing AI answers happen because the request lacks context, format rules, or a verification step. These practical principles work across any AI chat tool without relying on gimmicks.',
      sections: [
        {
          title: '1. Structure Every Request with Context, Format, and Boundaries',
          body: 'Instead of vague one-line wishes, give the tool four concrete pieces of information: who the audience is, what raw material you are starting from, the exact output structure you want (bullet list, table, 120-word email), and what it must avoid.',
          bullets: [
            'Specify length and structure upfront (e.g., "3 bullet points under 15 words each").',
            'Provide raw facts or rough notes rather than asking the AI to guess them.',
            'Include explicit negative boundaries such as "do not invent statistics or dates".',
          ],
        },
        {
          title: '2. Always Run a Human Verification Pass Before Sending or Publishing',
          body: 'Language models predict plausible wording—they do not automatically verify truth, math, or tone fit. Treat every first response as an editable draft that needs a fast targeted check.',
          bullets: [
            'Verify all proper names, dates, currency amounts, URLs, and spreadsheet cell references.',
            'Read emails and messages aloud once to catch robotic phrasing or overly stiff tone.',
            'Test formulas and local scripts on a small copy of your file before touching real data.',
          ],
        },
        {
          title: '3. Protect Privacy and Sensitive Information',
          body: 'Never paste passwords, bank numbers, private medical records, client contracts, or confidential keys into public AI interfaces. Replace real identifiers with neutral placeholders before pasting.',
          bullets: [
            'Swap client or coworker names for [Client A] or [Manager] when drafting.',
            'Remove account IDs, tax numbers, and private addresses from spreadsheet samples.',
            'Use this site locally: your prompt fields, notes, and progress stay strictly in browser localStorage.',
          ],
        },
      ],
      faqHeading: 'Frequently Asked Questions',
      faqs: [
        {
          q: 'Does AIDoSteps connect to an AI API or require an account?',
          a: 'No. AIDoSteps runs 100% locally in your browser with zero external AI API calls, no sign-up, and no usage limits. You assemble your tailored prompt here and paste it into whichever AI assistant you prefer.',
        },
        {
          q: 'Where are my custom prompts, notes, and completed steps saved?',
          a: 'Everything is stored locally in your browser via localStorage. You can also export a complete JSON backup at any time and import it on another device.',
        },
        {
          q: 'Can I print a workflow to follow offline or at my desk?',
          a: 'Yes. Click Print Sheet to generate a clean paper-ready layout containing the workflow title, SVG diagram, step checklist, verification check, and your assembled prompt without menus or ads.',
        },
        {
          q: 'Why does every workflow include a Human Verification Gate?',
          a: 'AI outputs can contain subtle factual errors, wrong spreadsheet cell offsets, or awkward tone. Each module highlights the exact risk you should check before acting on the result.',
        },
        {
          q: 'Are the prompt builders available in languages other than English?',
          a: 'Yes. Every one of the 40 workflows, interactive diagrams, prompt fields, and editorial guides works natively across 10 languages including Spanish, French, German, Portuguese, Arabic (RTL), Hindi, Russian, Chinese, and Japanese.',
        },
      ],
    },
    footer: {
      tagline: 'Practical, deterministic AI workflow guides and local prompt builders.',
      canonicalNote: 'Canonical site: https://aidosteps.bastelar.com',
      privacyNote: 'Zero tracking servers. All workspace state stays on your device.',
    },
  },
  es: {
    siteTitle: 'AIDoSteps — Cómo Hacer Tareas Cotidianas con IA, Flujos Paso a Paso y Diagramas SVG',
    siteDescription:
      '40 flujos prácticos paso a paso con IA, diagramas SVG interactivos, constructor local de prompts rellenable y checklist de verificación. 100 % en tu navegador, sin API.',
    nav: {
      catalog: '40 Flujos',
      diagram: 'Diagrama SVG',
      prompt: 'Constructor',
      guide: 'Guía y FAQ',
      saved: 'Exportar JSON',
    },
    hero: {
      headline: 'Cómo Hacer Tareas Cotidianas con IA, Paso a Paso',
      subtitle:
        'Elige una de las 40 tareas prácticas —desde redactar un correo claro o resumir un PDF hasta planificar menús o corregir fórmulas de Excel—, sigue el diagrama SVG interactivo, rellena el prompt local y verifica el resultado.',
      searchIntentNote:
        'Guías más buscadas: cómo escribir un correo con IA · cómo resumir un PDF con IA · cómo estudiar con IA · cómo planificar menús con IA · cómo comparar opciones con IA',
      transparentNotice:
        'Guías de flujo de trabajo con IA y constructores de prompts 100 % en el navegador. Este sitio no realiza llamadas a APIs de IA; verifica siempre datos, cifras, fechas y resultados sensibles antes de usarlos.',
    },
    categories: {
      writing: {name: 'Escritura y Correos', short: 'Correos, claridad, tono y actas'},
      studying: {name: 'Estudio y Lectura', short: 'Resúmenes, analogías y repaso'},
      planning: {name: 'Planificación y Hogar', short: 'Menús, viajes, tareas y listas'},
      work: {name: 'Trabajo y Decisiones', short: 'Comparativas, entrevistas y riesgos'},
      creativity: {name: 'Creatividad y Slides', short: 'Ideas, guiones, nombres y notas'},
      spreadsheets: {name: 'Hojas y Scripts', short: 'Fórmulas, limpieza y automatización'},
    },
    allCategories: 'Las 40 Tareas',
    difficulties: {
      starter: 'Inicial',
      structured: 'Estructurado',
      'multi-step': 'Multipaso',
    },
    catalog: {
      searchPlaceholder: 'Buscar tarea (ej. correo, PDF, menú, Excel)...',
      filterAll: 'Todos',
      filterFavorites: 'Favoritos',
      filterCompleted: 'Completados',
      workflowsCount: 'flujos',
      minutesUnit: 'min',
      emptyTitle: 'Ningún flujo coincide con ese filtro.',
      emptyAction: 'Ver los 40 flujos',
      modulePrefix: 'Tarea',
    },
    diagram: {
      heading: 'Diagrama Interactivo del Flujo',
      play: 'Reproducir',
      pause: 'Pausar',
      prev: 'Anterior',
      next: 'Siguiente',
      reset: 'Reiniciar',
      stepOf: 'Paso',
      humanGateLabel: 'Control de Verificación Humana',
      inputLabel: 'Tu Contexto y Límites',
      aiDraftLabel: 'Borrador de la IA',
      finalOutputLabel: 'Resultado Verificado',
    },
    checklist: {
      heading: 'Checklist Paso a Paso',
      completedCount: 'pasos marcados',
      markWorkflowDone: 'Marcar Flujo Completado',
      workflowDone: 'Flujo Completado',
      verificationTitle: 'Verificación Humana Obligatoria',
    },
    promptBuilder: {
      heading: 'Constructor Local de Prompts',
      subheading: 'Rellena tus datos abajo para generar al instante una instrucción clara en tu navegador.',
      generatedLabel: 'Prompt Listo para Copiar',
      copyBtn: 'Copiar Prompt',
      copiedBtn: 'Copiado al Portapapeles',
      resetBtn: 'Restablecer Valores',
      notesLabel: 'Notas y Borradores Personales (guardado local)',
      notesPlaceholder: 'Anota aquí ajustes, recordatorios de revisión o variantes...',
    },
    actions: {
      favorite: 'Guardar Favorito',
      favorited: 'En Favoritos',
      printCard: 'Imprimir Ficha',
      exportJson: 'Exportar JSON',
      importJson: 'Importar JSON',
      clearLocal: 'Borrar Datos Locales',
      copyShareLink: 'Copiar Enlace',
      linkCopied: 'Enlace Copiado',
      importSuccess: 'Progreso local y borradores importados correctamente.',
      importError: 'Archivo JSON no válido. Selecciona una copia de seguridad de AIDoSteps.',
      clearedMessage: 'Progreso local y notas restablecidos.',
    },
    ads: {
      label: 'Publicidad',
    },
    affiliate: {
      heading: 'Herramientas Prácticas y Guías para Trabajar con Enfoque',
      subheading:
        'Selección contextual de libros y accesorios que complementan la escritura clara y la planificación.',
      disclosure: 'Enlaces de afiliado: podemos recibir una pequeña comisión sin coste adicional para ti.',
      cta: 'Ver Recurso',
      items: [
        {
          category: 'Libro de Escritura Clara',
          title: 'Guías Prácticas de Redacción Clara y Edición Directa',
          reason: 'Entrena el criterio para eliminar relleno al revisar borradores generados con IA.',
          url: 'https://www.amazon.es/s?k=redaccion+clara+escritura+practica',
        },
        {
          category: 'Libreta y Planificador',
          title: 'Planificador Semanal de Escritorio y Cuaderno de Puntos',
          reason: 'Útil para ordenar prioridades y menús en papel junto a tus listas digitales.',
          url: 'https://www.amazon.es/s?k=planificador+semanal+escritorio+cuaderno',
        },
        {
          category: 'Voz y Dictado',
          title: 'Micrófono USB de Escritorio y Auriculares con Cancelación',
          reason: 'Dictar el contexto inicial ahorra minutos antes de estructurar el prompt.',
          url: 'https://www.amazon.es/s?k=microfono+usb+escritorio+auriculares',
        },
        {
          category: 'Accesorios de Mesa',
          title: 'Pizarra Blanca de Sobremesa y Barra de Luz para Monitor',
          reason: 'Mantiene visibles los pasos de verificación sin fatiga visual.',
          url: 'https://www.amazon.es/s?k=pizarra+escritorio+barra+luz+monitor',
        },
      ],
    },
    editorial: {
      heading: 'Cómo Obtener Resultados Fiables con IA en Tareas Diarias',
      intro:
        'La mayoría de respuestas flojas de la IA ocurren por falta de contexto, formato o revisión. Estos principios funcionan en cualquier asistente sin trucos vacíos.',
      sections: [
        {
          title: '1. Estructura Cada Petición con Contexto, Formato y Límites',
          body: 'En lugar de pedir algo genérico en una línea, indica cuatro elementos concretos: quién leerá el resultado, de qué información partes, qué estructura exacta necesitas y qué debe evitar.',
          bullets: [
            'Define longitud y formato desde el inicio (ej. "3 viñetas de menos de 15 palabras").',
            'Aporta datos o notas reales para que la IA no invente cifras.',
            'Añade límites negativos explícitos como "no inventes fechas ni estadísticas".',
          ],
        },
        {
          title: '2. Realiza Siempre una Revisión Humana Antes de Usar el Texto',
          body: 'Los modelos redactan texto verosímil, pero no comprueban hechos, cálculos ni matices personales por sí solos. Trata cada salida como un primer borrador.',
          bullets: [
            'Comprueba nombres propios, fechas, importes, enlaces y rangos de celdas.',
            'Lee correos en voz alta para detectar frases artificiales o demasiado rígidas.',
            'Prueba cualquier fórmula o script primero en una copia de seguridad.',
          ],
        },
        {
          title: '3. Protege tu Privacidad y Datos Sensibles',
          body: 'No pegues contraseñas, cuentas bancarias, informes médicos ni datos confidenciales de clientes en chats públicos. Sustituye nombres reales por marcadores neutros.',
          bullets: [
            'Cambia nombres reales por [Cliente A] o [Responsable] al redactar borradores.',
            'Elimina DNI, teléfonos y direcciones privadas antes de compartir ejemplos de tablas.',
            'En AIDoSteps tus variables y notas se guardan solo en tu navegador.',
          ],
        },
      ],
      faqHeading: 'Preguntas Frecuentes',
      faqs: [
        {
          q: '¿AIDoSteps llama a alguna API de IA o requiere registro?',
          a: 'No. AIDoSteps funciona 100 % en tu navegador sin llamadas externas a APIs, sin cuentas y sin cuotas. Construyes tu prompt aquí y lo copias al asistente que prefieras.',
        },
        {
          q: '¿Dónde se guardan mis notas, favoritos y prompts editados?',
          a: 'Todo se guarda localmente en el localStorage de tu navegador. También puedes exportar una copia en JSON e importarla en otro equipo.',
        },
        {
          q: '¿Puedo imprimir una ficha de flujo para consultarla en papel?',
          a: 'Sí. El botón Imprimir Ficha genera una hoja limpia con el título, el diagrama SVG, los pasos, el aviso de verificación y tu prompt completo sin menús ni anuncios.',
        },
        {
          q: '¿Por qué cada módulo incluye un Control de Verificación Humana?',
          a: 'La IA puede cometer errores sutiles en fechas, referencias de celdas o tono. Cada ficha señala el punto exacto que conviene revisar antes de dar el trabajo por bueno.',
        },
        {
          q: '¿Están traducidos los 40 flujos y constructores a los 10 idiomas?',
          a: 'Sí. Todos los títulos, pasos, diagramas, campos del constructor y guías están disponibles en los 10 idiomas con soporte automático RTL para árabe.',
        },
      ],
    },
    footer: {
      tagline: 'Guías prácticas deterministas de flujos con IA y constructores locales de prompts.',
      canonicalNote: 'Dominio canónico: https://aidosteps.bastelar.com',
      privacyNote: 'Sin servidores de rastreo. Todo tu progreso permanece en tu dispositivo.',
    },
  },
  fr: {
    siteTitle: 'AIDoSteps — Comment Réaliser des Tâches Quotidiennes avec l’IA, Flux & Diagrammes SVG',
    siteDescription:
      '40 flux de travail pratiques étape par étape avec l’IA, diagrammes SVG interactifs, générateur local de prompts et liste de vérification. 100 % côté client.',
    nav: {
      catalog: '40 Flux',
      diagram: 'Schéma SVG',
      prompt: 'Générateur',
      guide: 'Guide & FAQ',
      saved: 'Export JSON',
    },
    hero: {
      headline: 'Comment Réaliser Vos Tâches Quotidiennes avec l’IA, Étape par Étape',
      subtitle:
        'Choisissez parmi 40 tâches concrètes — rédiger un e-mail clair, résumer un PDF, planifier vos repas ou corriger une formule — suivez le schéma SVG, remplissez le prompt local et vérifiez le résultat.',
      searchIntentNote:
        'Recherches fréquentes : comment écrire un e-mail avec l’IA · comment résumer un PDF avec l’IA · comment réviser avec l’IA · comment comparer des options avec l’IA',
      transparentNotice:
        'Guides et générateurs de prompts 100 % côté client. Aucun appel API IA n’est effectué par ce site ; vérifiez toujours les faits, chiffres, dates et données sensibles.',
    },
    categories: {
      writing: {name: 'Écriture & E-mails', short: 'E-mails, clarté, ton & comptes-rendus'},
      studying: {name: 'Études & Lecture', short: 'Résumés, analogies & quiz'},
      planning: {name: 'Planning & Maison', short: 'Repas, voyages, tâches & listes'},
      work: {name: 'Travail & Décisions', short: 'Comparatifs, entretiens & risques'},
      creativity: {name: 'Créativité & Slides', short: 'Idées, présentations, noms & notes'},
      spreadsheets: {name: 'Tableurs & Scripts', short: 'Formules, nettoyage & scripts'},
    },
    allCategories: 'Les 40 Tâches',
    difficulties: {
      starter: 'Débutant',
      structured: 'Structuré',
      'multi-step': 'Multi-étapes',
    },
    catalog: {
      searchPlaceholder: 'Rechercher une tâche (ex. e-mail, PDF, repas, Excel)...',
      filterAll: 'Tous',
      filterFavorites: 'Favoris',
      filterCompleted: 'Terminés',
      workflowsCount: 'flux',
      minutesUnit: 'min',
      emptyTitle: 'Aucun flux ne correspond à ce filtre.',
      emptyAction: 'Afficher les 40 flux',
      modulePrefix: 'Tâche',
    },
    diagram: {
      heading: 'Diagramme Interactif du Flux',
      play: 'Lire',
      pause: 'Pause',
      prev: 'Précédent',
      next: 'Suivant',
      reset: 'Réinitialiser',
      stepOf: 'Étape',
      humanGateLabel: 'Contrôle Humain Requis',
      inputLabel: 'Contexte & Contraintes',
      aiDraftLabel: 'Brouillon IA',
      finalOutputLabel: 'Résultat Vérifié',
    },
    checklist: {
      heading: 'Liste de Contrôle Étape par Étape',
      completedCount: 'étapes cochées',
      markWorkflowDone: 'Marquer comme Terminé',
      workflowDone: 'Flux Terminé',
      verificationTitle: 'Vérification Humaine Obligatoire',
    },
    promptBuilder: {
      heading: 'Générateur Local de Prompt',
      subheading: 'Complétez les champs ci-dessous pour assembler votre prompt localement.',
      generatedLabel: 'Prompt Prêt à Copier',
      copyBtn: 'Copier le Prompt',
      copiedBtn: 'Copié',
      resetBtn: 'Réinitialiser',
      notesLabel: 'Notes Personnelles (sauvegarde locale)',
      notesPlaceholder: 'Ajoutez ici vos ajustements ou rappels de vérification...',
    },
    actions: {
      favorite: 'Favori',
      favorited: 'Enregistré',
      printCard: 'Imprimer',
      exportJson: 'Exporter JSON',
      importJson: 'Importer JSON',
      clearLocal: 'Effacer Données',
      copyShareLink: 'Copier le Lien',
      linkCopied: 'Lien Copié',
      importSuccess: 'Sauvegarde JSON importée avec succès.',
      importError: 'Fichier JSON invalide.',
      clearedMessage: 'Données locales réinitialisées.',
    },
    ads: {label: 'Sponsorisé'},
    affiliate: {
      heading: 'Outils Pratiques et Guides de Productivité',
      subheading: 'Livres et accessoires de bureau adaptés à l’écriture claire et à l’organisation.',
      disclosure: 'Liens affiliés : une commission peut être perçue sans surcoût.',
      cta: 'Voir la Ressource',
      items: [
        {category: 'Écriture Claire', title: 'Guides de Rédaction Claire et Synthèse', reason: 'Aide à raccourcir et clarifier les brouillons IA.', url: 'https://www.amazon.fr/s?k=redaction+claire+ecriture'},
        {category: 'Organisation', title: 'Planificateur Hebdomadaire de Bureau', reason: 'Idéal pour prioriser vos tâches sur papier.', url: 'https://www.amazon.fr/s?k=planificateur+bureau+semainier'},
        {category: 'Dictée Vocale', title: 'Microphone USB & Casque Anti-Bruit', reason: 'Dictez votre contexte trois fois plus vite.', url: 'https://www.amazon.fr/s?k=microphone+usb+casque'},
        {category: 'Bureau', title: 'Tableau Blanc de Bureau & Lampe Écran', reason: 'Garde vos rappels de contrôle visibles.', url: 'https://www.amazon.fr/s?k=tableau+blanc+bureau+lampe+ecran'},
      ],
    },
    editorial: {
      heading: 'Obtenir des Résultats Fiables avec l’IA au Quotidien',
      intro: 'La qualité d’une réponse dépend surtout du contexte fourni, du format demandé et d’une relecture ciblée.',
      sections: [
        {
          title: '1. Donner le Contexte, le Format et les Limites',
          body: 'Précisez le destinataire, la matière de départ, la structure attendue et ce qu’il faut éviter.',
          bullets: ['Indiquez la longueur souhaitée.', 'Fournissez vos notes brutes.', 'Interdisez l’invention de chiffres ou dates.'],
        },
        {
          title: '2. Vérifier Chaque Réponse Avant Envoi',
          body: 'Relisez chaque brouillon pour contrôler les faits, les formules et le ton humain.',
          bullets: ['Vérifiez noms, montants et dates.', 'Relisez à voix haute.', 'Testez formules et scripts sur une copie.'],
        },
        {
          title: '3. Préserver la Confidentialité',
          body: 'Anonymisez noms propres, comptes et documents sensibles avant tout copier-coller.',
          bullets: ['Remplacez les noms par [Client A].', 'Supprimez identifiants et adresses.', 'Vos données AIDoSteps restent sur votre appareil.'],
        },
      ],
      faqHeading: 'Questions Fréquentes',
      faqs: [
        {q: 'Faut-il une clé API pour utiliser AIDoSteps ?', a: 'Non. Tout fonctionne localement dans votre navigateur sans appel API externe.'},
        {q: 'Où sont stockés mes prompts et notes ?', a: 'Dans le localStorage de votre navigateur, avec export et import JSON.'},
        {q: 'Puis-je imprimer une fiche de travail ?', a: 'Oui, via le bouton Imprimer pour obtenir une mise en page épurée sans publicité.'},
      ],
    },
    footer: {
      tagline: 'Guides pratiques déterministes et générateurs locaux de prompts.',
      canonicalNote: 'Domaine canonique : https://aidosteps.bastelar.com',
      privacyNote: 'Aucun serveur de suivi. Vos données restent locales.',
    },
  },
  de: {
    siteTitle: 'AIDoSteps — Alltagsaufgaben mit KI erledigen: Schritt-für-Schritt-Workflows & SVG-Diagramme',
    siteDescription:
      '40 praxisnahe KI-Workflows mit interaktiven SVG-Diagrammen, lokalem Prompt-Baukasten und Prüf-Checklisten. 100 % clientseitig ohne API-Schlüssel.',
    nav: {
      catalog: '40 Workflows',
      diagram: 'SVG-Ablauf',
      prompt: 'Prompt-Tool',
      guide: 'Leitfaden & FAQ',
      saved: 'JSON-Export',
    },
    hero: {
      headline: 'Wie man Alltagsaufgaben Schritt für Schritt mit KI löst',
      subtitle:
        'Wählen Sie aus 40 praktischen Aufgaben — von klaren E-Mails oder PDF-Zusammenfassungen bis zu Wochenplänen und Tabellenformeln — folgen Sie dem SVG-Ablauf und prüfen Sie jedes Ergebnis.',
      searchIntentNote:
        'Häufig gesucht: E-Mail mit KI schreiben · PDF mit KI zusammenfassen · mit KI lernen · Mahlzeiten mit KI planen · Optionen mit KI vergleichen',
      transparentNotice:
        '100 % clientseitige KI-Workflow-Anleitungen und lokale Prompt-Vorlagen. Diese Seite ruft keine KI-APIs auf; prüfen Sie Fakten, Zahlen, Daten und sensible Inhalte immer selbst.',
    },
    categories: {
      writing: {name: 'Schreiben & E-Mails', short: 'E-Mails, Klarheit, Ton & Protokolle'},
      studying: {name: 'Lernen & Lesen', short: 'Zusammenfassungen, Analogien & Quiz'},
      planning: {name: 'Planung & Haushalt', short: 'Mahlzeiten, Reisen, Routinen & Listen'},
      work: {name: 'Arbeit & Analyse', short: 'Vergleiche, Interviews & Risiken'},
      creativity: {name: 'Kreativität & Folien', short: 'Ideen, Präsentationen, Namen & Notizen'},
      spreadsheets: {name: 'Tabellen & Skripte', short: 'Formeln, Bereinigung & Automation'},
    },
    allCategories: 'Alle 40 Aufgaben',
    difficulties: {
      starter: 'Einstieg',
      structured: 'Strukturiert',
      'multi-step': 'Mehrstufig',
    },
    catalog: {
      searchPlaceholder: 'Aufgabe suchen (z. B. E-Mail, PDF, Excel)...',
      filterAll: 'Alle',
      filterFavorites: 'Favoriten',
      filterCompleted: 'Erledigt',
      workflowsCount: 'Workflows',
      minutesUnit: 'Min.',
      emptyTitle: 'Keine Workflows für diesen Filter gefunden.',
      emptyAction: 'Alle 40 Workflows zeigen',
      modulePrefix: 'Aufgabe',
    },
    diagram: {
      heading: 'Interaktives Ablaufdiagramm',
      play: 'Abspielen',
      pause: 'Pause',
      prev: 'Zurück',
      next: 'Weiter',
      reset: 'Zurücksetzen',
      stepOf: 'Schritt',
      humanGateLabel: 'Menschliche Prüfschleife',
      inputLabel: 'Eingabe & Grenzen',
      aiDraftLabel: 'KI-Entwurf',
      finalOutputLabel: 'Geprüftes Ergebnis',
    },
    checklist: {
      heading: 'Schritt-für-Schritt-Checkliste',
      completedCount: 'Schritte abgehakt',
      markWorkflowDone: 'Workflow abschließen',
      workflowDone: 'Abgeschlossen',
      verificationTitle: 'Menschliche Prüfung erforderlich',
    },
    promptBuilder: {
      heading: 'Lokaler Prompt-Baukasten',
      subheading: 'Füllen Sie die Felder aus, um sofort einen strukturierten Prompt im Browser zu erzeugen.',
      generatedLabel: 'Kopierfertiger Prompt',
      copyBtn: 'Prompt kopieren',
      copiedBtn: 'Kopiert',
      resetBtn: 'Zurücksetzen',
      notesLabel: 'Persönliche Notizen (lokal gespeichert)',
      notesPlaceholder: 'Eigene Anpassungen oder Prüfpunkte hier notieren...',
    },
    actions: {
      favorite: 'Merken',
      favorited: 'Gemerkt',
      printCard: 'Drucken',
      exportJson: 'JSON exportieren',
      importJson: 'JSON importieren',
      clearLocal: 'Daten löschen',
      copyShareLink: 'Link kopieren',
      linkCopied: 'Link kopiert',
      importSuccess: 'Lokale Daten erfolgreich importiert.',
      importError: 'Ungültige JSON-Datei.',
      clearedMessage: 'Lokaler Speicher zurückgesetzt.',
    },
    ads: {label: 'Anzeige'},
    affiliate: {
      heading: 'Praktische Werkzeuge & Fachbücher für fokussiertes Arbeiten',
      subheading: 'Ausgewählte Bücher und Schreibtisch-Helfer für klares Schreiben und Planen.',
      disclosure: 'Affiliate-Links: Bei Kauf erhalten wir ggf. eine kleine Provision ohne Aufpreis.',
      cta: 'Ansehen',
      items: [
        {category: 'Klares Schreiben', title: 'Ratgeber für verständliche Texte & Redaktion', reason: 'Hilft beim Kürzen und Schärfen von KI-Entwürfen.', url: 'https://www.amazon.de/s?k=verstaendlich+schreiben+ratgeber'},
        {category: 'Planung', title: 'Wochenplaner-Schreibtischunterlage', reason: 'Ideal für Prioritäten und Wochenpläne neben digitalen Checklisten.', url: 'https://www.amazon.de/s?k=wochenplaner+schreibtischunterlage'},
        {category: 'Spracheingabe', title: 'USB-Tischmikrofon & Headset', reason: 'Kontext per Sprache dreimal schneller erfassen.', url: 'https://www.amazon.de/s?k=usb+mikrofon+schreibtisch+headset'},
        {category: 'Arbeitsplatz', title: 'Tisch-Whiteboard & Monitor-Lichtleiste', reason: 'Hält Prüfschritte griffbereit im Blick.', url: 'https://www.amazon.de/s?k=tisch+whiteboard+monitor+lichtleiste'},
      ],
    },
    editorial: {
      heading: 'Zuverlässige KI-Ergebnisse im Alltag erzielen',
      intro: 'Klare Vorgaben, feste Formate und eine kurze Gegenprüfung machen aus allgemeinen Antworten brauchbare Ergebnisse.',
      sections: [
        {
          title: '1. Kontext, Format und Grenzen vorgeben',
          body: 'Nennen Sie Zielgruppe, Rohmaterial, gewünschte Struktur und was vermieden werden soll.',
          bullets: ['Länge klar begrenzen.', 'Echte Stichpunkte mitgeben.', 'Erfinden von Daten ausdrücklich untersagen.'],
        },
        {
          title: '2. Ergebnisse kurz menschlich prüfen',
          body: 'Kontrollieren Sie Namen, Zahlen, Formeln und Tonfall vor der Verwendung.',
          bullets: ['Fakten und Daten abgleichen.', 'Nachrichten laut gegenlesen.', 'Formeln und Skripte an Kopien testen.'],
        },
        {
          title: '3. Datenschutz wahren',
          body: 'Ersetzen Sie echte Namen, Kontodaten oder vertrauliche Kennungen durch Platzhalter.',
          bullets: ['[Kunde A] statt Klarnamen nutzen.', 'Sensible Spalten entfernen.', 'Alle Eingaben hier bleiben lokal im Browser.'],
        },
      ],
      faqHeading: 'Häufige Fragen',
      faqs: [
        {q: 'Sendet AIDoSteps Daten an eine KI-API?', a: 'Nein. Alles läuft zu 100 % lokal im Browser ohne externe API-Aufrufe.'},
        {q: 'Wo werden meine Notizen und Fortschritte gespeichert?', a: 'Lokal im localStorage Ihres Browsers, inklusive JSON-Export und -Import.'},
        {q: 'Kann ich Workflows ausdrucken?', a: 'Ja, über „Drucken“ erhalten Sie eine saubere Druckansicht ohne Menüs oder Werbung.'},
      ],
    },
    footer: {
      tagline: 'Deterministische KI-Workflow-Leitfäden und lokaler Prompt-Baukasten.',
      canonicalNote: 'Kanonische Domain: https://aidosteps.bastelar.com',
      privacyNote: 'Kein Tracking-Server. Ihre Daten bleiben auf Ihrem Gerät.',
    },
  },
  pt: {
    siteTitle: 'AIDoSteps — Como Fazer Tarefas do Dia a Dia com IA, Fluxos e Diagramas SVG',
    siteDescription:
      '40 fluxos práticos passo a passo com IA, diagramas SVG interativos, gerador local de prompts e checklist de verificação. 100% no navegador, sem API.',
    nav: {
      catalog: '40 Fluxos',
      diagram: 'Diagrama SVG',
      prompt: 'Gerador',
      guide: 'Guia e FAQ',
      saved: 'Exportar JSON',
    },
    hero: {
      headline: 'Como Fazer Tarefas do Dia a Dia com IA, Passo a Passo',
      subtitle:
        'Escolha uma de 40 tarefas práticas — escrever e-mails claros, resumir PDFs, planejar refeições ou ajustar planilhas — siga o diagrama SVG e verifique o resultado.',
      searchIntentNote:
        'Guias populares: como escrever e-mail com IA · como resumir PDF com IA · como estudar com IA · como planejar cardápio com IA · como comparar opções com IA',
      transparentNotice:
        'Guias e geradores de prompt 100% locais no navegador. Este site não faz chamadas a APIs de IA; verifique sempre fatos, valores, datas e dados sensíveis.',
    },
    categories: {
      writing: {name: 'Escrita e E-mails', short: 'E-mails, clareza, tom e atas'},
      studying: {name: 'Estudo e Leitura', short: 'Resumos, analogias e testes'},
      planning: {name: 'Planejamento e Casa', short: 'Refeições, viagens, rotinas e listas'},
      work: {name: 'Trabalho e Decisões', short: 'Comparações, entrevistas e riscos'},
      creativity: {name: 'Criatividade e Slides', short: 'Ideias, roteiros, nomes e notas'},
      spreadsheets: {name: 'Planilhas e Scripts', short: 'Fórmulas, limpeza e automação'},
    },
    allCategories: 'Todas as 40 Tarefas',
    difficulties: {starter: 'Inicial', structured: 'Estruturado', 'multi-step': 'Multietapas'},
    catalog: {
      searchPlaceholder: 'Buscar tarefa (ex. e-mail, PDF, cardápio, Excel)...',
      filterAll: 'Todos',
      filterFavorites: 'Favoritos',
      filterCompleted: 'Concluídos',
      workflowsCount: 'fluxos',
      minutesUnit: 'min',
      emptyTitle: 'Nenhum fluxo encontrado para este filtro.',
      emptyAction: 'Mostrar todos os 40 fluxos',
      modulePrefix: 'Tarefa',
    },
    diagram: {
      heading: 'Diagrama Interativo do Fluxo',
      play: 'Reproduzir',
      pause: 'Pausar',
      prev: 'Anterior',
      next: 'Próximo',
      reset: 'Reiniciar',
      stepOf: 'Passo',
      humanGateLabel: 'Verificação Humana',
      inputLabel: 'Seu Contexto e Limites',
      aiDraftLabel: 'Rascunho da IA',
      finalOutputLabel: 'Resultado Verificado',
    },
    checklist: {
      heading: 'Checklist Passo a Passo',
      completedCount: 'passos marcados',
      markWorkflowDone: 'Concluir Fluxo',
      workflowDone: 'Fluxo Concluído',
      verificationTitle: 'Verificação Humana Obrigatória',
    },
    promptBuilder: {
      heading: 'Construtor Local de Prompts',
      subheading: 'Preencha os campos abaixo para montar seu prompt estruturado localmente.',
      generatedLabel: 'Prompt Pronto para Copiar',
      copyBtn: 'Copiar Prompt',
      copiedBtn: 'Copiado',
      resetBtn: 'Restaurar Padrão',
      notesLabel: 'Notas Pessoais (salvas localmente)',
      notesPlaceholder: 'Anote ajustes ou lembretes de revisão aqui...',
    },
    actions: {
      favorite: 'Favoritar',
      favorited: 'Favoritado',
      printCard: 'Imprimir Ficha',
      exportJson: 'Exportar JSON',
      importJson: 'Importar JSON',
      clearLocal: 'Limpar Dados',
      copyShareLink: 'Copiar Link',
      linkCopied: 'Link Copiado',
      importSuccess: 'Backup JSON importado com sucesso.',
      importError: 'Arquivo JSON inválido.',
      clearedMessage: 'Dados locais redefinidos.',
    },
    ads: {label: 'Publicidade'},
    affiliate: {
      heading: 'Livros e Acessórios Úteis para Produtividade',
      subheading: 'Recursos selecionados para escrita clara e organização diária.',
      disclosure: 'Links de afiliado: podemos receber uma pequena comissão sem custo extra.',
      cta: 'Ver Recurso',
      items: [
        {category: 'Escrita Clara', title: 'Guias de Redação Objetiva e Revisão', reason: 'Ajuda a cortar excessos ao revisar textos de IA.', url: 'https://www.amazon.com.br/s?k=redacao+clara+escrita'},
        {category: 'Planejamento', title: 'Planner Semanal de Mesa e Caderno Pontado', reason: 'Ótimo para organizar prioridades no papel.', url: 'https://www.amazon.com.br/s?k=planner+semanal+mesa'},
        {category: 'Voz e Foco', title: 'Microfone USB e Headset com Cancelamento', reason: 'Ditar contexto agiliza a criação de prompts.', url: 'https://www.amazon.com.br/s?k=microfone+usb+headset'},
        {category: 'Mesa', title: 'Quadro Branco de Mesa e Barra de Luz', reason: 'Mantém lembretes de revisão sempre visíveis.', url: 'https://www.amazon.com.br/s?k=quadro+branco+mesa+luminaria+monitor'},
      ],
    },
    editorial: {
      heading: 'Como Obter Respostas Confiáveis com IA no Dia a Dia',
      intro: 'Contexto claro, formato definido e revisão humana rápida transformam respostas vagas em trabalho útil.',
      sections: [
        {title: '1. Defina Contexto, Formato e Limites', body: 'Informe destinatário, dados reais de partida, formato exato e restrições.', bullets: ['Defina tamanho máximo.', 'Forneça notas reais.', 'Proíba inventar datas ou números.']},
        {title: '2. Faça Sempre uma Revisão Humana', body: 'Confira fatos, fórmulas e naturalidade do tom antes de usar.', bullets: ['Cheque nomes e valores.', 'Leia em voz alta.', 'Teste fórmulas em uma cópia.']},
        {title: '3. Proteja Dados Sensíveis', body: 'Substitua nomes reais e códigos privados por marcadores neutros.', bullets: ['Use [Cliente A] em rascunhos.', 'Remova documentos e contas.', 'Tudo no AIDoSteps fica no seu navegador.']},
      ],
      faqHeading: 'Perguntas Frequentes',
      faqs: [
        {q: 'O AIDoSteps usa alguma API paga?', a: 'Não. Tudo funciona 100% no navegador sem chamadas externas.'},
        {q: 'Onde ficam salvos meus rascunhos e notas?', a: 'No localStorage do seu dispositivo, com exportação e importação em JSON.'},
        {q: 'Posso imprimir uma ficha limpa?', a: 'Sim, o botão Imprimir Ficha oculta menus e anúncios automaticamente.'},
      ],
    },
    footer: {
      tagline: 'Guias práticos determinísticos e construtores locais de prompts.',
      canonicalNote: 'Domínio canônico: https://aidosteps.bastelar.com',
      privacyNote: 'Sem rastreamento externo. Seus dados permanecem no dispositivo.',
    },
  },
  ar: {
    siteTitle: 'AIDoSteps — كيفية إنجاز المهام اليومية بالذكاء الاصطناعي بخطوات ومخططات SVG',
    siteDescription:
      '40 دليل عمل تفاعلياً خطوة بخطوة مع الذكاء الاصطناعي، مخططات SVG تفاعلية، منشئ أوامر محلي وقوائم تحقق. يعمل 100% في المتصفح دون مفتاح API.',
    nav: {
      catalog: '40 مساراً',
      diagram: 'مخطط SVG',
      prompt: 'منشئ الأمر',
      guide: 'الدليل والأسئلة',
      saved: 'تصدير JSON',
    },
    hero: {
      headline: 'كيفية إنجاز المهام اليومية بالذكاء الاصطناعي خطوة بخطوة',
      subtitle:
        'اختر من بين 40 مهمة عملية — من كتابة بريد واضح وتلخيص ملفات PDF إلى تخطيط الوجبات وإصلاح معادلات الجداول — وتابع مخطط SVG التفاعلي وتحقق من النتيجة.',
      searchIntentNote:
        'الأكثر بحثاً: كيفية كتابة بريد إلكتروني بالذكاء الاصطناعي · تلخيص PDF · الدراسة · تخطيط الوجبات · مقارنة الخيارات',
      transparentNotice:
        'أدلة عمل ومنشئات أوامر تعمل محلياً 100% في متصفحك. لا يجري هذا الموقع أي اتصالات بواجهات ذكاء اصطناعي؛ تحقق دائماً من الحقائق والأرقام والتواريخ.',
    },
    categories: {
      writing: {name: 'الكتابة والبريد', short: 'رسائل واضحة ونبرة ومحاضر'},
      studying: {name: 'الدراسة والقراءة', short: 'ملخصات وتشبيهات واختبارات'},
      planning: {name: 'التخطيط والمنزل', short: 'وجبات وسفر ومهام وقوائم'},
      work: {name: 'العمل والقرارات', short: 'مقارنات ومقابلات ومخاطر'},
      creativity: {name: 'الإبداع والعروض', short: 'أفكار وشرائح وأسماء ومسودات'},
      spreadsheets: {name: 'الجداول والبرمجة', short: 'معادلات وتنظيف وأتمتة'},
    },
    allCategories: 'جميع المهام الـ 40',
    difficulties: {starter: 'أساسي', structured: 'منظم', 'multi-step': 'متعدد الخطوات'},
    catalog: {
      searchPlaceholder: 'ابحث عن مهمة (بريد، PDF، وجبات، Excel)...',
      filterAll: 'الكل',
      filterFavorites: 'المفضلة',
      filterCompleted: 'المكتملة',
      workflowsCount: 'مساراً',
      minutesUnit: 'د',
      emptyTitle: 'لا توجد مسارات مطابقة لهذا البحث.',
      emptyAction: 'عرض جميع المهام الـ 40',
      modulePrefix: 'مهمة',
    },
    diagram: {
      heading: 'مخطط سير العمل التفاعلي',
      play: 'تشغيل',
      pause: 'إيقاف',
      prev: 'السابق',
      next: 'التالي',
      reset: 'إعادة',
      stepOf: 'الخطوة',
      humanGateLabel: 'بوابة التحقق البشري',
      inputLabel: 'السياق والقيود',
      aiDraftLabel: 'مسودة الذكاء الاصطناعي',
      finalOutputLabel: 'النتيجة المدققة',
    },
    checklist: {
      heading: 'قائمة التحقق خطوة بخطوة',
      completedCount: 'خطوات مكتملة',
      markWorkflowDone: 'تحديد كمكتمل',
      workflowDone: 'تم إكمال المسار',
      verificationTitle: 'تحقق بشري مطلوب',
    },
    promptBuilder: {
      heading: 'منشئ الأوامر المحلي',
      subheading: 'أدخل تفاصيلك أدناه لتجميع أمر منظم محلياً داخل متصفحك.',
      generatedLabel: 'الأمر الجاهز للنسخ',
      copyBtn: 'نسخ الأمر',
      copiedBtn: 'تم النسخ',
      resetBtn: 'استعادة الافتراضي',
      notesLabel: 'ملاحظات شخصية (محفوظة محلياً)',
      notesPlaceholder: 'اكتب تعديلاتك أو نقاط المراجعة هنا...',
    },
    actions: {
      favorite: 'تفضيل',
      favorited: 'مفضل',
      printCard: 'طباعة البطاقة',
      exportJson: 'تصدير JSON',
      importJson: 'استيراد JSON',
      clearLocal: 'مسح البيانات',
      copyShareLink: 'نسخ الرابط',
      linkCopied: 'تم نسخ الرابط',
      importSuccess: 'تم استيراد النسخة الاحتياطية بنجاح.',
      importError: 'ملف JSON غير صالح.',
      clearedMessage: 'تمت إعادة ضبط البيانات المحلية.',
    },
    ads: {label: 'إعلان'},
    affiliate: {
      heading: 'أدوات ومراجع عملية للعمل بتركيز',
      subheading: 'كتب وأدوات مكتب مختارة تدعم الكتابة الواضحة والتخطيط اليومي.',
      disclosure: 'روابط تسويق بالعمولة: قد نحصل على عمولة بسيطة دون تكلفة إضافية عليك.',
      cta: 'عرض المورد',
      items: [
        {category: 'الكتابة الواضحة', title: 'أدلة التحرير الواضح والأسلوب المباشر', reason: 'تساعدك على تنقيح مسودات الذكاء الاصطناعي.', url: 'https://www.amazon.com/s?k=On+Writing+Well'},
        {category: 'التخطيط', title: 'مفكرة أسبوعية للمكتب ودفتر منقط', reason: 'مثالية لترتيب الأولويات وقوائم المنزل.', url: 'https://www.amazon.com/s?k=weekly+desk+planner'},
        {category: 'الإملاء الصوتي', title: 'ميكروفون USB وسماعة عازلة للضوضاء', reason: 'إملاء السياق أسرع بثلاث مرات من الكتابة.', url: 'https://www.amazon.com/s?k=usb+desk+microphone'},
        {category: 'المكتب', title: 'سبورة مكتبية صغيرة وإضاءة شاشة', reason: 'تبقي قواعد التحقق أمام عينيك بوضوح.', url: 'https://www.amazon.com/s?k=desktop+whiteboard+light+bar'},
      ],
    },
    editorial: {
      heading: 'كيف تحصل على نتائج موثوقة من الذكاء الاصطناعي يومياً',
      intro: 'تحديد السياق والشكل المطلوب والمراجعة البشرية السريعة أهم من أي حيل جاهزة.',
      sections: [
        {title: '1. حدد السياق والصيغة والقيود', body: 'اذكر الجمهور المستهدف، المادة الأولية، الشكل المطلوب، وما يجب تجنبه.', bullets: ['حدد الطول المطلوب.', 'أرفق حقائقك وملاحظاتك.', 'امنع اختلاق الأرقام والتواريخ.']},
        {title: '2. راجع النتيجة بشرياً قبل الاستخدام', body: 'تحقق من الأسماء والأرقام والمعادلات وسلاسة الأسلوب.', bullets: ['دقق التواريخ والمبالغ.', 'اقرأ الرسالة بصوت مسموع.', 'اختبر المعادلات على نسخة.']},
        {title: '3. احمِ خصوصيتك وبياناتك الحساسة', body: 'استبدل الأسماء الحقيقية والأرقام السرية برموز محايدة قبل اللصق.', bullets: ['استخدم [عميل أ] بدلاً من الاسم.', 'احذف أرقام الحسابات.', 'تبقى بياناتك هنا في متصفحك فقط.']},
      ],
      faqHeading: 'الأسئلة الشائعة',
      faqs: [
        {q: 'هل يتصل الموقع بأي واجهة ذكاء اصطناعي خارجية؟', a: 'لا، يعمل بالكامل محلياً في متصفحك دون اشتراك أو حدود استخدام.'},
        {q: 'أين تُحفظ ملاحظاتي وتقدمي؟', a: 'في ذاكرة المتصفح المحلية localStorage مع إمكانية التصدير والاستيراد بصيغة JSON.'},
        {q: 'هل يمكنني طباعة المسار على الورق؟', a: 'نعم، زر الطباعة ينشئ صفحة نظيفة من دون قوائم أو إعلانات.'},
      ],
    },
    footer: {
      tagline: 'أدلة عمل حتمية ومنشئات أوامر محلية.',
      canonicalNote: 'النطاق الأساسي: https://aidosteps.bastelar.com',
      privacyNote: 'لا خوادم تتبع. تبقى بياناتك على جهازك.',
    },
  },
  hi: {
    siteTitle: 'AIDoSteps — AI से रोज़मर्रा के काम कैसे करें: स्टेप-बाय-स्टेप वर्कफ़्लो और SVG डायग्राम',
    siteDescription:
      '40 व्यावहारिक AI वर्कफ़्लो, इंटरैक्टिव SVG फ़्लो डायग्राम, लोकल प्रॉम्प्ट बिल्डर और वेरिफ़िकेशन चेकलिस्ट। 100% ब्राउज़र में, बिना API के।',
    nav: {
      catalog: '40 वर्कफ़्लो',
      diagram: 'SVG डायग्राम',
      prompt: 'प्रॉम्प्ट बिल्डर',
      guide: 'गाइड और FAQ',
      saved: 'JSON निर्यात',
    },
    hero: {
      headline: 'AI से रोज़मर्रा के काम स्टेप-बाय-स्टेप कैसे करें',
      subtitle:
        '40 व्यावहारिक कार्यों में से चुनें — साफ़ ईमेल लिखना, PDF का सार बनाना, मील प्लान करना या स्प्रेडशीट फ़ॉर्मूला ठीक करना — SVG फ़्लो देखें और परिणाम सत्यापित करें।',
      searchIntentNote:
        'लोकप्रिय गाइड: AI से ईमेल कैसे लिखें · PDF सारांश कैसे बनाएं · AI से पढ़ाई कैसे करें · विकल्पों की तुलना कैसे करें',
      transparentNotice:
        '100% क्लाइंट-साइड AI वर्कफ़्लो गाइड और लोकल प्रॉम्प्ट बिल्डर। यह साइट कोई AI API कॉल नहीं करती; तथ्यों, संख्याओं और तिथियों की हमेशा जांच करें।',
    },
    categories: {
      writing: {name: 'लेखन और ईमेल', short: 'ईमेल, स्पष्टता, टोन और एजेंडा'},
      studying: {name: 'अध्ययन और पठन', short: 'सार, उदाहरण और क्विज़'},
      planning: {name: 'योजना और घर', short: 'भोजन, यात्रा, रूटीन और सूचियाँ'},
      work: {name: 'कार्य और निर्णय', short: 'तुलना, इंटरव्यू और जोखिम'},
      creativity: {name: 'रचनात्मकता और स्लाइड्स', short: 'विचार, स्क्रिप्ट, नाम और नोट्स'},
      spreadsheets: {name: 'शीट्स और स्क्रिप्ट', short: 'फ़ॉर्मूले, डेटा सफ़ाई और ऑटोमेशन'},
    },
    allCategories: 'सभी 40 कार्य',
    difficulties: {starter: 'शुरुआती', structured: 'व्यवस्थित', 'multi-step': 'बहु-चरणीय'},
    catalog: {
      searchPlaceholder: 'कार्य खोजें (जैसे ईमेल, PDF, Excel)...',
      filterAll: 'सभी',
      filterFavorites: 'पसंदीदा',
      filterCompleted: 'पूर्ण',
      workflowsCount: 'वर्कफ़्लो',
      minutesUnit: 'मिनट',
      emptyTitle: 'इस फ़िल्टर से कोई वर्कफ़्लो मेल नहीं खाया।',
      emptyAction: 'सभी 40 वर्कफ़्लो दिखाएं',
      modulePrefix: 'कार्य',
    },
    diagram: {
      heading: 'इंटरैक्टिव वर्कफ़्लो डायग्राम',
      play: 'चलाएं',
      pause: 'रोकें',
      prev: 'पिछला',
      next: 'अगला',
      reset: 'रीसेट',
      stepOf: 'चरण',
      humanGateLabel: 'मानव सत्यापन चरण',
      inputLabel: 'आपका संदर्भ और सीमाएं',
      aiDraftLabel: 'AI ड्राफ़्ट',
      finalOutputLabel: 'सत्यापित परिणाम',
    },
    checklist: {
      heading: 'स्टेप-बाय-स्टेप चेकलिस्ट',
      completedCount: 'चरण पूर्ण',
      markWorkflowDone: 'कार्य पूर्ण चिह्नित करें',
      workflowDone: 'कार्य पूर्ण हुआ',
      verificationTitle: 'मानव सत्यापन आवश्यक',
    },
    promptBuilder: {
      heading: 'लोकल प्रॉम्प्ट बिल्डर',
      subheading: 'अपने ब्राउज़र में तुरंत संरचित प्रॉम्प्ट बनाने के लिए नीचे विवरण भरें।',
      generatedLabel: 'कॉपी करने के लिए तैयार प्रॉम्प्ट',
      copyBtn: 'प्रॉम्प्ट कॉपी करें',
      copiedBtn: 'कॉपी हो गया',
      resetBtn: 'डिफ़ॉल्ट रीसेट करें',
      notesLabel: 'व्यक्तिगत नोट्स (लोकल सेव)',
      notesPlaceholder: 'यहाँ अपने बदलाव या जांच बिंदु लिखें...',
    },
    actions: {
      favorite: 'सहेजें',
      favorited: 'सहेजा गया',
      printCard: 'प्रिंट शीट',
      exportJson: 'JSON निर्यात',
      importJson: 'JSON आयात',
      clearLocal: 'डेटा रीसेट',
      copyShareLink: 'लिंक कॉपी करें',
      linkCopied: 'लिंक कॉपी हुआ',
      importSuccess: 'बैकअप सफलतापूर्वक आयात हो गया।',
      importError: 'अमान्य JSON फ़ाइल।',
      clearedMessage: 'लोकल डेटा रीसेट किया गया।',
    },
    ads: {label: 'प्रायोजित'},
    affiliate: {
      heading: 'केंद्रित कार्य के लिए उपयोगी पुस्तकें और डेस्क उपकरण',
      subheading: 'स्पष्ट लेखन और दैनिक योजना के लिए चुने गए संसाधन।',
      disclosure: 'सहयोगी लिंक: बिना अतिरिक्त शुल्क के हमें छोटा कमीशन मिल सकता है।',
      cta: 'संसाधन देखें',
      items: [
        {category: 'स्पष्ट लेखन', title: 'स्पष्ट और प्रभावी लेखन मार्गदर्शिका', reason: 'AI ड्राफ़्ट संपादित करने में मददगार।', url: 'https://www.amazon.in/s?k=On+Writing+Well'},
        {category: 'योजना', title: 'साप्ताहिक डेस्क प्लानर पैड', reason: 'प्राथमिकताओं को कागज़ पर व्यवस्थित करने के लिए।', url: 'https://www.amazon.in/s?k=weekly+desk+planner'},
        {category: 'वॉइस डिक्टेशन', title: 'USB डेस्क माइक्रोफ़ोन और हेडसेट', reason: 'बोलकर संदर्भ देना 3 गुना तेज़ है।', url: 'https://www.amazon.in/s?k=usb+desk+microphone'},
        {category: 'डेस्क', title: 'डेस्कटॉप व्हाइटबोर्ड और मॉनिटर लाइट बार', reason: 'जांच बिंदुओं को सामने रखता है।', url: 'https://www.amazon.in/s?k=desktop+whiteboard'},
      ],
    },
    editorial: {
      heading: 'रोज़मर्रा के कामों में AI से विश्वसनीय परिणाम कैसे पाएं',
      intro: 'सही संदर्भ, स्पष्ट प्रारूप और त्वरित मानव जांच हर उत्तर को उपयोगी बनाते हैं।',
      sections: [
        {title: '1. संदर्भ, प्रारूप और सीमाएं तय करें', body: 'पाठक, कच्चा डेटा, अपेक्षित संरचना और वर्जित बातें स्पष्ट लिखें।', bullets: ['लंबाई तय करें।', 'अपने वास्तविक नोट्स दें।', 'तथ्य गढ़ने से मना करें।']},
        {title: '2. उपयोग से पहले जांच करें', body: 'नाम, आंकड़े, फ़ॉर्मूले और टोन की स्वयं पुष्टि करें।', bullets: ['तिथियां और संख्याएं जांचें।', 'ईमेल ज़ोर से पढ़ें।', 'फ़ॉर्मूले कॉपी फ़ाइल पर परखें।']},
        {title: '3. संवेदनशील जानकारी सुरक्षित रखें', body: 'असली नाम व निजी नंबर हटाकर सामान्य प्लेसहोल्डर लगाएं।', bullets: ['[Client A] का उपयोग करें।', 'खाता संख्या हटाएं।', 'यहाँ सब डेटा ब्राउज़र में ही रहता है।']},
      ],
      faqHeading: 'अक्सर पूछे जाने वाले प्रश्न',
      faqs: [
        {q: 'क्या AIDoSteps किसी AI API को कॉल करता है?', a: 'नहीं, यह 100% आपके ब्राउज़र में स्थानीय रूप से चलता है।'},
        {q: 'मेरे नोट्स और प्रगति कहाँ सहेजे जाते हैं?', a: 'ब्राउज़र के localStorage में, JSON एक्सपोर्ट/इम्पोर्ट के साथ।'},
        {q: 'क्या मैं वर्कफ़्लो प्रिंट कर सकता हूँ?', a: 'हाँ, प्रिंट बटन से साफ़ पेपर लेआउट मिलता है।'},
      ],
    },
    footer: {
      tagline: 'व्यावहारिक AI वर्कफ़्लो गाइड और लोकल प्रॉम्प्ट बिल्डर।',
      canonicalNote: 'कैनोनिकल डोमेन: https://aidosteps.bastelar.com',
      privacyNote: 'कोई ट्रैकिंग सर्वर नहीं। आपका डेटा आपके डिवाइस पर रहता है।',
    },
  },
  ru: {
    siteTitle: 'AIDoSteps — Как решать повседневные задачи с ИИ: пошаговые схемы и SVG-диаграммы',
    siteDescription:
      '40 практических сценариев работы с ИИ, интерактивные SVG-схемы, локальный конструктор промптов и чек-лист проверки. 100% в браузере, без API.',
    nav: {
      catalog: '40 задач',
      diagram: 'SVG-схема',
      prompt: 'Конструктор',
      guide: 'Гид и FAQ',
      saved: 'Экспорт JSON',
    },
    hero: {
      headline: 'Как решать повседневные задачи с помощью ИИ шаг за шагом',
      subtitle:
        'Выберите любую из 40 практических задач — от вежливого письма и конспекта PDF до меню на неделю или формулы Excel — пройдите по SVG-схеме и проверьте результат.',
      searchIntentNote:
        'Частые запросы: как написать письмо с ИИ · как сделать выжимку PDF · как учиться с ИИ · как сравнить варианты с ИИ',
      transparentNotice:
        'Локальные руководства и конструкторы промптов (100% в браузере). Сайт не отправляет запросы к API ИИ; всегда проверяйте факты, цифры, даты и конфиденциальные данные.',
    },
    categories: {
      writing: {name: 'Тексты и письма', short: 'Письма, ясность, тон и протоколы'},
      studying: {name: 'Учёба и чтение', short: 'Конспекты, аналогии и тесты'},
      planning: {name: 'План и быт', short: 'Меню, поездки, дела и списки'},
      work: {name: 'Работа и решения', short: 'Сравнения, интервью и риски'},
      creativity: {name: 'Идеи и слайды', short: 'Мозговой штурм, слайды и заметки'},
      spreadsheets: {name: 'Таблицы и скрипты', short: 'Формулы, очистка и автоматизация'},
    },
    allCategories: 'Все 40 задач',
    difficulties: {starter: 'Базовый', structured: 'Структурный', 'multi-step': 'Многошаговый'},
    catalog: {
      searchPlaceholder: 'Найти задачу (письмо, PDF, Excel)...',
      filterAll: 'Все',
      filterFavorites: 'Избранное',
      filterCompleted: 'Готово',
      workflowsCount: 'схем',
      minutesUnit: 'мин',
      emptyTitle: 'Нет задач по этому фильтру.',
      emptyAction: 'Показать все 40 задач',
      modulePrefix: 'Задача',
    },
    diagram: {
      heading: 'Интерактивная SVG-схема процесса',
      play: 'Старт',
      pause: 'Пауза',
      prev: 'Назад',
      next: 'Далее',
      reset: 'Сброс',
      stepOf: 'Шаг',
      humanGateLabel: 'Контроль человека',
      inputLabel: 'Контекст и рамки',
      aiDraftLabel: 'Черновик ИИ',
      finalOutputLabel: 'Проверенный итог',
    },
    checklist: {
      heading: 'Пошаговый чек-лист',
      completedCount: 'шагов отмечено',
      markWorkflowDone: 'Отметить выполненным',
      workflowDone: 'Выполнено',
      verificationTitle: 'Требуется проверка человеком',
    },
    promptBuilder: {
      heading: 'Локальный конструктор промпта',
      subheading: 'Заполните поля ниже, чтобы собрать чёткий запрос локально в браузере.',
      generatedLabel: 'Готовый промпт',
      copyBtn: 'Копировать',
      copiedBtn: 'Скопировано',
      resetBtn: 'Сбросить',
      notesLabel: 'Личные заметки (хранятся локально)',
      notesPlaceholder: 'Запишите правки или пункты проверки...',
    },
    actions: {
      favorite: 'В избранное',
      favorited: 'В избранном',
      printCard: 'Печать листа',
      exportJson: 'Экспорт JSON',
      importJson: 'Импорт JSON',
      clearLocal: 'Сбросить данные',
      copyShareLink: 'Копировать ссылку',
      linkCopied: 'Ссылка скопирована',
      importSuccess: 'Локальная резервная копия импортирована.',
      importError: 'Некорректный файл JSON.',
      clearedMessage: 'Локальные данные очищены.',
    },
    ads: {label: 'Реклама'},
    affiliate: {
      heading: 'Полезные книги и инструменты для рабочего стола',
      subheading: 'Подборка изданий и аксессуаров для ясного письма и планирования.',
      disclosure: 'Партнёрские ссылки: мы можем получить комиссию без доплаты для вас.',
      cta: 'Открыть',
      items: [
        {category: 'Ясное письмо', title: 'Руководства по редактуре и ясному стилю', reason: 'Помогают убирать воду из черновиков ИИ.', url: 'https://www.amazon.com/s?k=On+Writing+Well'},
        {category: 'Планирование', title: 'Настольный еженедельник и блокнот', reason: 'Удобно фиксировать приоритеты на бумаге.', url: 'https://www.amazon.com/s?k=weekly+desk+planner'},
        {category: 'Голос', title: 'USB-микрофон и гарнитура с шумоподавлением', reason: 'Надиктовка контекста экономит время.', url: 'https://www.amazon.com/s?k=usb+desk+microphone'},
        {category: 'Стол', title: 'Настольная доска и лампа для монитора', reason: 'Напоминания о проверке всегда перед глазами.', url: 'https://www.amazon.com/s?k=desktop+whiteboard'},
      ],
    },
    editorial: {
      heading: 'Как получать надёжные результаты от ИИ каждый день',
      intro: 'Чёткий контекст, заданный формат и быстрая проверка человеком превращают общие ответы в рабочий результат.',
      sections: [
        {title: '1. Задайте контекст, формат и ограничения', body: 'Укажите адресата, исходные заметки, точную структуру и запреты.', bullets: ['Ограничьте объём.', 'Передайте реальные факты.', 'Запретите выдумывать даты и цифры.']},
        {title: '2. Всегда проверяйте результат вручную', body: 'Сверяйте имена, расчёты, формулы и естественность тона.', bullets: ['Проверьте даты и суммы.', 'Прочитайте письмо вслух.', 'Тестируйте формулы на копии файла.']},
        {title: '3. Берегите конфиденциальные данные', body: 'Заменяйте реальные имена и реквизиты нейтральными метками.', bullets: ['Пишите [Клиент А] вместо ФИО.', 'Убирайте номера счетов.', 'Все заметки здесь хранятся только у вас.']},
      ],
      faqHeading: 'Частые вопросы',
      faqs: [
        {q: 'Использует ли AIDoSteps внешние API?', a: 'Нет, всё работает на 100% локально в браузере без ключей и лимитов.'},
        {q: 'Где сохраняются черновики и прогресс?', a: 'В localStorage браузера с поддержкой экспорта и импорта JSON.'},
        {q: 'Можно ли распечатать карточку задачи?', a: 'Да, кнопка печати убирает меню и рекламу, оставляя только схему, шаги и промпт.'},
      ],
    },
    footer: {
      tagline: 'Практические схемы работы с ИИ и локальный конструктор промптов.',
      canonicalNote: 'Канонический домен: https://aidosteps.bastelar.com',
      privacyNote: 'Без серверов аналитики. Все данные остаются на вашем устройстве.',
    },
  },
  zh: {
    siteTitle: 'AIDoSteps — 如何用 AI 高效完成日常任务：分步工作流与 SVG 流程图',
    siteDescription:
      '40 个实用 AI 分步工作流指南，含交互式 SVG 流程图、本地可填提示词生成器与人工核查清单。100% 浏览器本地运行，无需 API。',
    nav: {
      catalog: '40 个流程',
      diagram: 'SVG 流程图',
      prompt: '提示词生成',
      guide: '指南与问答',
      saved: '导出 JSON',
    },
    hero: {
      headline: '如何用 AI 一步步完成日常实用任务',
      subtitle:
        '从 40 个高频日常任务中选择——写清楚礼貌的邮件、总结长 PDF、规划每周菜单或修复表格公式——跟随 SVG 流程图填好本地提示词并核查结果。',
      searchIntentNote:
        '常见需求：如何用 AI 写邮件 · 如何用 AI 总结 PDF · 如何用 AI 学习复习 · 如何用 AI 制定餐单 · 如何用 AI 对比选项',
      transparentNotice:
        '100% 纯前端本地 AI 工作流指南与提示词构造器。本网站不调用任何 AI 接口；使用结果前请务必核实事实、数字、日期与敏感内容。',
    },
    categories: {
      writing: {name: '写作与邮件', short: '邮件、精简改写、语气与纪要'},
      studying: {name: '学习与阅读', short: '摘要、类比讲解与自测题'},
      planning: {name: '规划与居家', short: '菜单、行程、待办与清单'},
      work: {name: '工作与决策', short: '方案对比、面试与风险排查'},
      creativity: {name: '创意与演示', short: '灵感、PPT 结构、命名与整理'},
      spreadsheets: {name: '表格与脚本', short: '公式设计、清洗与本地脚本'},
    },
    allCategories: '全部 40 项任务',
    difficulties: {starter: '入门', structured: '结构化', 'multi-step': '多步骤'},
    catalog: {
      searchPlaceholder: '搜索任务（如 邮件、PDF、菜单、Excel）...',
      filterAll: '全部',
      filterFavorites: '收藏',
      filterCompleted: '已完成',
      workflowsCount: '个流程',
      minutesUnit: '分钟',
      emptyTitle: '没有匹配当前筛选的任务。',
      emptyAction: '显示全部 40 个流程',
      modulePrefix: '任务',
    },
    diagram: {
      heading: '交互式工作流程图',
      play: '播放',
      pause: '暂停',
      prev: '上一步',
      next: '下一步',
      reset: '重置',
      stepOf: '步骤',
      humanGateLabel: '人工核查关口',
      inputLabel: '你的背景与限制',
      aiDraftLabel: 'AI 初稿输出',
      finalOutputLabel: '核查后成品',
    },
    checklist: {
      heading: '分步核查清单',
      completedCount: '步已勾选',
      markWorkflowDone: '标记流程已完成',
      workflowDone: '流程已完成',
      verificationTitle: '必须进行人工核查',
    },
    promptBuilder: {
      heading: '本地提示词生成器',
      subheading: '在下方填写你的具体需求，即可在浏览器本地即时组装结构化提示词。',
      generatedLabel: '可复制的完整提示词',
      copyBtn: '复制提示词',
      copiedBtn: '已复制到剪贴板',
      resetBtn: '恢复默认',
      notesLabel: '个人笔记与草稿（本地保存）',
      notesPlaceholder: '在此记录修改意见或核查提醒...',
    },
    actions: {
      favorite: '收藏',
      favorited: '已收藏',
      printCard: '打印卡片',
      exportJson: '导出 JSON',
      importJson: '导入 JSON',
      clearLocal: '清空本地数据',
      copyShareLink: '复制任务链接',
      linkCopied: '链接已复制',
      importSuccess: '已成功导入本地备份。',
      importError: '无效的 JSON 文件。',
      clearedMessage: '本地进度与笔记已重置。',
    },
    ads: {label: '赞助内容'},
    affiliate: {
      heading: '提升专注与写作效率的实用工具与书籍',
      subheading: '精选有助于清晰表达和日常规划的实体书籍与桌面配件。',
      disclosure: '联盟推广链接：购买可能为我们带来少量佣金，但不会增加您的费用。',
      cta: '查看详情',
      items: [
        {category: '清晰写作', title: '非虚构清晰写作与编辑指南', reason: '帮助在审核 AI 初稿时快速删去空话。', url: 'https://www.amazon.com/s?k=On+Writing+Well'},
        {category: '规划手账', title: '每周桌面规划本与点阵笔记本', reason: '配合数字清单在纸面梳理优先级与餐单。', url: 'https://www.amazon.com/s?k=weekly+desk+planner'},
        {category: '语音输入', title: 'USB 桌面麦克风与降噪耳机', reason: '口述背景信息比打字快三倍。', url: 'https://www.amazon.com/s?k=usb+desk+microphone'},
        {category: '桌面配件', title: '桌面玻璃白板与屏幕挂灯', reason: '让人工核查提醒始终保持在视野内。', url: 'https://www.amazon.com/s?k=desktop+whiteboard+light+bar'},
      ],
    },
    editorial: {
      heading: '如何在日常任务中稳定获得可靠的 AI 输出',
      intro: '给出清晰背景、固定输出结构并执行最后一步人工核查，远比死记硬背套路更有效。',
      sections: [
        {title: '1. 用背景、格式与边界定义需求', body: '明确受众、原始素材、目标结构（如清单、表格、120字邮件）以及禁止事项。', bullets: ['提前约定字数与结构。', '提供真实要点而非让模型猜测。', '明确要求不得编造日期与数据。']},
        {title: '2. 发送或使用前务必人工复核', body: '语言模型擅长组织流畅表达，但不会自动验证事实或公式正确性。', bullets: ['核对人名、日期、金额和单元格范围。', '朗读邮件检查语气是否自然。', '先在副本文件上测试公式和脚本。']},
        {title: '3. 保护个人隐私与敏感资料', body: '切勿将密码、银行卡号、病历或保密合同直接粘贴到公共工具。', bullets: ['用 [客户A] 代替真实姓名。', '删除身份证号和地址列。', '在本站填写的所有内容仅存本地。']},
      ],
      faqHeading: '常见问题',
      faqs: [
        {q: 'AIDoSteps 会调用付费 AI API 或需要登录吗？', a: '不会。所有功能 100% 在本地浏览器运行，无任何 API 调用、无账号限制。'},
        {q: '我的填写内容和进度保存在哪里？', a: '保存在浏览器 localStorage 中，支持随时导出和导入 JSON 备份。'},
        {q: '可以打印成纸质工作单吗？', a: '可以，点击打印卡片即可输出干净的流程图、清单与提示词，自动隐藏导航与广告。'},
      ],
    },
    footer: {
      tagline: '实用、确定性的 AI 分步工作流与本地提示词构造器。',
      canonicalNote: '规范域名：https://aidosteps.bastelar.com',
      privacyNote: '无追踪服务器，所有工作区数据仅留存于您的设备。',
    },
  },
  ja: {
    siteTitle: 'AIDoSteps — 日常タスクをAIでこなす手順ガイド・SVGフロー図・プロンプト作成',
    siteDescription:
      '40の実用的なAIステップバイステップ手順、インタラクティブSVG図解、ローカルプロンプト作成ツール、人間チェックリスト。API不要・ブラウザ完結。',
    nav: {
      catalog: '40の手順',
      diagram: 'SVG図解',
      prompt: 'プロンプト',
      guide: 'ガイド・FAQ',
      saved: 'JSON保存',
    },
    hero: {
      headline: '日常のタスクをAIで進めるステップ別ガイド',
      subtitle:
        '丁寧なメール作成、PDF要約、献立作成、表計算の数式修正など40の実用タスクから選び、SVGフロー図に沿って入力して結果を確認できます。',
      searchIntentNote:
        '人気の検索：AIでメールを書く方法 · PDFを要約する方法 · AIで勉強する方法 · 献立を計画する方法 · 選択肢を比較する方法',
      transparentNotice:
        '100%ブラウザ内で動作するAIワークフローガイド＆ローカルプロンプト作成ツールです。本サイトはAI API通信を行いません。事実・数値・日付・機密情報は必ずご自身で確認してください。',
    },
    categories: {
      writing: {name: '文章・メール', short: 'メール・要約・トーン調整・議事録'},
      studying: {name: '学習・読解', short: '要約・例え話・確認問題'},
      planning: {name: '計画・暮らし', short: '献立・旅行・家事・持ち物リスト'},
      work: {name: '仕事・意思決定', short: '比較・面接対策・リスク確認'},
      creativity: {name: '発想・スライド', short: 'アイデア・構成案・ネーミング'},
      spreadsheets: {name: '表計算・自動化', short: '数式・データ整形・安全スクリプト'},
    },
    allCategories: '全40タスク',
    difficulties: {starter: '基本', structured: '構造化', 'multi-step': '多段階'},
    catalog: {
      searchPlaceholder: 'タスクを検索（例: メール, PDF, Excel）...',
      filterAll: 'すべて',
      filterFavorites: 'お気に入り',
      filterCompleted: '完了済み',
      workflowsCount: '件',
      minutesUnit: '分',
      emptyTitle: '条件に一致するタスクがありません。',
      emptyAction: '全40タスクを表示',
      modulePrefix: 'タスク',
    },
    diagram: {
      heading: 'インタラクティブ SVG ワークフロー図',
      play: '再生',
      pause: '一時停止',
      prev: '前へ',
      next: '次へ',
      reset: 'リセット',
      stepOf: 'ステップ',
      humanGateLabel: '人間の最終確認ポイント',
      inputLabel: '入力条件と制約',
      aiDraftLabel: 'AIの下書き出力',
      finalOutputLabel: '確認済みの成果物',
    },
    checklist: {
      heading: 'ステップ別チェックリスト',
      completedCount: 'ステップ完了',
      markWorkflowDone: 'この手順を完了にする',
      workflowDone: '完了済み',
      verificationTitle: '人間による確認が必須',
    },
    promptBuilder: {
      heading: 'ローカルプロンプト作成',
      subheading: '下の項目を入力すると、ブラウザ内で構造化されたプロンプトを即座に組み立てます。',
      generatedLabel: 'コピー用プロンプト',
      copyBtn: 'コピーする',
      copiedBtn: 'コピー完了',
      resetBtn: '初期値に戻す',
      notesLabel: '個人メモ（ローカル保存）',
      notesPlaceholder: '修正点や確認メモをここに入力...',
    },
    actions: {
      favorite: 'お気に入り',
      favorited: '保存済み',
      printCard: '印刷シート',
      exportJson: 'JSON書き出し',
      importJson: 'JSON読み込み',
      clearLocal: '履歴リセット',
      copyShareLink: 'リンクをコピー',
      linkCopied: 'コピーしました',
      importSuccess: 'JSONバックアップを読み込みました。',
      importError: '無効なJSONファイルです。',
      clearedMessage: 'ローカルデータをリセットしました。',
    },
    ads: {label: 'スポンサー'},
    affiliate: {
      heading: '集中作業と明瞭な文章作成に役立つツール・書籍',
      subheading: '日々のタスク整理や下書きチェックと相性の良いデスク用品と実用書です。',
      disclosure: 'アフィリエイトリンク：追加費用なしで当サイトが紹介料を受け取る場合があります。',
      cta: '詳細を見る',
      items: [
        {category: '文章術', title: 'わかりやすい文章・推敲の実用書', reason: 'AIの下書きから冗長さを削る判断力を養います。', url: 'https://www.amazon.co.jp/s?k=%E3%82%8F%E3%81%8B%E3%82%8A%E3%82%84%E3%81%99%E3%81%84%E6%96%87%E7%AB%A0'},
        {category: '計画ノート', title: '週間デスクプランナー・方眼パッド', reason: 'デジタル手順と合わせて紙で優先順位を整理できます。', url: 'https://www.amazon.co.jp/s?k=%E9%80%B1%E9%96%93+%E3%83%87%E3%82%B9%E3%82%AF%E3%83%97%E3%83%A9%E3%83%B3%E3%83%8A%E3%83%BC'},
        {category: '音声入力', title: 'USBデスクマイク・ノイズキャンセリングヘッドセット', reason: '前提条件を音声で入力すると作業が大幅に速くなります。', url: 'https://www.amazon.co.jp/s?k=USB+%E3%83%87%E3%82%B9%E3%82%AF%E3%83%9E%E3%82%A4%E3%82%AF'},
        {category: 'デスク環境', title: '卓上ホワイトボード・モニターライトバー', reason: '確認ポイントや今日の優先事項を視界に保てます。', url: 'https://www.amazon.co.jp/s?k=%E5%8D%93%E4%B8%8A+%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89'},
      ],
    },
    editorial: {
      heading: '日常業務でAIから安定した結果を得るための3原則',
      intro: '文脈・出力形式・制約を明示し、最後に人間が確認するだけで実用精度は大きく向上します。',
      sections: [
        {title: '1. 文脈・形式・禁止事項を伝える', body: '誰向けか、元メモは何か、どの形式で何文字程度にするかを指定します。', bullets: ['文字数や箇条書き数を指定する。', '事実メモを先に渡す。', '数値や日付の創作を禁止する。']},
        {title: '2. 利用前に必ず人間の目で確認する', body: 'AIは自然な文を作りますが、事実関係や数式の正しさは保証しません。', bullets: ['固有名詞・日付・金額を確認する。', 'メールは声に出して不自然さを確認する。', '数式やスクリプトはコピーファイルで試す。']},
        {title: '3. 個人情報と機密データを守る', body: '実名や口座番号などは貼り付ける前にプレースホルダーへ置き換えます。', bullets: ['[顧客A] などの仮名を使う。', '個人番号や住所を削除する。', '本サイトの入力内容は端末内のみに保存されます。']},
      ],
      faqHeading: 'よくある質問',
      faqs: [
        {q: 'AIDoStepsは外部AIのAPIを呼び出しますか？', a: 'いいえ。すべてブラウザ内で完結し、APIキーや登録は不要です。'},
        {q: '入力したプロンプトやチェック状態はどこに保存されますか？', a: 'ブラウザのlocalStorageに保存され、JSONでの書き出し・読み込みにも対応しています。'},
        {q: '紙に印刷して使えますか？', a: 'はい。印刷ボタンからメニューや広告を除いた見やすいシートを印刷できます。'},
      ],
    },
    footer: {
      tagline: '実用的で再現性の高いAIワークフロー図解＆ローカルプロンプトツール。',
      canonicalNote: '正規ドメイン: https://aidosteps.bastelar.com',
      privacyNote: '外部トラッキングなし。データはすべてお使いの端末に保存されます。',
    },
  },
};

import type {LangCode, WorkflowModule} from '../types/workflow';

export const CANONICAL_ORIGIN = 'https://aidosteps.bastelar.com';

export interface LanguageMeta {
  code: LangCode;
  nativeName: string;
  englishName: string;
  dir: 'ltr' | 'rtl';
  hreflang: string;
}

export const SUPPORTED_LANGUAGES: LanguageMeta[] = [
  {code: 'en', nativeName: 'English', englishName: 'English', dir: 'ltr', hreflang: 'en'},
  {code: 'es', nativeName: 'Español', englishName: 'Spanish', dir: 'ltr', hreflang: 'es'},
  {code: 'fr', nativeName: 'Français', englishName: 'French', dir: 'ltr', hreflang: 'fr'},
  {code: 'de', nativeName: 'Deutsch', englishName: 'German', dir: 'ltr', hreflang: 'de'},
  {code: 'pt', nativeName: 'Português', englishName: 'Portuguese', dir: 'ltr', hreflang: 'pt'},
  {code: 'ar', nativeName: 'العربية', englishName: 'Arabic', dir: 'rtl', hreflang: 'ar'},
  {code: 'hi', nativeName: 'हिन्दी', englishName: 'Hindi', dir: 'ltr', hreflang: 'hi'},
  {code: 'ru', nativeName: 'Русский', englishName: 'Russian', dir: 'ltr', hreflang: 'ru'},
  {code: 'zh', nativeName: '中文', englishName: 'Chinese', dir: 'ltr', hreflang: 'zh'},
  {code: 'ja', nativeName: '日本語', englishName: 'Japanese', dir: 'ltr', hreflang: 'ja'},
];

export const LANG_CODES: LangCode[] = SUPPORTED_LANGUAGES.map((l) => l.code);

export function isValidLang(value: string | null | undefined): value is LangCode {
  return Boolean(value && LANG_CODES.includes(value as LangCode));
}

export function getLangMeta(lang: LangCode): LanguageMeta {
  return SUPPORTED_LANGUAGES.find((l) => l.code === lang) ?? SUPPORTED_LANGUAGES[0];
}

export function detectBrowserLang(): LangCode {
  if (typeof navigator === 'undefined') return 'en';
  const candidates = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const raw of candidates) {
    const base = raw?.toLowerCase().split('-')[0];
    if (isValidLang(base)) return base;
  }
  return 'en';
}

export function getCanonicalUrl(lang: LangCode, taskSlug?: string): string {
  const params = new URLSearchParams();
  if (lang !== 'en') {
    params.set('lang', lang);
  }
  if (taskSlug) {
    params.set('task', taskSlug);
  }
  const qs = params.toString();
  return qs ? `${CANONICAL_ORIGIN}/?${qs}` : `${CANONICAL_ORIGIN}/`;
}

export function getHreflangEntries(taskSlug?: string): Array<{hreflang: string; href: string}> {
  const entries = SUPPORTED_LANGUAGES.map((item) => ({
    hreflang: item.hreflang,
    href: getCanonicalUrl(item.code, taskSlug),
  }));
  entries.push({
    hreflang: 'x-default',
    href: getCanonicalUrl('en', taskSlug),
  });
  return entries;
}

export interface SeoUpdatePayload {
  lang: LangCode;
  siteTitle: string;
  siteDescription: string;
  activeModule: WorkflowModule;
  faqs: Array<{q: string; a: string}>;
  hasExplicitTaskInUrl: boolean;
}

export function syncDocumentSeo({
  lang,
  siteTitle,
  siteDescription,
  activeModule,
  faqs,
  hasExplicitTaskInUrl,
}: SeoUpdatePayload): void {
  if (typeof document === 'undefined') return;

  const langMeta = getLangMeta(lang);
  document.documentElement.lang = langMeta.code;
  document.documentElement.dir = langMeta.dir;

  const modContent = activeModule.translations[lang];
  const taskSlug = hasExplicitTaskInUrl ? activeModule.slug : undefined;
  const canonicalUrl = getCanonicalUrl(lang, taskSlug);

  const pageTitle = hasExplicitTaskInUrl
    ? `${modContent.title} — AIDoSteps`
    : siteTitle;
  const pageDescription = hasExplicitTaskInUrl
    ? `${modContent.summary} ${modContent.risk}`
    : siteDescription;

  document.title = pageTitle;

  const setMeta = (selector: string, attrName: 'name' | 'property', attrVal: string, content: string) => {
    let el = document.head.querySelector<HTMLMetaElement>(selector);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrVal);
      document.head.appendChild(el);
    }
    el.content = content;
  };

  setMeta('meta[name="description"]', 'name', 'description', pageDescription);
  setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
  setMeta('meta[property="og:title"]', 'property', 'og:title', pageTitle);
  setMeta('meta[property="og:description"]', 'property', 'og:description', pageDescription);
  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', pageTitle);
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', pageDescription);

  let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.href = canonicalUrl;

  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((node) => node.remove());
  for (const entry of getHreflangEntries(taskSlug)) {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = entry.hreflang;
    link.href = entry.href;
    document.head.appendChild(link);
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': `${CANONICAL_ORIGIN}/#webapp`,
        name: 'AIDoSteps',
        url: canonicalUrl,
        inLanguage: langMeta.code,
        applicationCategory: 'ProductivityApplication',
        operatingSystem: 'All',
        browserRequirements: 'Requires JavaScript',
        description: siteDescription,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'HowTo',
        '@id': `${getCanonicalUrl(lang, activeModule.slug)}#howto`,
        name: modContent.title,
        description: modContent.summary,
        inLanguage: langMeta.code,
        totalTime: `PT${activeModule.minutes}M`,
        url: getCanonicalUrl(lang, activeModule.slug),
        step: modContent.steps.map((s, idx) => ({
          '@type': 'HowToStep',
          position: idx + 1,
          name: s.label,
          text: s.detail,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        inLanguage: langMeta.code,
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ],
  };

  let ldScript = document.head.querySelector<HTMLScriptElement>('script[data-aidosteps-jsonld="true"]');
  if (!ldScript) {
    ldScript = document.createElement('script');
    ldScript.type = 'application/ld+json';
    ldScript.setAttribute('data-aidosteps-jsonld', 'true');
    document.head.appendChild(ldScript);
  }
  ldScript.textContent = JSON.stringify(jsonLd);
}

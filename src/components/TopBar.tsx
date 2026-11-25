import {Globe, Layers} from 'lucide-react';
import {SUPPORTED_LANGUAGES} from '../config/seo';
import type {UITranslations} from '../i18n/translations';
import type {LangCode} from '../types/workflow';

interface TopBarProps {
  lang: LangCode;
  t: UITranslations;
  onChangeLang: (lang: LangCode) => void;
}

export function TopBar({lang, t, onChangeLang}: TopBarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm print:hidden">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-8 px-4 py-3 sm:px-6 lg:px-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#top"
          className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap text-lg font-bold tracking-tight text-slate-900"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-700 text-white">
            <Layers className="h-4 w-4" aria-hidden="true" />
          </span>
          <span>AIDoSteps</span>
        </a>

        {/* Zone 2: Single-line primary navigation */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          <a
            href="#catalog"
            className="whitespace-nowrap shrink-0 text-sm font-medium text-slate-600 transition-colors hover:text-indigo-700"
          >
            {t.nav.catalog}
          </a>
          <a
            href="#diagram"
            className="whitespace-nowrap shrink-0 text-sm font-medium text-slate-600 transition-colors hover:text-indigo-700"
          >
            {t.nav.diagram}
          </a>
          <a
            href="#prompt-builder"
            className="whitespace-nowrap shrink-0 text-sm font-medium text-slate-600 transition-colors hover:text-indigo-700"
          >
            {t.nav.prompt}
          </a>
          <a
            href="#guide"
            className="whitespace-nowrap shrink-0 text-sm font-medium text-slate-600 transition-colors hover:text-indigo-700"
          >
            {t.nav.guide}
          </a>
          <a
            href="#saved-tools"
            className="whitespace-nowrap shrink-0 text-sm font-medium text-slate-600 transition-colors hover:text-indigo-700"
          >
            {t.nav.saved}
          </a>
        </nav>

        {/* Zone 3: Single primary control (Language Selector) */}
        <div className="flex shrink-0 items-center gap-2">
          <label htmlFor="aidosteps-lang-select" className="sr-only">
            Language
          </label>
          <div className="relative flex items-center">
            <Globe
              className="pointer-events-none absolute start-2.5 h-4 w-4 text-slate-500"
              aria-hidden="true"
            />
            <select
              id="aidosteps-lang-select"
              value={lang}
              onChange={(e) => onChangeLang(e.target.value as LangCode)}
              aria-label="Language"
              className="h-9 cursor-pointer whitespace-nowrap rounded-lg border border-slate-200 bg-slate-50 pe-3 ps-8 text-sm font-medium text-slate-800 transition-colors hover:border-slate-300 focus:border-indigo-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-700/15"
            >
              {SUPPORTED_LANGUAGES.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.nativeName} ({item.code.toUpperCase()})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}

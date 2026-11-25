import {ChevronDown} from 'lucide-react';
import {useState} from 'react';
import type {UITranslations} from '../i18n/translations';

interface EditorialSeoSectionProps {
  t: UITranslations;
}

export function EditorialSeoSection({t}: EditorialSeoSectionProps) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  return (
    <section
      id="guide"
      aria-labelledby="editorial-heading"
      className="print:hidden space-y-6 rounded-xl border border-slate-200 bg-white p-5 sm:p-7"
    >
      <div className="max-w-3xl">
        <h2 id="editorial-heading" className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          {t.editorial.heading}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
          {t.editorial.intro}
        </p>
      </div>

      {/* 3 Practical SEO Guide Pillars */}
      <div className="grid gap-4 lg:grid-cols-3">
        {t.editorial.sections.map((section, idx) => (
          <article
            key={idx}
            className="flex flex-col rounded-lg border border-slate-200 bg-slate-50/50 p-4 sm:p-5"
          >
            <h3 className="text-base font-bold text-slate-900">{section.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{section.body}</p>
            <ul className="mt-3 space-y-1.5 border-t border-slate-200/80 pt-3 text-xs leading-relaxed text-slate-700">
              {section.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-700" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* Interactive Collapsible FAQ Accordion */}
      <div className="border-t border-slate-200 pt-6">
        <h3 className="text-lg font-bold text-slate-900">{t.editorial.faqHeading}</h3>
        <div className="mt-3 divide-y divide-slate-200 rounded-lg border border-slate-200">
          {t.editorial.faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div key={idx} className="bg-white">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-start text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${
                      isOpen ? 'rotate-180 text-indigo-700' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 bg-slate-50/60 px-4 py-3 text-sm leading-relaxed text-slate-600">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

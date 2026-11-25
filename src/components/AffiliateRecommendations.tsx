import {ExternalLink} from 'lucide-react';
import type {UITranslations} from '../i18n/translations';

interface AffiliateRecommendationsProps {
  t: UITranslations;
}

export function AffiliateRecommendations({t}: AffiliateRecommendationsProps) {
  return (
    <section
      aria-labelledby="affiliate-heading"
      className="print:hidden rounded-xl border border-slate-200 bg-white p-5 sm:p-6"
    >
      <div className="flex flex-col gap-1 border-b border-slate-100 pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="affiliate-heading" className="text-base font-bold text-slate-900 sm:text-lg">
            {t.affiliate.heading}
          </h2>
          <p className="mt-0.5 text-sm text-slate-600">{t.affiliate.subheading}</p>
        </div>
        <p className="text-xs text-slate-500">{t.affiliate.disclosure}</p>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {t.affiliate.items.map((item, idx) => (
          <article
            key={idx}
            className="flex flex-col justify-between rounded-lg border border-slate-200 bg-slate-50/50 p-4 transition-colors hover:border-slate-300 hover:bg-white"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
                {item.category}
              </p>
              <h3 className="mt-1.5 text-sm font-bold leading-snug text-slate-900">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{item.reason}</p>
            </div>
            <a
              href={item.url}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 hover:text-indigo-800 hover:underline"
            >
              <span>{t.affiliate.cta}</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

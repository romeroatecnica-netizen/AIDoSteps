import {Check, CheckCircle2, ShieldAlert} from 'lucide-react';
import type {UITranslations} from '../i18n/translations';
import type {LangCode, WorkflowModule} from '../types/workflow';

interface StepChecklistProps {
  module: WorkflowModule;
  lang: LangCode;
  t: UITranslations;
  activeStepIndex: number;
  completedSteps: number[];
  isWorkflowDone: boolean;
  onSelectStep: (idx: number) => void;
  onToggleStep: (stepIdx: number) => void;
  onToggleWorkflowDone: () => void;
}

export function StepChecklist({
  module,
  lang,
  t,
  activeStepIndex,
  completedSteps,
  isWorkflowDone,
  onSelectStep,
  onToggleStep,
  onToggleWorkflowDone,
}: StepChecklistProps) {
  const content = module.translations[lang];
  const total = content.steps.length;
  const checkedCount = completedSteps.length;

  return (
    <section
      aria-labelledby="checklist-heading"
      className="print-card rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3.5">
        <div>
          <h2 id="checklist-heading" className="text-base font-bold text-slate-900 sm:text-lg">
            {t.checklist.heading}
          </h2>
          <p className="mt-0.5 text-xs text-slate-500 tabular-nums">
            {checkedCount}/{total} {t.checklist.completedCount}
          </p>
        </div>

        <button
          type="button"
          onClick={onToggleWorkflowDone}
          className={`inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-lg border px-3 text-xs font-semibold transition-colors print:hidden ${
            isWorkflowDone
              ? 'border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700'
              : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
          }`}
        >
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          <span>{isWorkflowDone ? t.checklist.workflowDone : t.checklist.markWorkflowDone}</span>
        </button>
      </div>

      {/* Ordered Step List */}
      <ol className="mt-4 space-y-2.5">
        {content.steps.map((step, idx) => {
          const isChecked = completedSteps.includes(idx);
          const isActive = idx === activeStepIndex;

          return (
            <li
              key={idx}
              className={`flex items-start gap-3 rounded-lg border p-3 transition-colors ${
                isActive
                  ? 'border-indigo-300 bg-indigo-50/50'
                  : isChecked
                    ? 'border-emerald-200 bg-emerald-50/40'
                    : 'border-slate-200 bg-white hover:bg-slate-50/70'
              }`}
            >
              <button
                type="button"
                role="checkbox"
                aria-checked={isChecked}
                aria-label={`${step.label}`}
                onClick={() => onToggleStep(idx)}
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                  isChecked
                    ? 'border-emerald-600 bg-emerald-600 text-white'
                    : 'border-slate-300 bg-white text-transparent hover:border-indigo-700'
                }`}
              >
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onSelectStep(idx)}
                className="flex-1 text-start"
              >
                <div className="flex items-center gap-2">
                  <span className="tabular-nums text-xs font-bold text-indigo-700">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      isChecked ? 'text-slate-600 line-through decoration-slate-400' : 'text-slate-900'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">{step.detail}</p>
              </button>
            </li>
          );
        })}
      </ol>

      {/* Human Verification Gate Callout (clean 1px border, no border-l-4) */}
      <div className="mt-4 flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50/70 p-3.5">
        <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-amber-900">
            {t.checklist.verificationTitle}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-amber-950">{content.risk}</p>
        </div>
      </div>
    </section>
  );
}

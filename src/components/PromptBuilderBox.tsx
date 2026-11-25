import {Check, Copy, RotateCcw} from 'lucide-react';
import {useMemo, useState} from 'react';
import type {UITranslations} from '../i18n/translations';
import type {LangCode, WorkflowModule} from '../types/workflow';

interface PromptBuilderBoxProps {
  module: WorkflowModule;
  lang: LangCode;
  t: UITranslations;
  customValues: Record<string, string>;
  note: string;
  onUpdateField: (fieldKey: string, value: string) => void;
  onResetFields: () => void;
  onUpdateNote: (value: string) => void;
}

export function PromptBuilderBox({
  module,
  lang,
  t,
  customValues,
  note,
  onUpdateField,
  onResetFields,
  onUpdateNote,
}: PromptBuilderBoxProps) {
  const [copied, setCopied] = useState(false);
  const content = module.translations[lang];

  const resolvedFields = useMemo(() => {
    const map: Record<string, string> = {};
    for (const field of content.promptFields) {
      const savedVal = customValues[field.key];
      map[field.key] =
        savedVal !== undefined && savedVal.length > 0 ? savedVal : field.defaultValue;
    }
    return map;
  }, [content.promptFields, customValues]);

  const assembledPrompt = useMemo(() => {
    return content.promptTemplate.replace(/\{\{(\w+)\}\}/g, (_, key: string) => {
      return resolvedFields[key] ?? '';
    });
  }, [content.promptTemplate, resolvedFields]);

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(assembledPrompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = assembledPrompt;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  const hasCustomizations = Object.keys(customValues).length > 0;

  return (
    <section
      id="prompt-builder"
      aria-labelledby="prompt-builder-heading"
      className="print-card rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
    >
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-3.5">
        <div>
          <h2 id="prompt-builder-heading" className="text-base font-bold text-slate-900 sm:text-lg">
            {t.promptBuilder.heading}
          </h2>
          <p className="mt-0.5 text-xs text-slate-500">{t.promptBuilder.subheading}</p>
        </div>

        <button
          type="button"
          onClick={onResetFields}
          disabled={!hasCustomizations}
          className="inline-flex h-8 items-center gap-1.5 whitespace-nowrap rounded-lg border border-slate-200 bg-white px-2.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-45 print:hidden"
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{t.promptBuilder.resetBtn}</span>
        </button>
      </div>

      {/* Editable Variable Inputs */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {content.promptFields.map((field) => {
          const currentValue =
            customValues[field.key] !== undefined ? customValues[field.key] : field.defaultValue;
          const inputId = `field-${module.id}-${field.key}`;

          return (
            <div
              key={field.key}
              className={field.multiline ? 'sm:col-span-2' : undefined}
            >
              <label
                htmlFor={inputId}
                className="block text-xs font-semibold text-slate-700"
              >
                {field.label}
              </label>
              {field.multiline ? (
                <textarea
                  id={inputId}
                  rows={3}
                  value={currentValue}
                  placeholder={field.placeholder}
                  onChange={(e) => onUpdateField(field.key, e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-700/15"
                />
              ) : (
                <input
                  id={inputId}
                  type="text"
                  value={currentValue}
                  placeholder={field.placeholder}
                  onChange={(e) => onUpdateField(field.key, e.target.value)}
                  className="mt-1.5 h-10 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-700/15"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Generated Deterministic Prompt Preview */}
      <div className="mt-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-slate-700">
            {t.promptBuilder.generatedLabel}
          </span>
          <button
            type="button"
            onClick={handleCopyPrompt}
            className={`inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-lg px-3.5 text-xs font-semibold transition-colors print:hidden ${
              copied
                ? 'bg-emerald-600 text-white'
                : 'bg-indigo-700 text-white hover:bg-indigo-800'
            }`}
          >
            {copied ? (
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <Copy className="h-3.5 w-3.5" aria-hidden="true" />
            )}
            <span>{copied ? t.promptBuilder.copiedBtn : t.promptBuilder.copyBtn}</span>
          </button>
        </div>

        <pre className="mt-2 whitespace-pre-wrap rounded-lg border border-slate-200 bg-slate-900 p-4 font-mono text-xs leading-relaxed text-slate-100 sm:text-[13px]">
          {assembledPrompt}
        </pre>
      </div>

      {/* Personal Notes */}
      <div className="mt-4 border-t border-slate-100 pt-4">
        <label
          htmlFor={`notes-${module.id}`}
          className="block text-xs font-semibold text-slate-700"
        >
          {t.promptBuilder.notesLabel}
        </label>
        <textarea
          id={`notes-${module.id}`}
          rows={2}
          value={note}
          placeholder={t.promptBuilder.notesPlaceholder}
          onChange={(e) => onUpdateNote(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-700/15"
        />
      </div>
    </section>
  );
}

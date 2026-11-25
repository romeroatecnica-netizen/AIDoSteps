import {Check, Download, Link2, Printer, RotateCcw, Star, Upload} from 'lucide-react';
import {useRef, useState} from 'react';
import type {UITranslations} from '../i18n/translations';

interface SavedWorkspaceBarProps {
  t: UITranslations;
  isFavorite: boolean;
  shareUrl: string;
  onToggleFavorite: () => void;
  onExportJson: () => void;
  onImportJson: (raw: string) => boolean;
  onResetAllData: () => void;
}

export function SavedWorkspaceBar({
  t,
  isFavorite,
  shareUrl,
  onToggleFavorite,
  onExportJson,
  onImportJson,
  onResetAllData,
}: SavedWorkspaceBarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [linkCopied, setLinkCopied] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const handleCopyShareLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setLinkCopied(true);
      window.setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = shareUrl;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setLinkCopied(true);
      window.setTimeout(() => setLinkCopied(false), 2000);
    }
  };

  const handleImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const ok = onImportJson(text);
      setStatusMessage({
        type: ok ? 'success' : 'error',
        text: ok ? t.actions.importSuccess : t.actions.importError,
      });
    } catch {
      setStatusMessage({type: 'error', text: t.actions.importError});
    } finally {
      e.target.value = '';
      window.setTimeout(() => setStatusMessage(null), 4000);
    }
  };

  const handleConfirmReset = () => {
    if (!confirmReset) {
      setConfirmReset(true);
      window.setTimeout(() => setConfirmReset(false), 4000);
      return;
    }
    onResetAllData();
    setConfirmReset(false);
    setStatusMessage({type: 'success', text: t.actions.clearedMessage});
    window.setTimeout(() => setStatusMessage(null), 3500);
  };

  return (
    <div
      id="saved-tools"
      className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-3 print:hidden"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={onToggleFavorite}
            className={`inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-lg border px-3 text-xs font-semibold transition-colors ${
              isFavorite
                ? 'border-amber-300 bg-amber-50 text-amber-800'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Star
              className={`h-3.5 w-3.5 ${isFavorite ? 'fill-amber-500 text-amber-500' : 'text-slate-500'}`}
              aria-hidden="true"
            />
            <span>{isFavorite ? t.actions.favorited : t.actions.favorite}</span>
          </button>

          <button
            type="button"
            onClick={handleCopyShareLink}
            className={`inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-lg border px-3 text-xs font-semibold transition-colors ${
              linkCopied
                ? 'border-emerald-300 bg-emerald-50 text-emerald-700'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            {linkCopied ? (
              <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
            ) : (
              <Link2 className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
            )}
            <span>{linkCopied ? t.actions.linkCopied : t.actions.copyShareLink}</span>
          </button>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            <Printer className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
            <span>{t.actions.printCard}</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={onExportJson}
            className="inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            <Download className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
            <span>{t.actions.exportJson}</span>
          </button>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            <Upload className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
            <span>{t.actions.importJson}</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json,application/json"
            onChange={handleImportFile}
            className="hidden"
            aria-label={t.actions.importJson}
          />

          <button
            type="button"
            onClick={handleConfirmReset}
            className={`inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-lg border px-3 text-xs font-semibold transition-colors ${
              confirmReset
                ? 'border-red-300 bg-red-50 text-red-700'
                : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{confirmReset ? `${t.actions.clearLocal}?` : t.actions.clearLocal}</span>
          </button>
        </div>
      </div>

      {statusMessage && (
        <div
          role="status"
          className={`rounded-lg border px-3 py-2 text-xs font-medium ${
            statusMessage.type === 'success'
              ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
              : 'border-red-200 bg-red-50 text-red-800'
          }`}
        >
          {statusMessage.text}
        </div>
      )}
    </div>
  );
}

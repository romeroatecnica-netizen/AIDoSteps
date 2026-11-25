import type {UITranslations} from '../i18n/translations';

interface AdSlotMediaNetProps {
  slotId: 'mid-workspace' | 'footer-banner';
  t: UITranslations;
}

export function AdSlotMediaNet({slotId, t}: AdSlotMediaNetProps) {
  const isMid = slotId === 'mid-workspace';
  const minHeightClass = isMid ? 'min-h-[100px]' : 'min-h-[250px]';
  const crid = isMid ? 'MEDIANET_CRID_MID_728X90' : 'MEDIANET_CRID_FOOTER_970X250';

  return (
    <aside
      aria-label={t.ads.label}
      data-ad-network="media.net"
      data-ad-slot={slotId}
      className={`print:hidden flex w-full flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/70 px-4 py-3 ${minHeightClass}`}
    >
      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
        {t.ads.label}
      </span>

      {/*
        Media.net Integration Slot (${slotId})
        1. Add Media.net header script in index.html:
           <script id="mNCC" language="javascript">
             medianet_width = "${isMid ? '728' : '970'}";
             medianet_height = "${isMid ? '90' : '250'}";
             medianet_crid = "${crid}";
             medianet_versionId = "3111299";
           </script>
           <script src="https://contextual.media.net/nmedianet.js?cid=YOUR_CID" async></script>
        2. Mount target container inside this reserved min-height box to avoid Cumulative Layout Shift (CLS).
      */}
      <div
        id={crid}
        className="mt-1.5 flex w-full max-w-[970px] items-center justify-center text-center text-xs text-slate-400"
      >
        <span>Media.net · {isMid ? '728×90 / Responsive' : '970×250 / Responsive'}</span>
      </div>
    </aside>
  );
}

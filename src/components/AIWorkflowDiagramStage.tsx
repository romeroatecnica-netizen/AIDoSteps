import {
  Check,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  RotateCcw,
  ShieldAlert,
} from 'lucide-react';
import {useEffect, useId, useState} from 'react';
import type {UITranslations} from '../i18n/translations';
import type {FlowPattern, LangCode, WorkflowModule} from '../types/workflow';

interface AIWorkflowDiagramStageProps {
  module: WorkflowModule;
  lang: LangCode;
  isRtl: boolean;
  t: UITranslations;
  activeStepIndex: number;
  completedSteps: number[];
  onSelectStep: (idx: number) => void;
}

interface NodePos {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface DiagramGeometry {
  input: NodePos;
  steps: NodePos[];
  output: NodePos;
  edges: Array<{d: string; animated?: boolean; isLoop?: boolean}>;
}

function flipX(x: number, w: number, isRtl: boolean): number {
  return isRtl ? 880 - x - w : x;
}

function buildGeometry(pattern: FlowPattern, isRtl: boolean): DiagramGeometry {
  // Base coordinates designed in 880x310 LTR space, mirrored horizontally if RTL
  const boxW = 148;
  const boxH = 74;

  const makeBox = (x: number, y: number, w = boxW, h = boxH): NodePos => ({
    x: flipX(x, w, isRtl),
    y,
    w,
    h,
  });

  const cx = (p: NodePos) => p.x + p.w / 2;
  const cy = (p: NodePos) => p.y + p.h / 2;
  const rightEdge = (p: NodePos) => (isRtl ? p.x : p.x + p.w);
  const leftEdge = (p: NodePos) => (isRtl ? p.x + p.w : p.x);

  const connect = (from: NodePos, to: NodePos, animated = true) => {
    const x1 = rightEdge(from);
    const y1 = cy(from);
    const x2 = leftEdge(to);
    const y2 = cy(to);
    if (Math.abs(y1 - y2) < 4) {
      return {d: `M ${x1} ${y1} L ${x2} ${y2}`, animated};
    }
    const midX = (x1 + x2) / 2;
    return {d: `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`, animated};
  };

  if (pattern === 'branch-verify' || pattern === 'matrix-split') {
    const input = makeBox(20, 118, 126, 74);
    const s0 = makeBox(176, 118, 142, 74);
    const s1 = makeBox(358, 34, 152, 74);
    const s2 = makeBox(358, 202, 152, 74);
    const s3 = makeBox(548, 118, 156, 74);
    const output = makeBox(734, 118, 126, 74);

    return {
      input,
      steps: [s0, s1, s2, s3],
      output,
      edges: [
        connect(input, s0),
        connect(s0, s1),
        connect(s0, s2),
        connect(s1, s3),
        connect(s2, s3),
        connect(s3, output),
      ],
    };
  }

  if (pattern === 'loop-refine' || pattern === 'script-sandbox') {
    const input = makeBox(20, 108, 124, 74);
    const s0 = makeBox(170, 108, 140, 74);
    const s1 = makeBox(336, 44, 146, 74);
    const s2 = makeBox(336, 174, 146, 74);
    const s3 = makeBox(520, 108, 162, 74);
    const output = makeBox(720, 108, 140, 74);

    const loopY1 = s1.y + s1.h;
    const loopY2 = s2.y;
    const loopXLeft = cx(s1) - 18;
    const loopXRight = cx(s1) + 18;

    return {
      input,
      steps: [s0, s1, s2, s3],
      output,
      edges: [
        connect(input, s0),
        connect(s0, s1),
        {d: `M ${loopXRight} ${loopY1} L ${loopXRight} ${loopY2}`, animated: true},
        {d: `M ${loopXLeft} ${loopY2} L ${loopXLeft} ${loopY1}`, animated: true, isLoop: true},
        connect(s2, s3),
        connect(s3, output),
      ],
    };
  }

  // Default: linear-pipeline & input-transform-output (2-row crisp snake layout)
  const input = makeBox(24, 34, 152, 76);
  const s0 = makeBox(224, 34, 184, 76);
  const s1 = makeBox(456, 34, 184, 76);
  const s2 = makeBox(224, 196, 184, 76);
  const s3 = makeBox(456, 196, 184, 76);
  const output = makeBox(686, 196, 170, 76);

  const s1BottomX = cx(s1);
  const s1BottomY = s1.y + s1.h;
  const s2TopX = cx(s2);
  const s2TopY = s2.y;
  const midY = (s1BottomY + s2TopY) / 2;

  return {
    input,
    steps: [s0, s1, s2, s3],
    output,
    edges: [
      connect(input, s0),
      connect(s0, s1),
      {
        d: `M ${s1BottomX} ${s1BottomY} L ${s1BottomX} ${midY} L ${s2TopX} ${midY} L ${s2TopX} ${s2TopY}`,
        animated: true,
      },
      connect(s2, s3),
      connect(s3, output),
    ],
  };
}

export function AIWorkflowDiagramStage({
  module,
  lang,
  isRtl,
  t,
  activeStepIndex,
  completedSteps,
  onSelectStep,
}: AIWorkflowDiagramStageProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const markerId = useId().replace(/:/g, '');
  const content = module.translations[lang];
  const totalSteps = content.steps.length;

  useEffect(() => {
    setIsPlaying(false);
  }, [module.id]);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setInterval(() => {
      onSelectStep((activeStepIndex + 1) % totalSteps);
    }, 2400);
    return () => window.clearInterval(timer);
  }, [isPlaying, activeStepIndex, totalSteps, onSelectStep]);

  const geometry = buildGeometry(module.flowPattern, isRtl);
  const activeStep = content.steps[activeStepIndex] ?? content.steps[0];
  const lastStepIndex = totalSteps - 1;

  return (
    <section
      id="diagram"
      aria-labelledby="diagram-heading"
      className="print-card rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3.5">
        <div>
          <h2 id="diagram-heading" className="text-base font-bold text-slate-900 sm:text-lg">
            {t.diagram.heading}
          </h2>
          <p className="mt-0.5 text-xs text-slate-500">
            <span className="tabular-nums font-semibold text-indigo-700">
              {t.diagram.stepOf} {activeStepIndex + 1} / {totalSteps}
            </span>{' '}
            · {activeStep.label}
          </p>
        </div>

        {/* Playback & Step Controls */}
        <div className="flex flex-wrap items-center gap-1.5 print:hidden">
          <button
            type="button"
            onClick={() => setIsPlaying((prev) => !prev)}
            className={`inline-flex h-8 items-center gap-1.5 whitespace-nowrap rounded-lg border px-2.5 text-xs font-semibold transition-colors ${
              isPlaying
                ? 'border-indigo-700 bg-indigo-700 text-white'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            {isPlaying ? (
              <Pause className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <Play className="h-3.5 w-3.5" aria-hidden="true" />
            )}
            <span>{isPlaying ? t.diagram.pause : t.diagram.play}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setIsPlaying(false);
              onSelectStep(Math.max(0, activeStepIndex - 1));
            }}
            disabled={activeStepIndex === 0}
            aria-label={t.diagram.prev}
            className="inline-flex h-8 items-center gap-1 whitespace-nowrap rounded-lg border border-slate-200 bg-white px-2.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-45"
          >
            <ChevronLeft className={`h-3.5 w-3.5 ${isRtl ? 'rotate-180' : ''}`} aria-hidden="true" />
            <span className="hidden sm:inline">{t.diagram.prev}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setIsPlaying(false);
              onSelectStep(Math.min(lastStepIndex, activeStepIndex + 1));
            }}
            disabled={activeStepIndex === lastStepIndex}
            aria-label={t.diagram.next}
            className="inline-flex h-8 items-center gap-1 whitespace-nowrap rounded-lg border border-slate-200 bg-white px-2.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-45"
          >
            <span className="hidden sm:inline">{t.diagram.next}</span>
            <ChevronRight className={`h-3.5 w-3.5 ${isRtl ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => {
              setIsPlaying(false);
              onSelectStep(0);
            }}
            aria-label={t.diagram.reset}
            className="inline-flex h-8 items-center gap-1 whitespace-nowrap rounded-lg border border-slate-200 bg-white px-2.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">{t.diagram.reset}</span>
          </button>
        </div>
      </div>

      {/* Interactive SVG Canvas */}
      <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200 bg-slate-50/70 p-2 sm:p-3">
        <svg
          viewBox="0 0 880 306"
          role="img"
          aria-label={`${content.title} — ${t.diagram.heading}`}
          className="h-auto w-full min-w-[640px] select-none"
        >
          <defs>
            <pattern
              id={`grid-${markerId}`}
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="0.7"
              />
            </pattern>
            <marker
              id={`arrow-${markerId}`}
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#64748B" />
            </marker>
            <marker
              id={`arrow-amber-${markerId}`}
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#D97706" />
            </marker>
          </defs>

          <rect width="880" height="306" rx="8" fill={`url(#grid-${markerId})`} />

          {/* Flow Edges */}
          {geometry.edges.map((edge, idx) => (
            <path
              key={idx}
              d={edge.d}
              fill="none"
              stroke={edge.isLoop ? '#D97706' : '#64748B'}
              strokeWidth="2"
              markerEnd={`url(#${edge.isLoop ? `arrow-amber-${markerId}` : `arrow-${markerId}`})`}
              className={edge.animated ? 'svg-flow-animated' : undefined}
            />
          ))}

          {/* Input Node */}
          <g>
            <rect
              x={geometry.input.x}
              y={geometry.input.y}
              width={geometry.input.w}
              height={geometry.input.h}
              rx="10"
              fill="#F1F5F9"
              stroke="#94A3B8"
              strokeWidth="1.5"
            />
            <foreignObject
              x={geometry.input.x + 8}
              y={geometry.input.y + 8}
              width={geometry.input.w - 16}
              height={geometry.input.h - 16}
            >
              <div
                dir={isRtl ? 'rtl' : 'ltr'}
                className="flex h-full flex-col items-center justify-center text-center"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  INPUT
                </span>
                <span className="mt-1 line-clamp-2 text-[11px] leading-tight font-semibold text-slate-800">
                  {t.diagram.inputLabel}
                </span>
              </div>
            </foreignObject>
          </g>

          {/* Interactive Step Nodes */}
          {geometry.steps.map((pos, idx) => {
            const step = content.steps[idx];
            if (!step) return null;
            const isActive = idx === activeStepIndex;
            const isDone = completedSteps.includes(idx);
            const isVerificationGate = idx === lastStepIndex;

            let fill = '#FFFFFF';
            let stroke = '#CBD5E1';
            let badgeBg = 'bg-slate-100 text-slate-700';

            if (isVerificationGate) {
              fill = isActive ? '#FFFBEB' : '#FEFCE8';
              stroke = isActive ? '#D97706' : '#F59E0B';
              badgeBg = 'bg-amber-100 text-amber-800';
            } else if (isActive) {
              fill = '#EEF2FF';
              stroke = '#4338CA';
              badgeBg = 'bg-indigo-700 text-white';
            } else if (isDone) {
              fill = '#ECFDF5';
              stroke = '#059669';
              badgeBg = 'bg-emerald-600 text-white';
            }

            return (
              <g
                key={idx}
                role="button"
                tabIndex={0}
                aria-label={`${t.diagram.stepOf} ${idx + 1}: ${step.label}`}
                aria-pressed={isActive}
                onClick={() => {
                  setIsPlaying(false);
                  onSelectStep(idx);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsPlaying(false);
                    onSelectStep(idx);
                  }
                }}
                className="cursor-pointer outline-none"
              >
                <rect
                  x={pos.x}
                  y={pos.y}
                  width={pos.w}
                  height={pos.h}
                  rx="10"
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={isActive ? '2.5' : '1.5'}
                />
                <foreignObject
                  x={pos.x + 8}
                  y={pos.y + 6}
                  width={pos.w - 16}
                  height={pos.h - 12}
                >
                  <div
                    dir={isRtl ? 'rtl' : 'ltr'}
                    className="flex h-full flex-col justify-between"
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span
                        className={`inline-flex h-5 items-center rounded px-1.5 text-[10px] font-bold tabular-nums ${badgeBg}`}
                      >
                        0{idx + 1}
                      </span>
                      {isVerificationGate ? (
                        <ShieldAlert className="h-3.5 w-3.5 text-amber-600" aria-hidden="true" />
                      ) : isDone ? (
                        <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                      ) : null}
                    </div>
                    <div className="line-clamp-2 text-[11px] leading-tight font-semibold text-slate-900">
                      {step.label}
                    </div>
                  </div>
                </foreignObject>
              </g>
            );
          })}

          {/* Verified Output Node */}
          <g>
            <rect
              x={geometry.output.x}
              y={geometry.output.y}
              width={geometry.output.w}
              height={geometry.output.h}
              rx="10"
              fill="#ECFDF5"
              stroke="#059669"
              strokeWidth="1.75"
            />
            <foreignObject
              x={geometry.output.x + 8}
              y={geometry.output.y + 8}
              width={geometry.output.w - 16}
              height={geometry.output.h - 16}
            >
              <div
                dir={isRtl ? 'rtl' : 'ltr'}
                className="flex h-full flex-col items-center justify-center text-center"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                  OK
                </span>
                <span className="mt-1 line-clamp-2 text-[11px] leading-tight font-semibold text-emerald-950">
                  {t.diagram.finalOutputLabel}
                </span>
              </div>
            </foreignObject>
          </g>
        </svg>
      </div>

      {/* Active Step Readout Panel */}
      <div className="mt-3 flex flex-col gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-2.5">
          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-indigo-700 text-xs font-bold text-white tabular-nums">
            {activeStepIndex + 1}
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-900">{activeStep.label}</p>
            <p className="mt-0.5 text-xs leading-relaxed text-slate-600">{activeStep.detail}</p>
          </div>
        </div>
        {activeStepIndex === lastStepIndex && (
          <div className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-amber-800">
            <ShieldAlert className="h-4 w-4 text-amber-600" aria-hidden="true" />
            <span>{t.diagram.humanGateLabel}</span>
          </div>
        )}
      </div>
    </section>
  );
}

import {ShieldCheck} from 'lucide-react';
import {useEffect, useState} from 'react';
import {AdSlotMediaNet} from './components/AdSlotMediaNet';
import {AffiliateRecommendations} from './components/AffiliateRecommendations';
import {AIWorkflowDiagramStage} from './components/AIWorkflowDiagramStage';
import {EditorialSeoSection} from './components/EditorialSeoSection';
import {ModuleCatalogSidebar, type StatusFilter} from './components/ModuleCatalogSidebar';
import {PromptBuilderBox} from './components/PromptBuilderBox';
import {SavedWorkspaceBar} from './components/SavedWorkspaceBar';
import {StepChecklist} from './components/StepChecklist';
import {TopBar} from './components/TopBar';
import {getLangMeta} from './config/seo';
import {ALL_WORKFLOW_MODULES} from './data/catalog';
import {useLocalWorkspace} from './hooks/useLocalWorkspace';
import type {CategoryId} from './types/workflow';

export default function App() {
  const {
    workspace,
    t,
    activeModule,
    promptStorageKey,
    shareUrl,
    setLang,
    selectModule,
    toggleStep,
    toggleModuleComplete,
    toggleFavorite,
    updatePromptField,
    resetPromptFields,
    updateNote,
    exportJson,
    importJson,
    resetAllData,
  } = useLocalWorkspace();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Reset highlighted diagram step when switching workflow modules
  useEffect(() => {
    setActiveStepIndex(0);
  }, [activeModule.id]);

  const langMeta = getLangMeta(workspace.lang);
  const isRtl = langMeta.dir === 'rtl';
  const modContent = activeModule.translations[workspace.lang];
  const completedSteps = workspace.completedSteps[activeModule.id] ?? [];
  const isWorkflowDone = workspace.completedModules.includes(activeModule.id);
  const isFavorite = workspace.favorites.includes(activeModule.id);
  const customValues = workspace.customPrompts[promptStorageKey] ?? {};
  const note = workspace.notes[activeModule.id] ?? '';

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setStatusFilter('all');
  };

  return (
    <div id="top" dir={langMeta.dir} className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <TopBar lang={workspace.lang} t={t} onChangeLang={setLang} />

      <main className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8">
        {/* Hero Search-Intent Header */}
        <section aria-labelledby="hero-heading" className="mb-6 print:hidden">
          <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-7">
            <h1
              id="hero-heading"
              className="max-w-4xl text-2xl font-extrabold tracking-tight text-slate-900 [text-wrap:balance] sm:text-3xl lg:text-[34px] lg:leading-tight"
            >
              {t.hero.headline}
            </h1>
            <p className="mt-2.5 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {t.hero.subtitle}
            </p>
            <p className="mt-3 text-xs font-medium text-slate-500">
              {t.hero.searchIntentNote}
            </p>
            <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs leading-relaxed text-slate-700">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
              <span>{t.hero.transparentNotice}</span>
            </div>
          </div>
        </section>

        {/* Primary 2-Column Workspace */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[350px_minmax(0,1fr)] lg:items-start">
          <ModuleCatalogSidebar
            modules={ALL_WORKFLOW_MODULES}
            activeModuleId={activeModule.id}
            lang={workspace.lang}
            t={t}
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            statusFilter={statusFilter}
            favorites={workspace.favorites}
            completedModules={workspace.completedModules}
            onSearchChange={setSearchQuery}
            onCategoryChange={setSelectedCategory}
            onStatusFilterChange={setStatusFilter}
            onSelectModule={selectModule}
            onResetFilters={handleResetFilters}
          />

          <div className="min-w-0 space-y-5">
            <SavedWorkspaceBar
              t={t}
              isFavorite={isFavorite}
              shareUrl={shareUrl}
              onToggleFavorite={() => toggleFavorite(activeModule.id)}
              onExportJson={exportJson}
              onImportJson={importJson}
              onResetAllData={resetAllData}
            />

            {/* Active Workflow Header */}
            <article className="print-card rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold text-slate-600">
                <span className="tabular-nums text-indigo-700">
                  {t.catalog.modulePrefix} #{String(activeModule.index).padStart(2, '0')}
                </span>
                <span aria-hidden="true" className="text-slate-300">
                  ·
                </span>
                <span>{t.categories[activeModule.category].name}</span>
                <span aria-hidden="true" className="text-slate-300">
                  ·
                </span>
                <span>{t.difficulties[activeModule.difficulty]}</span>
                <span aria-hidden="true" className="text-slate-300">
                  ·
                </span>
                <span className="tabular-nums">
                  {activeModule.minutes} {t.catalog.minutesUnit}
                </span>
              </div>

              <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                {modContent.title}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 sm:text-base">
                {modContent.summary}
              </p>
            </article>

            <AIWorkflowDiagramStage
              module={activeModule}
              lang={workspace.lang}
              isRtl={isRtl}
              t={t}
              activeStepIndex={activeStepIndex}
              completedSteps={completedSteps}
              onSelectStep={setActiveStepIndex}
            />

            <StepChecklist
              module={activeModule}
              lang={workspace.lang}
              t={t}
              activeStepIndex={activeStepIndex}
              completedSteps={completedSteps}
              isWorkflowDone={isWorkflowDone}
              onSelectStep={setActiveStepIndex}
              onToggleStep={(idx) => toggleStep(activeModule.id, idx)}
              onToggleWorkflowDone={() =>
                toggleModuleComplete(activeModule.id, modContent.steps.length)
              }
            />

            <PromptBuilderBox
              module={activeModule}
              lang={workspace.lang}
              t={t}
              customValues={customValues}
              note={note}
              onUpdateField={updatePromptField}
              onResetFields={resetPromptFields}
              onUpdateNote={(val) => updateNote(activeModule.id, val)}
            />
          </div>
        </div>

        {/* Mid-Page Media.net Ad Slot */}
        <div className="my-8">
          <AdSlotMediaNet slotId="mid-workspace" t={t} />
        </div>

        {/* SEO Practical Guide & Collapsible FAQ */}
        <EditorialSeoSection t={t} />

        {/* Contextual Affiliate Tools */}
        <div className="mt-8">
          <AffiliateRecommendations t={t} />
        </div>

        {/* Bottom Media.net Ad Slot */}
        <div className="mt-8">
          <AdSlotMediaNet slotId="footer-banner" t={t} />
        </div>
      </main>

      <footer className="mt-12 border-t border-slate-200 bg-white py-8 print:hidden">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <p className="font-semibold text-slate-800">AIDoSteps</p>
            <p className="mt-0.5">{t.footer.tagline}</p>
          </div>
          <div className="flex flex-col gap-0.5 sm:text-end">
            <p>{t.footer.canonicalNote}</p>
            <p>{t.footer.privacyNote}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

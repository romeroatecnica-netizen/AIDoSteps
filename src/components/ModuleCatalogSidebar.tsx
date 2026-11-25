import {CheckCircle2, Search, Star, X} from 'lucide-react';
import {CATEGORY_ORDER} from '../data/catalog';
import type {UITranslations} from '../i18n/translations';
import type {CategoryId, LangCode, WorkflowModule} from '../types/workflow';

export type StatusFilter = 'all' | 'favorites' | 'completed';

interface ModuleCatalogSidebarProps {
  modules: WorkflowModule[];
  activeModuleId: string;
  lang: LangCode;
  t: UITranslations;
  searchQuery: string;
  selectedCategory: CategoryId | 'all';
  statusFilter: StatusFilter;
  favorites: string[];
  completedModules: string[];
  onSearchChange: (q: string) => void;
  onCategoryChange: (cat: CategoryId | 'all') => void;
  onStatusFilterChange: (filter: StatusFilter) => void;
  onSelectModule: (id: string) => void;
  onResetFilters: () => void;
}

export function ModuleCatalogSidebar({
  modules,
  activeModuleId,
  lang,
  t,
  searchQuery,
  selectedCategory,
  statusFilter,
  favorites,
  completedModules,
  onSearchChange,
  onCategoryChange,
  onStatusFilterChange,
  onSelectModule,
  onResetFilters,
}: ModuleCatalogSidebarProps) {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredModules = modules.filter((mod) => {
    if (selectedCategory !== 'all' && mod.category !== selectedCategory) return false;
    if (statusFilter === 'favorites' && !favorites.includes(mod.id)) return false;
    if (statusFilter === 'completed' && !completedModules.includes(mod.id)) return false;
    if (normalizedQuery) {
      const content = mod.translations[lang];
      const catName = t.categories[mod.category].name.toLowerCase();
      const haystack = `${content.title} ${content.summary} ${catName} ${mod.slug}`.toLowerCase();
      if (!haystack.includes(normalizedQuery)) return false;
    }
    return true;
  });

  return (
    <aside
      id="catalog"
      aria-label={t.nav.catalog}
      className="flex flex-col rounded-xl border border-slate-200 bg-white print:hidden"
    >
      {/* Search + Status Filters */}
      <div className="border-b border-slate-200 p-4">
        <div className="relative">
          <Search
            className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.catalog.searchPlaceholder}
            aria-label={t.catalog.searchPlaceholder}
            className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pe-9 ps-9 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-700/15"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
              className="absolute end-2.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-slate-400 hover:text-slate-700"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Status segmented tabs */}
        <div className="mt-3 grid grid-cols-3 gap-1.5 rounded-lg bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => onStatusFilterChange('all')}
            className={`whitespace-nowrap rounded-md px-2 py-1.5 text-xs font-medium transition-colors ${
              statusFilter === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.catalog.filterAll}{' '}
            <span className="tabular-nums text-slate-400">({modules.length})</span>
          </button>
          <button
            type="button"
            onClick={() => onStatusFilterChange('favorites')}
            className={`whitespace-nowrap rounded-md px-2 py-1.5 text-xs font-medium transition-colors ${
              statusFilter === 'favorites'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.catalog.filterFavorites}{' '}
            <span className="tabular-nums text-slate-400">({favorites.length})</span>
          </button>
          <button
            type="button"
            onClick={() => onStatusFilterChange('completed')}
            className={`whitespace-nowrap rounded-md px-2 py-1.5 text-xs font-medium transition-colors ${
              statusFilter === 'completed'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.catalog.filterCompleted}{' '}
            <span className="tabular-nums text-slate-400">({completedModules.length})</span>
          </button>
        </div>

        {/* Category Filter Grid */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => onCategoryChange('all')}
            className={`whitespace-nowrap rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'border-indigo-700 bg-indigo-700 text-white'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            {t.allCategories}
          </button>
          {CATEGORY_ORDER.map((catId) => (
            <button
              key={catId}
              type="button"
              onClick={() => onCategoryChange(catId)}
              className={`whitespace-nowrap rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors ${
                selectedCategory === catId
                  ? 'border-indigo-700 bg-indigo-700 text-white'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              {t.categories[catId].name}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count Header */}
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-4 py-2 text-xs font-medium text-slate-600">
        <span>
          <span className="tabular-nums font-semibold text-slate-900">{filteredModules.length}</span>{' '}
          {t.catalog.workflowsCount}
        </span>
        {(searchQuery || selectedCategory !== 'all' || statusFilter !== 'all') && (
          <button
            type="button"
            onClick={onResetFilters}
            className="font-medium text-indigo-700 hover:underline"
          >
            {t.diagram.reset}
          </button>
        )}
      </div>

      {/* Scrollable Module List */}
      <div className="max-h-[540px] divide-y divide-slate-100 overflow-y-auto lg:max-h-[760px]">
        {filteredModules.length === 0 ? (
          <div className="p-6 text-center">
            <p className="text-sm font-medium text-slate-700">{t.catalog.emptyTitle}</p>
            <button
              type="button"
              onClick={onResetFilters}
              className="mt-3 rounded-lg border border-indigo-700 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-100"
            >
              {t.catalog.emptyAction}
            </button>
          </div>
        ) : (
          filteredModules.map((mod) => {
            const isActive = mod.id === activeModuleId;
            const isDone = completedModules.includes(mod.id);
            const isFav = favorites.includes(mod.id);
            const content = mod.translations[lang];

            return (
              <button
                key={mod.id}
                type="button"
                onClick={() => onSelectModule(mod.id)}
                aria-current={isActive ? 'true' : undefined}
                className={`group flex w-full flex-col gap-1.5 px-4 py-3 text-start transition-colors ${
                  isActive ? 'bg-indigo-50/80' : 'bg-white hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                  <span className="tabular-nums font-semibold text-slate-600">
                    {String(mod.index).padStart(2, '0')} · {t.categories[mod.category].name}
                  </span>
                  <span className="flex shrink-0 items-center gap-1.5">
                    {isFav && (
                      <Star
                        className="h-3.5 w-3.5 fill-amber-500 text-amber-500"
                        aria-label={t.actions.favorited}
                      />
                    )}
                    {isDone && (
                      <CheckCircle2
                        className="h-3.5 w-3.5 text-emerald-600"
                        aria-label={t.checklist.workflowDone}
                      />
                    )}
                    <span className="tabular-nums font-medium text-slate-500">
                      {mod.minutes} {t.catalog.minutesUnit}
                    </span>
                  </span>
                </div>
                <span
                  className={`text-sm leading-snug font-semibold ${
                    isActive ? 'text-indigo-800' : 'text-slate-900 group-hover:text-indigo-700'
                  }`}
                >
                  {content.title}
                </span>
                <span className="text-xs text-slate-500">
                  {t.difficulties[mod.difficulty]}
                </span>
              </button>
            );
          })
        )}
      </div>
    </aside>
  );
}

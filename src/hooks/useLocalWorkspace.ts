import {useCallback, useEffect, useMemo, useState} from 'react';
import {detectBrowserLang, getCanonicalUrl, isValidLang, syncDocumentSeo} from '../config/seo';
import {ALL_WORKFLOW_MODULES, getModuleBySlug} from '../data/catalog';
import {UI_TRANSLATIONS} from '../i18n/translations';
import type {LangCode, SavedWorkspaceState, WorkflowModule} from '../types/workflow';

const STORAGE_KEY = 'aidosteps_workspace_v1';
const CURRENT_VERSION = 1;

function createEmptyState(lang: LangCode): SavedWorkspaceState {
  return {
    version: CURRENT_VERSION,
    lang,
    completedModules: [],
    completedSteps: {},
    favorites: [],
    customPrompts: {},
    notes: {},
    updatedAt: new Date().toISOString(),
  };
}

function getInitialParams(): {
  urlLang: LangCode | null;
  urlTaskSlug: string | null;
} {
  if (typeof window === 'undefined') {
    return {urlLang: null, urlTaskSlug: null};
  }
  const params = new URLSearchParams(window.location.search);
  const rawLang = params.get('lang');
  const urlLang = isValidLang(rawLang) ? rawLang : null;
  const rawTask = params.get('task') || window.location.hash.replace(/^#/, '');
  const matched = getModuleBySlug(rawTask);
  return {
    urlLang,
    urlTaskSlug: matched ? matched.slug : null,
  };
}

function loadSavedState(): SavedWorkspaceState {
  const {urlLang} = getInitialParams();
  if (typeof window === 'undefined') {
    return createEmptyState(urlLang ?? 'en');
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<SavedWorkspaceState>;
      const resolvedLang: LangCode =
        urlLang ?? (isValidLang(parsed.lang) ? parsed.lang : detectBrowserLang());
      return {
        version: CURRENT_VERSION,
        lang: resolvedLang,
        completedModules: Array.isArray(parsed.completedModules)
          ? parsed.completedModules.filter((v): v is string => typeof v === 'string')
          : [],
        completedSteps:
          parsed.completedSteps && typeof parsed.completedSteps === 'object'
            ? parsed.completedSteps
            : {},
        favorites: Array.isArray(parsed.favorites)
          ? parsed.favorites.filter((v): v is string => typeof v === 'string')
          : [],
        customPrompts:
          parsed.customPrompts && typeof parsed.customPrompts === 'object'
            ? parsed.customPrompts
            : {},
        notes: parsed.notes && typeof parsed.notes === 'object' ? parsed.notes : {},
        updatedAt: typeof parsed.updatedAt === 'string' ? parsed.updatedAt : new Date().toISOString(),
      };
    }
  } catch {
    // Ignore malformed localStorage data and start cleanly
  }
  return createEmptyState(urlLang ?? detectBrowserLang());
}

export function useLocalWorkspace() {
  const [workspace, setWorkspace] = useState<SavedWorkspaceState>(loadSavedState);

  const initialTask = useMemo(() => {
    const {urlTaskSlug} = getInitialParams();
    if (urlTaskSlug) {
      return {
        moduleId: getModuleBySlug(urlTaskSlug)?.id ?? ALL_WORKFLOW_MODULES[0].id,
        hasExplicitTaskInUrl: true,
      };
    }
    return {
      moduleId: ALL_WORKFLOW_MODULES[0].id,
      hasExplicitTaskInUrl: false,
    };
  }, []);

  const [activeModuleId, setActiveModuleId] = useState<string>(initialTask.moduleId);
  const [hasExplicitTaskInUrl, setHasExplicitTaskInUrl] = useState<boolean>(
    initialTask.hasExplicitTaskInUrl
  );

  const activeModule: WorkflowModule = useMemo(
    () => ALL_WORKFLOW_MODULES.find((m) => m.id === activeModuleId) ?? ALL_WORKFLOW_MODULES[0],
    [activeModuleId]
  );

  const t = UI_TRANSLATIONS[workspace.lang];

  // Persist workspace to localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(workspace));
    } catch {
      // Ignore storage quota errors
    }
  }, [workspace]);

  // Sync document SEO metadata, canonical, hreflang, dir="rtl" and JSON-LD
  useEffect(() => {
    syncDocumentSeo({
      lang: workspace.lang,
      siteTitle: t.siteTitle,
      siteDescription: t.siteDescription,
      activeModule,
      faqs: t.editorial.faqs,
      hasExplicitTaskInUrl,
    });
  }, [workspace.lang, t, activeModule, hasExplicitTaskInUrl]);

  // Sync browser URL query cleanly (preserving non-breaking navigation)
  const syncBrowserUrl = useCallback(
    (nextLang: LangCode, nextSlug: string, includeTask: boolean) => {
      if (typeof window === 'undefined') return;
      const params = new URLSearchParams(window.location.search);
      if (nextLang === 'en') {
        params.delete('lang');
      } else {
        params.set('lang', nextLang);
      }
      if (includeTask) {
        params.set('task', nextSlug);
      } else {
        params.delete('task');
      }
      const qs = params.toString();
      const nextUrl = `${window.location.pathname}${qs ? `?${qs}` : ''}`;
      window.history.replaceState(null, '', nextUrl);
    },
    []
  );

  const setLang = useCallback(
    (nextLang: LangCode) => {
      setWorkspace((prev) => ({
        ...prev,
        lang: nextLang,
        updatedAt: new Date().toISOString(),
      }));
      syncBrowserUrl(nextLang, activeModule.slug, hasExplicitTaskInUrl);
    },
    [activeModule.slug, hasExplicitTaskInUrl, syncBrowserUrl]
  );

  const selectModule = useCallback(
    (moduleId: string) => {
      const found = ALL_WORKFLOW_MODULES.find((m) => m.id === moduleId);
      if (!found) return;
      setActiveModuleId(found.id);
      setHasExplicitTaskInUrl(true);
      syncBrowserUrl(workspace.lang, found.slug, true);
    },
    [syncBrowserUrl, workspace.lang]
  );

  const toggleStep = useCallback((moduleId: string, stepIdx: number) => {
    setWorkspace((prev) => {
      const current = prev.completedSteps[moduleId] ?? [];
      const exists = current.includes(stepIdx);
      const nextSteps = exists
        ? current.filter((i) => i !== stepIdx)
        : [...current, stepIdx].sort((a, b) => a - b);
      return {
        ...prev,
        completedSteps: {
          ...prev.completedSteps,
          [moduleId]: nextSteps,
        },
        updatedAt: new Date().toISOString(),
      };
    });
  }, []);

  const toggleModuleComplete = useCallback((moduleId: string, totalSteps: number) => {
    setWorkspace((prev) => {
      const isDone = prev.completedModules.includes(moduleId);
      const nextCompleted = isDone
        ? prev.completedModules.filter((id) => id !== moduleId)
        : [...prev.completedModules, moduleId];
      const nextSteps = isDone
        ? prev.completedSteps[moduleId] ?? []
        : Array.from({length: totalSteps}, (_, idx) => idx);
      return {
        ...prev,
        completedModules: nextCompleted,
        completedSteps: {
          ...prev.completedSteps,
          [moduleId]: nextSteps,
        },
        updatedAt: new Date().toISOString(),
      };
    });
  }, []);

  const toggleFavorite = useCallback((moduleId: string) => {
    setWorkspace((prev) => {
      const exists = prev.favorites.includes(moduleId);
      const nextFavorites = exists
        ? prev.favorites.filter((id) => id !== moduleId)
        : [...prev.favorites, moduleId];
      return {
        ...prev,
        favorites: nextFavorites,
        updatedAt: new Date().toISOString(),
      };
    });
  }, []);

  const promptStorageKey = `${activeModule.id}:${workspace.lang}`;

  const updatePromptField = useCallback(
    (fieldKey: string, value: string) => {
      setWorkspace((prev) => {
        const existingFields = prev.customPrompts[promptStorageKey] ?? {};
        return {
          ...prev,
          customPrompts: {
            ...prev.customPrompts,
            [promptStorageKey]: {
              ...existingFields,
              [fieldKey]: value,
            },
          },
          updatedAt: new Date().toISOString(),
        };
      });
    },
    [promptStorageKey]
  );

  const resetPromptFields = useCallback(() => {
    setWorkspace((prev) => {
      const nextPrompts = {...prev.customPrompts};
      delete nextPrompts[promptStorageKey];
      return {
        ...prev,
        customPrompts: nextPrompts,
        updatedAt: new Date().toISOString(),
      };
    });
  }, [promptStorageKey]);

  const updateNote = useCallback((moduleId: string, note: string) => {
    setWorkspace((prev) => ({
      ...prev,
      notes: {
        ...prev.notes,
        [moduleId]: note,
      },
      updatedAt: new Date().toISOString(),
    }));
  }, []);

  const exportJson = useCallback(() => {
    const payload = JSON.stringify(workspace, null, 2);
    const blob = new Blob([payload], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `aidosteps-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [workspace]);

  const importJson = useCallback((rawText: string): boolean => {
    try {
      const parsed = JSON.parse(rawText) as Partial<SavedWorkspaceState>;
      if (!parsed || typeof parsed !== 'object') return false;
      if (!Array.isArray(parsed.completedModules) || !Array.isArray(parsed.favorites)) {
        return false;
      }
      const nextLang: LangCode = isValidLang(parsed.lang) ? parsed.lang : workspace.lang;
      const validIds = new Set(ALL_WORKFLOW_MODULES.map((m) => m.id));
      const cleanState: SavedWorkspaceState = {
        version: CURRENT_VERSION,
        lang: nextLang,
        completedModules: parsed.completedModules.filter(
          (id): id is string => typeof id === 'string' && validIds.has(id)
        ),
        completedSteps:
          parsed.completedSteps && typeof parsed.completedSteps === 'object'
            ? parsed.completedSteps
            : {},
        favorites: parsed.favorites.filter(
          (id): id is string => typeof id === 'string' && validIds.has(id)
        ),
        customPrompts:
          parsed.customPrompts && typeof parsed.customPrompts === 'object'
            ? parsed.customPrompts
            : {},
        notes: parsed.notes && typeof parsed.notes === 'object' ? parsed.notes : {},
        updatedAt: new Date().toISOString(),
      };
      setWorkspace(cleanState);
      return true;
    } catch {
      return false;
    }
  }, [workspace.lang]);

  const resetAllData = useCallback(() => {
    const fresh = createEmptyState(workspace.lang);
    setWorkspace(fresh);
  }, [workspace.lang]);

  const shareUrl = useMemo(
    () => getCanonicalUrl(workspace.lang, activeModule.slug),
    [workspace.lang, activeModule.slug]
  );

  return {
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
  };
}

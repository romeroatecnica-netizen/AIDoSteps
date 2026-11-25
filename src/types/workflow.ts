export type LangCode = 'en' | 'es' | 'fr' | 'de' | 'pt' | 'ar' | 'hi' | 'ru' | 'zh' | 'ja';

export type CategoryId =
  | 'writing'
  | 'studying'
  | 'planning'
  | 'work'
  | 'creativity'
  | 'spreadsheets';

export type DifficultyLevel = 'starter' | 'structured' | 'multi-step';

export type FlowPattern =
  | 'linear-pipeline'
  | 'branch-verify'
  | 'loop-refine'
  | 'matrix-split'
  | 'input-transform-output'
  | 'script-sandbox';

export interface WorkflowStepContent {
  label: string;
  detail: string;
}

export interface PromptFieldDef {
  key: string;
  label: string;
  placeholder: string;
  defaultValue: string;
  multiline?: boolean;
}

export interface LocalizedModuleContent {
  title: string;
  summary: string;
  risk: string;
  steps: WorkflowStepContent[];
  promptFields: PromptFieldDef[];
  promptTemplate: string;
}

export interface WorkflowModule {
  id: string;
  index: number;
  slug: string;
  category: CategoryId;
  difficulty: DifficultyLevel;
  minutes: number;
  flowPattern: FlowPattern;
  translations: Record<LangCode, LocalizedModuleContent>;
}

export interface SavedWorkspaceState {
  version: number;
  lang: LangCode;
  completedModules: string[];
  completedSteps: Record<string, number[]>;
  favorites: string[];
  customPrompts: Record<string, Record<string, string>>;
  notes: Record<string, string>;
  updatedAt: string;
}

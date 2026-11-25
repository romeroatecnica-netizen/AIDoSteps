import type {
  CategoryId,
  DifficultyLevel,
  FlowPattern,
  LangCode,
  LocalizedModuleContent,
  PromptFieldDef,
  WorkflowModule,
  WorkflowStepContent,
} from '../types/workflow';

export interface CompactLocaleSpec {
  title: string;
  summary: string;
  risk: string;
  steps: [string, string][];
  fields: Array<{
    key: string;
    label: string;
    placeholder: string;
    defaultValue: string;
    multiline?: boolean;
  }>;
  promptTemplate: string;
}

export function defineWorkflowModule(config: {
  id: string;
  index: number;
  slug: string;
  category: CategoryId;
  difficulty: DifficultyLevel;
  minutes: number;
  flowPattern: FlowPattern;
  locales: Record<LangCode, CompactLocaleSpec>;
}): WorkflowModule {
  const translations = {} as Record<LangCode, LocalizedModuleContent>;
  (Object.keys(config.locales) as LangCode[]).forEach((lang) => {
    const spec = config.locales[lang];
    const steps: WorkflowStepContent[] = spec.steps.map(([label, detail]) => ({label, detail}));
    const promptFields: PromptFieldDef[] = spec.fields.map((f) => ({
      key: f.key,
      label: f.label,
      placeholder: f.placeholder,
      defaultValue: f.defaultValue,
      multiline: f.multiline,
    }));
    translations[lang] = {
      title: spec.title,
      summary: spec.summary,
      risk: spec.risk,
      steps,
      promptFields,
      promptTemplate: spec.promptTemplate,
    };
  });

  return {
    id: config.id,
    index: config.index,
    slug: config.slug,
    category: config.category,
    difficulty: config.difficulty,
    minutes: config.minutes,
    flowPattern: config.flowPattern,
    translations,
  };
}

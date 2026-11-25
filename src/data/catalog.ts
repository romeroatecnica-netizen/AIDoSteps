import type {CategoryId, WorkflowModule} from '../types/workflow';
import {CREATIVITY_MODULES} from './modules-creativity';
import {PLANNING_MODULES} from './modules-planning';
import {SPREADSHEETS_MODULES} from './modules-spreadsheets';
import {STUDYING_MODULES} from './modules-studying';
import {WORK_MODULES} from './modules-work';
import {WRITING_MODULES} from './modules-writing';

export const CATEGORY_ORDER: CategoryId[] = [
  'writing',
  'studying',
  'planning',
  'work',
  'creativity',
  'spreadsheets',
];

export const ALL_WORKFLOW_MODULES: WorkflowModule[] = [
  ...WRITING_MODULES,
  ...STUDYING_MODULES,
  ...PLANNING_MODULES,
  ...WORK_MODULES,
  ...CREATIVITY_MODULES,
  ...SPREADSHEETS_MODULES,
];

export function getModuleBySlug(slug: string | null | undefined): WorkflowModule | undefined {
  if (!slug) return undefined;
  return ALL_WORKFLOW_MODULES.find((m) => m.slug === slug);
}

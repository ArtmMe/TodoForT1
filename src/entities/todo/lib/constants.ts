import type { Category, Status, Priority } from '../model/types'

export const CATEGORIES: Category[] = ['Bug', 'Documentation', 'Feature', 'Refactor', 'Test']
export const STATUSES: Status[] = ['To Do', 'In Progress', 'Done']
export const PRIORITIES: Priority[] = ['Low', 'Medium', 'High']

export const DEFAULT_CATEGORY: Category = 'Bug'
export const DEFAULT_STATUS: Status = 'To Do'
export const DEFAULT_PRIORITY: Priority = 'Low'

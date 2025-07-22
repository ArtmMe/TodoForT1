import { createContext } from 'react'
import type { Category, Priority, Status } from '../TodoContext/TodoContext'

export type FilterType = 'category' | 'status' | 'priority'
export interface Filters {
  category: Category | null
  status: Status | null
  priority: Priority | null
}
export interface IFilterContext {
  filters: Filters
  updateFilter: <K extends FilterType>(filterType: K, value: Filters[K]) => void
}

export const FilterContext = createContext<IFilterContext | null>(null)

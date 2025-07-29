import { useState, type FC, type ReactNode } from 'react'
import { FilterContext, type Filters, type FilterType } from './FilterContext'

export const FilterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState<Filters>({
    category: null,
    status: null,
    priority: null,
  })

  const updateFilter = <K extends FilterType>(filterType: K, value: Filters[K]) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value,
    }))
  }

  return (
    <FilterContext.Provider value={{ filters, updateFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

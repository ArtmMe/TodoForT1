import { Select } from '@mantine/core'
import { CATEGORIES, STATUSES, PRIORITIES, type Category, type Status, type Priority } from '@/entities/todo'
import { useFilters } from '../model/useFilters'

export const CategoryFilter = () => {
  const { updateFilter } = useFilters()

  return (
    <Select
      clearable
      data={CATEGORIES}
      onChange={value => updateFilter('category', value as Category)}
      placeholder="Категория"
    />
  )
}

export const StatusFilter = () => {
  const { updateFilter } = useFilters()

  return (
    <Select
      clearable
      data={STATUSES}
      onChange={value => updateFilter('status', value as Status)}
      placeholder="Статус"
    />
  )
}

export const PriorityFilter = () => {
  const { updateFilter } = useFilters()

  return (
    <Select
      clearable
      data={PRIORITIES}
      onChange={value => updateFilter('priority', value as Priority)}
      placeholder="Приоритет"
    />
  )
}

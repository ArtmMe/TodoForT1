import type { Todo } from '@/entities/todo'
import type { Filters } from '../model/FilterContext'

export const applyTodoFilters = (todos: Todo[], filters: Filters): Todo[] => {
  return todos.filter(todo =>
    (!filters.category || todo.category === filters.category)
    && (!filters.status || todo.status === filters.status)
    && (!filters.priority || todo.priority === filters.priority),
  )
}

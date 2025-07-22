import { useContext } from 'react'
import { TodoContext, type ITodoContext, type Todo } from '../context/TodoContext/TodoContext'
import { Grid } from '@mantine/core'
import { TaskItem } from './TaskItem'
import { useTaskModal } from '../hooks/useTaskModal'
import { FilterContext, type IFilterContext } from '../context/FilterContext/FilterContext'

export const TaskList = () => {
  useTaskModal()
  const { todos } = useContext(TodoContext) as ITodoContext
  const { filters } = useContext(FilterContext) as IFilterContext
  const applyFilters = (todos: Todo[]) => {
    return todos.filter(todo =>
      (!filters.category || todo.category === filters.category)
      && (!filters.status || todo.status === filters.status)
      && (!filters.priority || todo.priority === filters.priority),
    )
  }
  return (
    <Grid w="100%">
      {applyFilters(todos).map(todo => (
        <Grid.Col key={todo.id} span={{ base: 12, md: 6 }}>
          <TaskItem todo={todo} />
        </Grid.Col>
      ))}
    </Grid>
  )
}

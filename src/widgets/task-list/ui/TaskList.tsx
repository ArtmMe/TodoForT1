// src/widgets/task-list/ui/TaskList.tsx
import { Grid } from '@mantine/core'
import { TaskItem } from './TaskItem'
import { useTaskModalRouting } from '@/features/todo-modal'
import { useFilters, applyTodoFilters } from '@/features/todo-filters'
import { useTodoStore } from '@/entities/todo'

export const TaskList = () => {
  useTaskModalRouting()

  const todos = useTodoStore(state => state.todos)
  const { filters } = useFilters()

  const filteredTodos = applyTodoFilters(todos, filters)

  return (
    <Grid w="100%">
      {filteredTodos.map(todo => (
        <Grid.Col key={todo.id} span={{ base: 12, md: 6 }}>
          <TaskItem todo={todo} />
        </Grid.Col>
      ))}
    </Grid>
  )
}

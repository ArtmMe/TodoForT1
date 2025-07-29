import { useNavigate } from '@tanstack/react-router'
import { TodoCard } from '@/entities/todo'
import { useDeleteTodoWithNotification } from '@/features/todo-restore/'
import type { Todo } from '@/entities/todo'

interface TaskItemProps {
  todo: Todo
}

export const TaskItem = ({ todo }: TaskItemProps) => {
  const navigate = useNavigate()
  const { handleDelete } = useDeleteTodoWithNotification()

  const handleEdit = () => {
    navigate({ to: '/task/$id', params: { id: todo.id } })
  }

  return (
    <TodoCard
      onDelete={() => handleDelete(todo.id)}
      onEdit={handleEdit}
      todo={todo}
    />
  )
}

// src/features/todo-delete/model/useDeleteTodoWithNotification.ts
import { useMutation } from '@tanstack/react-query'
import { notifications } from '@mantine/notifications'
import { Button } from '@mantine/core'
import { useDeleteTodo, useRestoreTodo } from './hooks'
import { deleteTask, restoreTask } from '../api/todoRestore'

export const useDeleteTodoWithNotification = () => {
  const deleteTodo = useDeleteTodo()
  const restoreTodo = useRestoreTodo()

  const { mutate: deleteOnServer } = useMutation({
    mutationFn: deleteTask,
  })

  const { mutate: restoreOnServer } = useMutation({
    mutationFn: restoreTask,
  })

  const handleDelete = (todoId: string) => {
    deleteTodo(todoId)
    deleteOnServer(todoId)

    notifications.clean()
    notifications.show({
      title: 'Задача была удалена',
      message: (
        <Button
          onClick={() => {
            restoreTodo()
            notifications.clean()
            restoreOnServer(todoId)
          }}
        >
          Отмена
        </Button>
      ),
      autoClose: 5000,
    })
  }

  return { handleDelete }
}

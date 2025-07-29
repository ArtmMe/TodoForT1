// src/features/todo-modal/ui/TodoModal.tsx
import { Modal } from '@mantine/core'
import { TodoForm } from '@/features/todo-form'
import { useTodoModal } from '../model/useTodoModal'
import { useParams } from '@tanstack/react-router'

export const TodoModal = () => {
  const { opened, closeWithNavigate } = useTodoModal()
  const { id } = useParams({ strict: false })

  return (
    <Modal
      onClose={closeWithNavigate}
      opened={opened}
      size="auto"
      title={id ? 'Изменить задачу' : 'Добавить задачу'}
    >
      <TodoForm />
    </Modal>
  )
}

import { useMutation } from '@tanstack/react-query'
import { useTodoStore, createTodo, updateTodo, type Todo } from '@/entities/todo'
import { useTodoModal } from '@/features/todo-modal'
import { useParams } from '@tanstack/react-router'

export const useTodoForm = () => {
  const { id } = useParams({ strict: false })
  const currentTodo = useTodoStore(state => state.currentTodo)
  const addTodo = useTodoStore(state => state.addTodo)
  const updateTodoInStore = useTodoStore(state => state.updateTodo)
  const { closeWithNavigate } = useTodoModal()

  const { mutateAsync: addTask, isPending: isAdding } = useMutation({
    mutationFn: createTodo,
  })

  const { mutateAsync: editTask, isPending: isEditing } = useMutation({
    mutationFn: updateTodo,
  })

  const handleClose = () => {
    closeWithNavigate()
  }

  const handleSubmit = async (formData: Omit<Todo, 'id'>) => {
    const todo: Todo = {
      id: currentTodo?.id || Math.random().toString(36).substring(2, 8),
      ...formData,
    }

    if (id && currentTodo) {
      await editTask(todo)
      updateTodoInStore(todo)
    }
    else {
      const result = await addTask(todo)
      addTodo(result)
    }

    handleClose()
  }

  return {
    currentTodo,
    isLoading: isAdding || isEditing,
    handleSubmit,
    handleClose,
  }
}

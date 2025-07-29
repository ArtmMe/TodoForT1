import { useContext } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { useTodoStore } from '@/entities/todo'
import { ModalContext } from '@/shared/lib/modal/ModalContext'

export const useTodoModal = () => {
  const modalContext = useContext(ModalContext)
  const navigate = useNavigate()
  const saveCurrentTodo = useTodoStore(state => state.saveCurrentTodo)

  if (!modalContext) {
    throw new Error('useTodoModal must be used within ModalProvider')
  }

  const closeWithNavigate = () => {
    modalContext.close()
    navigate({ to: '/' })
    saveCurrentTodo(null)
  }

  return {
    ...modalContext,
    closeWithNavigate,
  }
}

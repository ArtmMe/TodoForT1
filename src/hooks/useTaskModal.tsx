import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ModalContext, type IModalContext } from '../context/ModalContext/ModalContext'
import { TodoContext, type ITodoContext } from '../context/TodoContext/TodoContext'

export const useTaskModal = () => {
  const { id } = useParams()
  const { open } = useContext(ModalContext) as IModalContext
  const { saveCurrentTodo } = useContext(TodoContext) as ITodoContext
  useEffect(() => {
    if (id) {
      saveCurrentTodo(id)
      open()
    }
  }, [id, open, saveCurrentTodo])
}

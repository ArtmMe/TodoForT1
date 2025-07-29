import { useEffect } from 'react'
import { useLocation, useParams } from '@tanstack/react-router'
import { useTodoStore } from '@/entities/todo'
import { useTodoModal } from './useTodoModal'

export const useTaskModalRouting = () => {
  const { id } = useParams({ strict: false })
  const pathname = useLocation({ select: location => location.pathname })
  const { open } = useTodoModal()
  const selectTodo = useTodoStore(state => state.saveCurrentTodo)
  const todos = useTodoStore(state => state.todos)

  useEffect(() => {
    if (id) {
      const todo = todos.find(t => t.id.toString() === id)
      if (todo) {
        console.log('Снова открыли modal')
        selectTodo(todo)
        open()
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, open, selectTodo])

  useEffect(() => {
    if (pathname === '/task/new') {
      selectTodo(null)
      open()
    }
  }, [pathname, open, selectTodo])
}

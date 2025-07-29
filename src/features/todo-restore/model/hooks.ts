import { useTodoStore } from '@/entities/todo'
import { useTodoRestoreStore } from './store'

export const useDeleteTodo = () => {
  const { todos, removeTodo } = useTodoStore()
  const setDeletedTodo = useTodoRestoreStore(state => state.setDeletedTodo)

  return (todoId: string) => {
    const todoIndex = todos.findIndex(todo => todo.id === todoId)
    if (todoIndex >= 0) {
      const todo = todos[todoIndex]
      setDeletedTodo({ ...todo, index: todoIndex })
      console.log('Зафиксировали удаленную задачу')
      removeTodo(todoId)

      setTimeout(() => {
        setDeletedTodo(null)
      }, 5000)
    }
  }
}
export const useRestoreTodo = () => {
  const setTodos = useTodoStore(state => state.setTodos)
  const setDeletedTodo = useTodoRestoreStore(state => state.setDeletedTodo)

  return () => {
    const todos = useTodoStore.getState().todos
    const deletedTodo = useTodoRestoreStore.getState().deletedTodo
    if (deletedTodo) {
      console.log('Вернули задачу')
      const restoredTodos = [...todos]
      restoredTodos.splice(deletedTodo.index, 0, deletedTodo)
      setTodos(restoredTodos)
      setDeletedTodo(null)
    }
  }
}

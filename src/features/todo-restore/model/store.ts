import type { Todo } from '@/entities/todo'
import { create } from 'zustand'

interface DeletedTodo extends Todo {
  index: number
}

interface TodoRestoreStore {
  deletedTodo: DeletedTodo | null
  setDeletedTodo: (todo: DeletedTodo | null) => void
}
export const useTodoRestoreStore = create<TodoRestoreStore>(set => ({
  deletedTodo: null,
  setDeletedTodo: todo => set({ deletedTodo: todo }),
}))

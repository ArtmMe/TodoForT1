import { createContext } from 'react'

export type Category = 'Bug' | 'Feature' | 'Documentation' | 'Refactor' | 'Test'
export type Status = 'To Do' | 'In Progress' | 'Done'
export type Priority = 'Low' | 'Medium' | 'High'

export interface Todo {
  id: string
  title: string
  description?: string
  category: Category
  status: Status
  priority: Priority
}

export interface ITodoContext {
  todos: Todo[]
  saveTodo: (todo: Todo) => void
  editTodo: (todoToEdit: Todo) => void
  currentTodo: Todo | null
  saveCurrentTodo: (todoID: string) => void
  resetCurrentTodo: () => void
  deleteTodo: (todoID: string) => void
  restoreTodo: () => void
}

export const TodoContext = createContext<ITodoContext | null>(null)

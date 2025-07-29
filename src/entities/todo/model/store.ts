import type { Todo } from './types'
import { create } from 'zustand'

interface TodoStore {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
  addTodo: (todo: Todo) => void
  updateTodo: (todo: Todo) => void
  removeTodo: (todoId: string) => void
  currentTodo: Todo | null
  saveCurrentTodo: (todo: Todo | null) => void
}

export const useTodoStore = create<TodoStore>(set => ({
  todos: [],
  setTodos: todos => set({ todos }),
  addTodo: todo => set(state => ({ todos: [...state.todos, todo] })),
  updateTodo: todo => set(state => ({
    todos: state.todos.map(t => t.id === todo.id ? todo : t),
  })),
  removeTodo: todoId => set(state => ({
    todos: state.todos.filter(todo => todo.id !== todoId),
  })),
  currentTodo: null,
  saveCurrentTodo: (todo: Todo | null) => set({ currentTodo: todo }),
}))

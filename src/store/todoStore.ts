// import type { Todo } from '@/entities/todo'
// import { create } from 'zustand'

// interface TodoStore {
//   todos: Todo[]
//   currentTodo: Todo | null
//   saveCurrentTodo: (todoID: string) => void
//   resetCurrentTodo: () => void
//   setTodos: (arg: Todo[]) => void
//   addTodo: (arg: Todo) => void
//   editTodo: (arg: Todo) => void
//   deleteTodo: (todoID: string) => void
//   restoreTodo: () => void
// }

// export const useTodoStore = create<TodoStore>(set => ({
//   todos: [],
//   currentTodo: null,
//   saveCurrentTodo: (todoID: string) => set((state) => {
//     const getTodoByID = (todoID: string): Todo | null => {
//       return state.todos.find(todo => todo.id.toString() === todoID) || null
//     }
//     const todo = getTodoByID(todoID)
//     return {
//       currentTodo: todo,
//     }
//   }),
//   resetCurrentTodo: () => set({ currentTodo: null }),
//   setTodos: (arg: Todo[]) => set({ todos: arg }),
//   addTodo: (arg: Todo) => set(state => ({ todos: [...state.todos, arg] })),
//   editTodo: (arg: Todo) => set((state) => {
//     const updatedTodos = state.todos.map(todo =>
//       todo.id === arg.id ? arg : todo,
//     )
//     console.log(updatedTodos)
//     return { todos: [...updatedTodos] }
//   }),
//   deleteTodo: (todoID: string) => set((state) => {
//     const todoIndex = state.todos.findIndex(todo => todo.id === todoID)
//     if (todoIndex >= 0) {
//       sessionStorage.setItem('deletedTodo', JSON.stringify({ ...state.todos[todoIndex], index: todoIndex }))
//       setTimeout(() => {
//         sessionStorage.removeItem('deletedTodo')
//       }, 5000)
//     }
//     return { todos: state.todos.filter(todo => todo.id !== todoID) }
//   }),
//   restoreTodo: () => set((state) => {
//     const todoString = sessionStorage.getItem('deletedTodo')
//     if (todoString) {
//       const todo: Todo & { index: number } = JSON.parse(todoString)
//       const restoredTodos = [...state.todos]
//       restoredTodos.splice(todo.index, 0, todo)
//       console.log(restoredTodos)
//       return { todos: restoredTodos }
//     }
//     return {}
//   }),
// }))

import type { Todo } from '../model/types'
import { apiFetch } from '@/shared/api'

export async function fetchTodos() {
  try {
    return await apiFetch<Todo[]>('/todo', { method: 'GET' })
  }
  catch {
    return []
  }
}

export async function createTodo(todo: Todo) {
  return apiFetch<Todo>('/todo', {
    method: 'POST',
    body: JSON.stringify({ ...todo }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export async function updateTodo(todo: Todo) {
  return apiFetch(`/todo/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify({ ...todo }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

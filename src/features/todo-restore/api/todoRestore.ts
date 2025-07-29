import { apiFetch } from '@/shared/api'

export async function deleteTask(todoID: string) {
  return apiFetch(`/todo/${todoID}`, {
    method: 'DELETE',
  })
}
export async function restoreTask(todoID: string) {
  return apiFetch(`/todo/${todoID}`, {
    method: 'POST',
  })
}

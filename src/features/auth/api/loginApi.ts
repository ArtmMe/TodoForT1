import { apiFetch } from '@/shared/api'

export async function loginApi(login: string) {
  return apiFetch('/user', {
    method: 'POST',
    body: JSON.stringify({ login }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

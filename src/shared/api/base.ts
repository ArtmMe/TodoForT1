const API_URL = import.meta.env.VITE_BACKEND_URL

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const { ...fetchOptions } = options

  const response = await fetch(`${API_URL}${endpoint}`, {
    credentials: 'include',
    ...fetchOptions,
  })

  if (!response.ok) {
    const errData = await response.json().catch(() => ({
      message: 'Неизвестная ошибка',
    }))
    throw new Error(errData.message)
  }

  return response.json()
}

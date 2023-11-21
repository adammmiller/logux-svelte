export async function signIn({
  name,
  password
}: {
  name: string
  password: string
}): Promise<Response> {
  return await fetch('/api/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, password })
  })
}

export async function logout(): Promise<Response> {
  return await fetch('/api/auth', {
    method: 'DELETE'
  })
}

export const subprotocol = '1.0.0'

export type User = {
  id: string
  name: string
  password: string
}

export type Task = {
  text: string
  completed: boolean
  authorId?: string
}

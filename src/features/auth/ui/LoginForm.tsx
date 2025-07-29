import { Button, Flex, TextInput, Title } from '@mantine/core'
import { useLoginMutation } from '../model/useLoginMutation'
import type { FormEvent } from 'react'

export const LoginForm = () => {
  const { mutate, isPending } = useLoginMutation()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const login = formData.get('login') as string
    mutate(login)
  }
  return (
    <Flex h="100vh" justify="center" w="100vw">
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap="md" mt="20vh">
          <Title>Сначала нужно войти</Title>
          <TextInput name="login" placeholder="Логин" required />
          <Button color="green" loading={isPending} type="submit">Войти</Button>
        </Flex>
      </form>
    </Flex>
  )
}

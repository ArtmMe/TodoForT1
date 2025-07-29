import { Flex, Loader, Paper } from '@mantine/core'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { TodoControls } from '@/widgets/todo-controls'
import { fetchTodos } from '@/entities/todo'
import { useTodoStore } from '@/entities/todo'
import { useEffect } from 'react'

const RouteComponent = () => {
  const loaderTodos = Route.useLoaderData()
  const todos = useTodoStore(state => state.todos)
  const setTodos = useTodoStore(state => state.setTodos)
  useEffect(() => {
    if (todos.length <= 0) {
      setTodos(loaderTodos)
    }
  }, [loaderTodos, setTodos, todos.length])
  return (
    <Flex h="100vh" justify="center" pb="md" pt="md" w="100vw">
      <Paper bdrs="md" h="100%" p="sm" shadow="md" w={{ base: '100vw', sm: '60vw' }}>
        <Flex align="center" direction="column" h="100%" w="100%">
          <TodoControls />
          <Outlet />
        </Flex>
      </Paper>
    </Flex>

  )
}

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
  loader: () => fetchTodos(),
  shouldReload: false,
  pendingComponent: () => (
    <Flex align="center" h="100vh" justify="center" w="100vw">
      <Loader type="bars" />
    </Flex>
  ),
})

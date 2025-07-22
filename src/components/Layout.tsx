import { Flex, MantineProvider, Paper } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { TodoProvider } from '../context/TodoContext/TodoProvider'
import { Controls } from './Controls'
import { ModalProvider } from '../context/ModalContext/ModalProvider'
import { Notifications } from '@mantine/notifications'
import { FilterProvider } from '../context/FilterContext/FilterProvider'

export const Layout = () => {
  return (
    <MantineProvider>
      <Notifications />
      <Flex h="100vh" justify="center" pb="md" pt="md" w="100vw">
        <Paper bdrs="md" h="100%" p="sm" shadow="md" w={{ base: '100vw', sm: '60vw' }}>
          <Flex align="center" direction="column" h="100%" w="100%">
            <TodoProvider>
              <ModalProvider>
                <FilterProvider>
                  <Controls />
                  <Outlet />
                </FilterProvider>
              </ModalProvider>
            </TodoProvider>
          </Flex>
        </Paper>
      </Flex>
    </MantineProvider>
  )
}

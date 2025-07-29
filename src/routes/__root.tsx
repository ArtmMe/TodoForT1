import { Notifications } from '@mantine/notifications'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { ModalProvider } from '@/shared/lib/modal/ModalProvider'
import { FilterProvider } from '@/features/todo-filters'
const RootComponent = () => {
  return (
    <>
      <Notifications />
      <ModalProvider>
        <FilterProvider>
          <Outlet />
        </FilterProvider>
      </ModalProvider>
    </>

  )
}

export const Route = createRootRoute({
  component: RootComponent,
})

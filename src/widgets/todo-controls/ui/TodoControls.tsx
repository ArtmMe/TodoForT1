// src/widgets/todo-controls/ui/TodoControls.tsx
import { Button, Flex } from '@mantine/core'
import { useNavigate } from '@tanstack/react-router'
import { CategoryFilter, StatusFilter, PriorityFilter } from '@/features/todo-filters'
import { TodoModal } from '@/features/todo-modal'

export const TodoControls = () => {
  const navigate = useNavigate()

  return (
    <>
      <Flex justify="space-between" mb="md" w="100%">
        <Button
          color="green"
          onClick={() => navigate({ to: '/task/new' })}
        >
          Добавить
        </Button>

        <Flex gap="md" w="70%">
          <CategoryFilter />
          <StatusFilter />
          <PriorityFilter />
        </Flex>
      </Flex>

      <TodoModal />
    </>
  )
}

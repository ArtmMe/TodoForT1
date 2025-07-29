// src/entities/todo/ui/TodoCard.tsx
import { ActionIcon, Flex, Text, Title } from '@mantine/core'
import { Link } from '@tanstack/react-router'
import { MdDelete, MdEdit } from 'react-icons/md'
import type { Todo } from '../model/types'
import { CategoryBadge } from './CategoryBadge'
import { StatusBadge } from './StatusBadge'
import { PriorityBadge } from './PriorityBadge'

interface TodoCardProps {
  todo: Todo
  onEdit?: () => void
  onDelete?: () => void
}

export const TodoCard = ({ todo, onEdit, onDelete }: TodoCardProps) => {
  return (
    <Flex p="sm" style={{ boxShadow: '0px 0px 10px 2px rgba(34, 60, 80, 0.1)' }} w="100%">
      <Flex direction="column" ml="md" w="85%">
        <Flex align="center" justify="space-between" w="100%">
          <Link
            params={{ id: todo.id }}
            style={{ textDecoration: 'none', color: 'inherit', minWidth: 0, flex: 1 }}
            to="/task/$id"
          >
            <Flex direction="column">
              <Title lineClamp={1} order={2}>{todo.title}</Title>
              {todo.description
                ? (
                    <Text c="dimmed" pr="md" truncate="end">{todo.description}</Text>
                  )
                : (
                    <Text>&shy;</Text>
                  )}
            </Flex>
          </Link>
          <Flex gap="sm">
            {onEdit
              ? (
                  <ActionIcon onClick={onEdit}>
                    <MdEdit color="white" size="16" />
                  </ActionIcon>
                )
              : null}
            {onDelete
              ? (
                  <ActionIcon onClick={onDelete}>
                    <MdDelete color="white" size="16" />
                  </ActionIcon>
                )
              : null}
          </Flex>
        </Flex>
        <Flex gap="md">
          <CategoryBadge category={todo.category} />
          <StatusBadge status={todo.status} />
          <PriorityBadge priority={todo.priority} />
        </Flex>
      </Flex>
    </Flex>
  )
}

import { ActionIcon, Badge, Button, Flex, Text, Title } from '@mantine/core'
import { TodoContext, type ITodoContext, type Todo } from '../context/TodoContext/TodoContext'
import { getPriorityColor, getStatusColor } from '../helpers'
import { MdDelete, MdEdit } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { notifications } from '@mantine/notifications'
interface TaskItemProps {
  todo: Todo
}
export const TaskItem = ({ todo }: TaskItemProps) => {
  const navigate = useNavigate()
  const { deleteTodo, restoreTodo } = useContext(TodoContext) as ITodoContext
  const handleDelete = () => {
    deleteTodo(todo.id)
    notifications.clean()
    notifications.show({
      title: 'Задача была удалена',
      message: <Button onClick={() => { restoreTodo(); notifications.clean() }}>Отмена</Button>,
      autoClose: 5000,
    })
  }
  return (
    <Flex p="sm" style={{ boxShadow: '0px 0px 10px 2px rgba(34, 60, 80, 0.1)' }} w="100%">
      <Flex direction="column" ml="md" w="85%">
        <Flex align="center" justify="space-between" w="100%">
          <Link style={{ textDecoration: 'none', color: 'inherit', minWidth: 0, flex: 1 }} to={`/task/${todo.id}`}>
            <Flex direction="column">
              <Title lineClamp={1} order={2}>{todo.title}</Title>
              {todo.description ? (<Text c="dimmed" pr="md" truncate="end">{todo.description}</Text>) : (<Text>&shy;</Text>) }
            </Flex>
          </Link>
          <Flex gap="sm">
            <ActionIcon onClick={() => navigate(`/task/${todo.id}`)}>
              <MdEdit color="white" size="16" />
            </ActionIcon>
            <ActionIcon onClick={handleDelete}>
              <MdDelete color="white" size="16" />
            </ActionIcon>
          </Flex>

        </Flex>
        <Flex gap="md">
          <Badge color="blue" radius="sm">{todo.category}</Badge>
          <Badge color={getStatusColor(todo.status)} radius="sm">{todo.status}</Badge>
          <Badge color={getPriorityColor(todo.priority)} radius="sm">{todo.priority}</Badge>
        </Flex>
      </Flex>
    </Flex>
  )
}

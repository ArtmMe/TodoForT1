import { Button, Flex, Select, Textarea, TextInput } from '@mantine/core'
import { TodoContext, type Category, type ITodoContext, type Priority, type Status, type Todo } from '../context/TodoContext/TodoContext'
import { useContext, type FormEvent } from 'react'
import { ModalContext, type IModalContext } from '../context/ModalContext/ModalContext'
import { useParams } from 'react-router-dom'

export const TaskDetails = () => {
  const { saveTodo, currentTodo, editTodo } = useContext(TodoContext) as ITodoContext
  const { close, closeWithNavigate } = useContext(ModalContext) as IModalContext
  const { id } = useParams()
  const handleClose = () => {
    if (id) {
      closeWithNavigate()
    }
    else {
      close()
    }
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const randomId = Math.random().toString(36).substring(2, 8)
    const newTodo: Todo = {
      id: (id && currentTodo) ? currentTodo.id : randomId,
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      status: formData.get('status') as Status,
      category: formData.get('category') as Category,
      priority: formData.get('priority') as Priority,
    }
    if (id && currentTodo) {
      editTodo(newTodo)
    }
    else {
      saveTodo(newTodo)
    }
    handleClose()
  }
  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap="md">
        <TextInput defaultValue={currentTodo?.title} label="Заголовок" name="title" required />
        <Textarea defaultValue={currentTodo?.description} label="Описание задачи" name="description" />
        <Flex gap="md">
          <Select allowDeselect={false} data={['Bug', 'Documentation', 'Feature', 'Refactor', 'Test'] as Array<Category>} defaultValue={currentTodo?.category || 'Bug'} label="Категория" name="category" required />
          <Select allowDeselect={false} data={['Done', 'In Progress', 'To Do'] as Array<Status>} defaultValue={currentTodo?.status || 'Done'} label="Статус" name="status" required />
          <Select allowDeselect={false} data={['Low', 'Medium', 'High'] as Array<Priority>} defaultValue={currentTodo?.priority || 'Low'} label="Приоритет" name="priority" required />
        </Flex>
        <Flex gap="md">
          <Button color={currentTodo ? 'blue' : 'green'} flex="1" type="submit">{currentTodo ? 'Сохранить' : 'Добавить'}</Button>
          <Button color="red" flex="1" onClick={handleClose} type="button">Отмена</Button>
        </Flex>
      </Flex>
    </form>
  )
}

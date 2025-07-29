// src/features/todo-form/ui/TodoForm.tsx
import { Button, Flex, Select, Textarea, TextInput } from '@mantine/core'
import { type FormEvent } from 'react'
import { CATEGORIES, STATUSES, PRIORITIES, DEFAULT_CATEGORY, DEFAULT_STATUS, DEFAULT_PRIORITY } from '@/entities/todo'
import { useTodoForm } from '../model/useTodoForm'
import type { Category, Priority, Status } from '@/entities/todo'

export const TodoForm = () => {
  const { currentTodo, isLoading, handleSubmit, handleClose } = useTodoForm()

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    await handleSubmit({
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      status: formData.get('status') as Status,
      category: formData.get('category') as Category,
      priority: formData.get('priority') as Priority,
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="md">
        <TextInput
          defaultValue={currentTodo?.title}
          label="Заголовок"
          name="title"
          required
        />
        <Textarea
          defaultValue={currentTodo?.description}
          label="Описание задачи"
          name="description"
        />
        <Flex gap="md">
          <Select
            allowDeselect={false}
            data={CATEGORIES}
            defaultValue={currentTodo?.category || DEFAULT_CATEGORY}
            label="Категория"
            name="category"
            required
          />
          <Select
            allowDeselect={false}
            data={STATUSES}
            defaultValue={currentTodo?.status || DEFAULT_STATUS}
            label="Статус"
            name="status"
            required
          />
          <Select
            allowDeselect={false}
            data={PRIORITIES}
            defaultValue={currentTodo?.priority || DEFAULT_PRIORITY}
            label="Приоритет"
            name="priority"
            required
          />
        </Flex>
        <Flex gap="md">
          <Button
            color={currentTodo ? 'blue' : 'green'}
            flex="1"
            loading={isLoading}
            type="submit"
          >
            {currentTodo ? 'Сохранить' : 'Добавить'}
          </Button>
          <Button
            color="red"
            flex="1"
            onClick={handleClose}
            type="button"
          >
            Отмена
          </Button>
        </Flex>
      </Flex>
    </form>
  )
}

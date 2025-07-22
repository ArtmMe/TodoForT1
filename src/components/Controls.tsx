import { Button, Flex, Modal, Select } from '@mantine/core'
import { type Category, type Priority, type Status } from '../context/TodoContext/TodoContext'
import { TaskDetails } from './TaskDetails'
import { useContext } from 'react'
import { ModalContext, type IModalContext } from '../context/ModalContext/ModalContext'
import { useParams } from 'react-router-dom'
import { FilterContext, type IFilterContext } from '../context/FilterContext/FilterContext'

export const Controls = () => {
  const { opened, open, close, closeWithNavigate } = useContext(ModalContext) as IModalContext
  const { updateFilter } = useContext(FilterContext) as IFilterContext

  const { id } = useParams()

  const handleClose = () => {
    if (id) {
      closeWithNavigate()
    }
    else {
      close()
    }
  }
  return (
    <Flex justify="space-between" mb="md" w="100%">
      <Button color="green" onClick={open}>Добавить</Button>
      <Flex gap="md" w="70%">
        <Select clearable data={['Bug', 'Documentation', 'Feature', 'Refactor', 'Test'] as Array<Category>} onChange={value => updateFilter('category', value as Category)} placeholder="Категория" />
        <Select clearable data={['Done', 'In Progress', 'To Do'] as Array<Status>} onChange={value => updateFilter('status', value as Status)} placeholder="Статус" />
        <Select clearable data={['Low', 'Medium', 'High'] as Array<Priority>} onChange={value => updateFilter('priority', value as Priority)} placeholder="Приоритет" />
      </Flex>
      <Modal onClose={handleClose} opened={opened} size="auto" title={id ? 'Изменить задачу' : 'Добавить задачу'}>
        <TaskDetails />
      </Modal>
    </Flex>
  )
}

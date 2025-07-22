import { useDisclosure } from '@mantine/hooks'
import { useContext, type FC, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { TodoContext, type ITodoContext } from '../TodoContext/TodoContext'
import { ModalContext } from './ModalContext'

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [opened, { open, close }] = useDisclosure(false)
  const navigate = useNavigate()
  const { resetCurrentTodo } = useContext(TodoContext) as ITodoContext
  const closeWithNavigate = () => {
    close()
    navigate('/')
    resetCurrentTodo()
  }
  return (
    <ModalContext.Provider value={{ opened, open, close, closeWithNavigate }}>{children}</ModalContext.Provider>
  )
}

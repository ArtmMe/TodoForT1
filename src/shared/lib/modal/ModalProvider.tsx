import { useDisclosure } from '@mantine/hooks'
import type { FC, ReactNode } from 'react'
import { ModalContext } from './ModalContext'

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <ModalContext.Provider value={{ opened, open, close }}>
      {children}
    </ModalContext.Provider>
  )
}

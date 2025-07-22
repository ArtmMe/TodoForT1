import { createContext } from 'react'

export interface IModalContext {
  opened: boolean
  open: () => void
  close: () => void
  closeWithNavigate: () => void
}

export const ModalContext = createContext<IModalContext | null>(null)

import { createFileRoute } from '@tanstack/react-router'
import { Login } from '../pages/LoginPage'

const RouteComponent = () => {
  return <Login />
}

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

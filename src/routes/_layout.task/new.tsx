import { createFileRoute } from '@tanstack/react-router'
import { TaskList } from '@/widgets/task-list'

const RouteComponent = () => {
  return <TaskList />
}

export const Route = createFileRoute('/_layout/task/new')({
  component: RouteComponent,
})

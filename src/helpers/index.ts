import type { Priority, Status } from '../context/TodoContext/TodoContext'

const statusColors: Record<Status, string> = {
  'To Do': 'gray',
  'In Progress': 'orange',
  'Done': 'green',
}
const priorityColors: Record<Priority, string> = {
  High: 'red',
  Medium: 'orange',
  Low: 'gray',
}
export function getStatusColor(todoStatus: Status): string {
  return statusColors[todoStatus]
}
export function getPriorityColor(todoPriority: Priority): string {
  return priorityColors[todoPriority]
}

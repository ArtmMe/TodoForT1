import { Badge } from '@mantine/core'
import type { Priority } from '../model/types'
import { getPriorityColor } from '../lib/helpers'

export const PriorityBadge = ({ priority }: { priority: Priority }) => {
  return <Badge color={getPriorityColor(priority)} radius="sm">{priority}</Badge>
}

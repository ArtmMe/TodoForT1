import { Badge } from '@mantine/core'
import type { Status } from '../model/types'
import { getStatusColor } from '../lib/helpers'

export const StatusBadge = ({ status }: { status: Status }) => {
  return <Badge color={getStatusColor(status)} radius="sm">{status}</Badge>
}

import { Badge } from '@mantine/core'
import type { Category } from '../model/types'

export const CategoryBadge = ({ category }: { category: Category }) => {
  return <Badge color="blue" radius="sm">{category}</Badge>
}

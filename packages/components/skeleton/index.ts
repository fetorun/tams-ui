import { withInstall, withNoopInstall } from '@tams-ui/utils'

import Skeleton from './src/skeleton.vue'
import SkeletonItem from './src/skeleton-item.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElSkeleton: SFCWithInstall<typeof Skeleton> & {
  SkeletonItem: typeof SkeletonItem
} = withInstall(Skeleton, {
  SkeletonItem,
})
export const ElSkeletonItem: SFCWithInstall<typeof SkeletonItem> =
  withNoopInstall(SkeletonItem)
export default ElSkeleton

export * from './src/skeleton'
export * from './src/skeleton-item'

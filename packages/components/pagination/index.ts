import { withInstall } from '@tams-ui/utils'

import Pagination from './src/pagination'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElPagination: SFCWithInstall<typeof Pagination> =
  withInstall(Pagination)
export default ElPagination

export * from './src/pagination'
export * from './src/constants'

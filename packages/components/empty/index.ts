import { withInstall } from '@tams-ui/utils'

import Empty from './src/empty.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElEmpty: SFCWithInstall<typeof Empty> = withInstall(Empty)
export default ElEmpty

export * from './src/empty'
export type { EmptyInstance } from './src/instance'

import { withInstall } from '@tams-ui/utils'

import Divider from './src/divider.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElDivider: SFCWithInstall<typeof Divider> = withInstall(Divider)
export default ElDivider

export * from './src/divider'

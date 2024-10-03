import { withInstall } from '@tams-ui/utils'

import Rate from './src/rate.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElRate: SFCWithInstall<typeof Rate> = withInstall(Rate)
export default ElRate

export * from './src/rate'

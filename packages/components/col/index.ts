import { withInstall } from '@tams-ui/utils'

import Col from './src/col.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElCol: SFCWithInstall<typeof Col> = withInstall(Col)
export default ElCol

export * from './src/col'

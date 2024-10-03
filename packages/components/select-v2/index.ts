import { withInstall } from '@tams-ui/utils'
import Select from './src/select.vue'

import type { SFCWithInstall } from '@tams-ui/utils'

export const ElSelectV2: SFCWithInstall<typeof Select> = withInstall(Select)
export default ElSelectV2

export * from './src/token'

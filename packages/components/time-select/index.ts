import { withInstall } from '@tams-ui/utils'
import TimeSelect from './src/time-select.vue'

import type { SFCWithInstall } from '@tams-ui/utils'

export const ElTimeSelect: SFCWithInstall<typeof TimeSelect> =
  withInstall(TimeSelect)
export default ElTimeSelect

export * from './src/time-select'

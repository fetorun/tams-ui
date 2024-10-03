import { withInstall } from '@tams-ui/utils'
import TooltipV2 from './src/tooltip.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElTooltipV2: SFCWithInstall<typeof TooltipV2> =
  withInstall(TooltipV2)
export * from './src/arrow'
export * from './src/content'
export * from './src/root'
export * from './src/tooltip'
export * from './src/trigger'
export * from './src/constants'

export default ElTooltipV2

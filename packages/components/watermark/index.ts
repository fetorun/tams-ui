import { withInstall } from '@tams-ui/utils'
import Watermark from './src/watermark.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElWatermark: SFCWithInstall<typeof Watermark> =
  withInstall(Watermark)
export default ElWatermark

export * from './src/watermark'

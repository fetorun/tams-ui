import { withInstall } from '@tams-ui/utils'

import Slider from './src/slider.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElSlider: SFCWithInstall<typeof Slider> = withInstall(Slider)
export default ElSlider

export * from './src/slider'
export * from './src/constants'

import { withInstall } from '@tams-ui/utils'

import Icon from './src/icon.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElIcon: SFCWithInstall<typeof Icon> = withInstall(Icon)
export default ElIcon

export * from './src/icon'

import { withInstall } from '@tams-ui/utils'
import Switch from './src/switch.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElSwitch: SFCWithInstall<typeof Switch> = withInstall(Switch)
export default ElSwitch

export * from './src/switch'

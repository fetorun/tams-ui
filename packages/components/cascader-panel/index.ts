import { withInstall } from '@tams-ui/utils'
import CascaderPanel from './src/index.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElCascaderPanel: SFCWithInstall<typeof CascaderPanel> =
  withInstall(CascaderPanel)

export default ElCascaderPanel
export * from './src/types'
export * from './src/config'
export * from './src/instance'

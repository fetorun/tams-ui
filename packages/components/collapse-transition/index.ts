import { withInstall } from '@tams-ui/utils'
import CollapseTransition from './src/collapse-transition.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElCollapseTransition: SFCWithInstall<typeof CollapseTransition> =
  withInstall(CollapseTransition)

export default ElCollapseTransition

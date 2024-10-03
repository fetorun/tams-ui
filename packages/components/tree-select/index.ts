import { withInstall } from '@tams-ui/utils'
import TreeSelect from './src/tree-select.vue'

import type { SFCWithInstall } from '@tams-ui/utils'

export const ElTreeSelect: SFCWithInstall<typeof TreeSelect> =
  withInstall(TreeSelect)

export default ElTreeSelect

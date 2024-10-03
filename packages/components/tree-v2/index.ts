import { withInstall } from '@tams-ui/utils'
import TreeV2 from './src/tree.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElTreeV2: SFCWithInstall<typeof TreeV2> = withInstall(TreeV2)
export default ElTreeV2

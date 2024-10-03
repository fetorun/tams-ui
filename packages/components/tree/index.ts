import { withInstall } from '@tams-ui/utils'
import Tree from './src/tree.vue'

import type { SFCWithInstall } from '@tams-ui/utils'

export const ElTree: SFCWithInstall<typeof Tree> = withInstall(Tree)

export default ElTree

export type { TreeInstance } from './src/instance'

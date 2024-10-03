import { withInstall } from '@tams-ui/utils'
import Affix from './src/affix.vue'
import type { SFCWithInstall } from '@tams-ui/utils'
export const ElAffix: SFCWithInstall<typeof Affix> = withInstall(Affix)
export default ElAffix

export * from './src/affix'

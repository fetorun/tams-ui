import { withInstall } from '@tams-ui/utils'

import Link from './src/link.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElLink: SFCWithInstall<typeof Link> = withInstall(Link)
export default ElLink

export * from './src/link'

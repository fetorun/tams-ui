import { withInstall } from '@tams-ui/utils'

import Tag from './src/tag.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElTag: SFCWithInstall<typeof Tag> = withInstall(Tag)
export default ElTag

export * from './src/tag'

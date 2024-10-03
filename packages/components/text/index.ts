import { withInstall } from '@tams-ui/utils'

import Text from './src/text.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElText: SFCWithInstall<typeof Text> = withInstall(Text)
export default ElText

export * from './src/text'

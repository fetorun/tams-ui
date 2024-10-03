import { withInstall } from '@tams-ui/utils'

import Card from './src/card.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElCard: SFCWithInstall<typeof Card> = withInstall(Card)
export default ElCard

export * from './src/card'
export type { CardInstance } from './src/instance'

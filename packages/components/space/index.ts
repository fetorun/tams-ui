import { withInstall } from '@tams-ui/utils'

import Space from './src/space'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElSpace: SFCWithInstall<typeof Space> = withInstall(Space)
export default ElSpace

export * from './src/space'
export * from './src/item'
export * from './src/use-space'

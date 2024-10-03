import { withInstall } from '@tams-ui/utils'
import Teleport from './src/teleport.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElTeleport: SFCWithInstall<typeof Teleport> = withInstall(Teleport)

export default ElTeleport

export * from './src/teleport'

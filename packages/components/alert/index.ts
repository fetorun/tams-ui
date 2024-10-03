import { withInstall } from '@tams-ui/utils'
import Alert from './src/alert.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElAlert: SFCWithInstall<typeof Alert> = withInstall(Alert)
export default ElAlert

export * from './src/alert'
export type { AlertInstance } from './src/instance'

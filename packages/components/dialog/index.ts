import { withInstall } from '@tams-ui/utils'
import Dialog from './src/dialog.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElDialog: SFCWithInstall<typeof Dialog> = withInstall(Dialog)
export default ElDialog

export * from './src/use-dialog'
export * from './src/dialog'
export * from './src/constants'

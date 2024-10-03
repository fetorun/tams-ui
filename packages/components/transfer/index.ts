import { withInstall } from '@tams-ui/utils'

import Transfer from './src/transfer.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElTransfer: SFCWithInstall<typeof Transfer> = withInstall(Transfer)
export default ElTransfer

export * from './src/transfer'

import { withInstall } from '@tams-ui/utils'
import Row from './src/row.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElRow: SFCWithInstall<typeof Row> = withInstall(Row)
export default ElRow

export * from './src/row'
export * from './src/constants'

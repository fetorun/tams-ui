import { withInstall } from '@tams-ui/utils'
import InputNumber from './src/input-number.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElInputNumber: SFCWithInstall<typeof InputNumber> =
  withInstall(InputNumber)

export default ElInputNumber
export * from './src/input-number'

import { withInstall } from '@tams-ui/utils'
import DatePicker from './src/date-picker'

import type { SFCWithInstall } from '@tams-ui/utils'

export const ElDatePicker: SFCWithInstall<typeof DatePicker> =
  withInstall(DatePicker)

export default ElDatePicker
export * from './src/constants'
export * from './src/props/date-picker'
export type { DatePickerInstance } from './src/instance'

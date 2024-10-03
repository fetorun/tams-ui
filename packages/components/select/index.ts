import { withInstall, withNoopInstall } from '@tams-ui/utils'

import Select from './src/select.vue'
import Option from './src/option.vue'
import OptionGroup from './src/option-group.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElSelect: SFCWithInstall<typeof Select> & {
  Option: typeof Option
  OptionGroup: typeof OptionGroup
} = withInstall(Select, {
  Option,
  OptionGroup,
})
export default ElSelect
export const ElOption: SFCWithInstall<typeof Option> = withNoopInstall(Option)
export const ElOptionGroup: SFCWithInstall<typeof OptionGroup> =
  withNoopInstall(OptionGroup)

export * from './src/token'

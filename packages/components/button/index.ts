import { withInstall, withNoopInstall } from '@tams-ui/utils'
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElButton: SFCWithInstall<typeof Button> & {
  ButtonGroup: typeof ButtonGroup
} = withInstall(Button, {
  ButtonGroup,
})
export const ElButtonGroup: SFCWithInstall<typeof ButtonGroup> =
  withNoopInstall(ButtonGroup)
export default ElButton

export * from './src/button'
export * from './src/constants'
export type { ButtonInstance, ButtonGroupInstance } from './src/instance'

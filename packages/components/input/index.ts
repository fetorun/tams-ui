import { withInstall } from '@tams-ui/utils'
import Input from './src/input.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElInput: SFCWithInstall<typeof Input> = withInstall(Input)
export default ElInput

export * from './src/input'
export type { InputInstance } from './src/instance'

import { withInstall } from '@tams-ui/utils'
import Backtop from './src/backtop.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElBacktop: SFCWithInstall<typeof Backtop> = withInstall(Backtop)
export default ElBacktop

export * from './src/backtop'
export type { BacktopInstance } from './src/instance'

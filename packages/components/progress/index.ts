import { withInstall } from '@tams-ui/utils'
import Progress from './src/progress.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElProgress: SFCWithInstall<typeof Progress> = withInstall(Progress)
export default ElProgress

export * from './src/progress'

import { withInstall } from '@tams-ui/utils'
import Result from './src/result.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElResult: SFCWithInstall<typeof Result> = withInstall(Result)

export default ElResult

export * from './src/result'

import { withInstall } from '@tams-ui/utils'

import ConfigProvider from './src/config-provider'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElConfigProvider: SFCWithInstall<typeof ConfigProvider> =
  withInstall(ConfigProvider)
export default ElConfigProvider

export * from './src/config-provider'
export * from './src/config-provider-props'
export * from './src/constants'
export * from './src/hooks/use-global-config'

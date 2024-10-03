import { withInstall } from '@tams-ui/utils'
import Autocomplete from './src/autocomplete.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElAutocomplete: SFCWithInstall<typeof Autocomplete> =
  withInstall(Autocomplete)

export default ElAutocomplete

export * from './src/autocomplete'

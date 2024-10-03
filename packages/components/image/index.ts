import { withInstall } from '@tams-ui/utils'

import Image from './src/image.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElImage: SFCWithInstall<typeof Image> = withInstall(Image)
export default ElImage

export * from './src/image'

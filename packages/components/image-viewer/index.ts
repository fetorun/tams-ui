import { withInstall } from '@tams-ui/utils'

import ImageViewer from './src/image-viewer.vue'
import type { SFCWithInstall } from '@tams-ui/utils'

export const ElImageViewer: SFCWithInstall<typeof ImageViewer> =
  withInstall(ImageViewer)
export default ElImageViewer

export * from './src/image-viewer'

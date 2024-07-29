import { componentSizeMap } from '@tams-ui/constants'

import type { ComponentSize } from '@tams-ui/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}

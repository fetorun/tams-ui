import { buildProps } from '@tams-ui/utils'
import { componentSizes } from '@tams-ui/constants'
import type { ExtractPropTypes } from 'vue'
import type Jumper from './jumper.vue'

export const paginationJumperProps = buildProps({
  size: {
    type: String,
    values: componentSizes,
  },
} as const)

export type PaginationJumperProps = ExtractPropTypes<
  typeof paginationJumperProps
>

export type PaginationJumperInstance = InstanceType<typeof Jumper>

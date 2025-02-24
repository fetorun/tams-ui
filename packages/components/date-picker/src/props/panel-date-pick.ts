import { buildProps, definePropType } from '@tams-ui/utils'
import { panelSharedProps } from './shared'

import type { ExtractPropTypes } from 'vue'
import type { Dayjs } from 'dayjs'

export const panelDatePickProps = buildProps({
  ...panelSharedProps,
  parsedValue: {
    type: definePropType<Dayjs | Dayjs[]>([Object, Array]),
  },
  visible: {
    type: Boolean,
  },
  format: {
    type: String,
    default: '',
  },
  tamsOpenOnFocus: {
    type: Boolean,
    default: true,
  },
} as const)

export type PanelDatePickProps = ExtractPropTypes<typeof panelDatePickProps>

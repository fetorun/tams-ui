import { buildProps } from '@tams-ui/utils'
import { panelRangeSharedProps, panelSharedProps } from './shared'

import type { ExtractPropTypes } from 'vue'

export const panelDateRangeProps = buildProps({
  ...panelSharedProps,
  ...panelRangeSharedProps,
  visible: Boolean,
} as const)

export type PanelDateRangeProps = ExtractPropTypes<typeof panelDateRangeProps>

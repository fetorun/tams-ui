import { componentSizes, datePickTypes } from '@tams-ui/constants'
import type { ComponentSize, DatePickType } from '@tams-ui/constants'

export const isValidComponentSize = (val: string): val is ComponentSize | '' =>
  ['', ...componentSizes].includes(val)

export const isValidDatePickType = (val: string): val is DatePickType =>
  ([...datePickTypes] as string[]).includes(val)

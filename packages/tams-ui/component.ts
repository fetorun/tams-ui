import { ElAffix } from '@tams-ui/components/affix'
import { ElAlert } from '@tams-ui/components/alert'
import { ElAutocomplete } from '@tams-ui/components/autocomplete'
import { ElAvatar } from '@tams-ui/components/avatar'
import { ElBacktop } from '@tams-ui/components/backtop'
import { ElBadge } from '@tams-ui/components/badge'
import { ElBreadcrumb, ElBreadcrumbItem } from '@tams-ui/components/breadcrumb'
import { ElButton, ElButtonGroup } from '@tams-ui/components/button'
import { ElCalendar } from '@tams-ui/components/calendar'
import { ElCard } from '@tams-ui/components/card'
import { ElCarousel, ElCarouselItem } from '@tams-ui/components/carousel'
import { ElCascader } from '@tams-ui/components/cascader'
import { ElCascaderPanel } from '@tams-ui/components/cascader-panel'
import { ElCheckTag } from '@tams-ui/components/check-tag'
import {
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
} from '@tams-ui/components/checkbox'
import { ElCol } from '@tams-ui/components/col'
import { ElCollapse, ElCollapseItem } from '@tams-ui/components/collapse'
import { ElCollapseTransition } from '@tams-ui/components/collapse-transition'
import { ElColorPicker } from '@tams-ui/components/color-picker'
import { ElConfigProvider } from '@tams-ui/components/config-provider'
import {
  ElAside,
  ElContainer,
  ElFooter,
  ElHeader,
  ElMain,
} from '@tams-ui/components/container'
import { ElDatePicker } from '@tams-ui/components/date-picker'
import {
  ElDescriptions,
  ElDescriptionsItem,
} from '@tams-ui/components/descriptions'
import { ElDialog } from '@tams-ui/components/dialog'
import { ElDivider } from '@tams-ui/components/divider'
import { ElDrawer } from '@tams-ui/components/drawer'
import {
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
} from '@tams-ui/components/dropdown'
import { ElEmpty } from '@tams-ui/components/empty'
import { ElForm, ElFormItem } from '@tams-ui/components/form'
import { ElIcon } from '@tams-ui/components/icon'
import { ElImage } from '@tams-ui/components/image'
import { ElImageViewer } from '@tams-ui/components/image-viewer'
import { ElInput } from '@tams-ui/components/input'
import { ElInputNumber } from '@tams-ui/components/input-number'
import { ElLink } from '@tams-ui/components/link'
import {
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
} from '@tams-ui/components/menu'
import { ElPageHeader } from '@tams-ui/components/page-header'
import { ElPagination } from '@tams-ui/components/pagination'
import { ElPopconfirm } from '@tams-ui/components/popconfirm'
import { ElPopover } from '@tams-ui/components/popover'
import { ElPopper } from '@tams-ui/components/popper'
import { ElProgress } from '@tams-ui/components/progress'
import { ElRadio, ElRadioButton, ElRadioGroup } from '@tams-ui/components/radio'
import { ElRate } from '@tams-ui/components/rate'
import { ElResult } from '@tams-ui/components/result'
import { ElRow } from '@tams-ui/components/row'
import { ElScrollbar } from '@tams-ui/components/scrollbar'
import { ElOption, ElOptionGroup, ElSelect } from '@tams-ui/components/select'
import { ElSelectV2 } from '@tams-ui/components/select-v2'
import { ElSkeleton, ElSkeletonItem } from '@tams-ui/components/skeleton'
import { ElSlider } from '@tams-ui/components/slider'
import { ElSpace } from '@tams-ui/components/space'
import { ElStatistic } from '@tams-ui/components/statistic'
import { ElCountdown } from '@tams-ui/components/countdown'
import { ElStep, ElSteps } from '@tams-ui/components/steps'
import { ElSwitch } from '@tams-ui/components/switch'
import { ElTable, ElTableColumn } from '@tams-ui/components/table'
import { ElAutoResizer, ElTableV2 } from '@tams-ui/components/table-v2'
import { ElTabPane, ElTabs } from '@tams-ui/components/tabs'
import { ElTag } from '@tams-ui/components/tag'
import { ElText } from '@tams-ui/components/text'
import { ElTimePicker } from '@tams-ui/components/time-picker'
import { ElTimeSelect } from '@tams-ui/components/time-select'
import { ElTimeline, ElTimelineItem } from '@tams-ui/components/timeline'
import { ElTooltip } from '@tams-ui/components/tooltip'
import { ElTooltipV2 } from '@tams-ui/components/tooltip-v2'
import { ElTransfer } from '@tams-ui/components/transfer'
import { ElTree } from '@tams-ui/components/tree'
import { ElTreeSelect } from '@tams-ui/components/tree-select'
import { ElTreeV2 } from '@tams-ui/components/tree-v2'
import { ElUpload } from '@tams-ui/components/upload'
import { ElWatermark } from '@tams-ui/components/watermark'
import { ElTour, ElTourStep } from '@tams-ui/components/tour'
import { ElAnchor, ElAnchorLink } from '@tams-ui/components/anchor'
import { ElSegmented } from '@tams-ui/components/segmented'

import type { Plugin } from 'vue'

export default [
  ElAffix,
  ElAlert,
  ElAutocomplete,
  ElAutoResizer,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElButtonGroup,
  ElCalendar,
  ElCard,
  ElCarousel,
  ElCarouselItem,
  ElCascader,
  ElCascaderPanel,
  ElCheckTag,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElColorPicker,
  ElConfigProvider,
  ElContainer,
  ElAside,
  ElFooter,
  ElHeader,
  ElMain,
  ElDatePicker,
  ElDescriptions,
  ElDescriptionsItem,
  ElDialog,
  ElDivider,
  ElDrawer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElEmpty,
  ElForm,
  ElFormItem,
  ElIcon,
  ElImage,
  ElImageViewer,
  ElInput,
  ElInputNumber,
  ElLink,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElPageHeader,
  ElPagination,
  ElPopconfirm,
  ElPopover,
  ElPopper,
  ElProgress,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElRate,
  ElResult,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElOption,
  ElOptionGroup,
  ElSelectV2,
  ElSkeleton,
  ElSkeletonItem,
  ElSlider,
  ElSpace,
  ElStatistic,
  ElCountdown,
  ElSteps,
  ElStep,
  ElSwitch,
  ElTable,
  ElTableColumn,
  ElTableV2,
  ElTabs,
  ElTabPane,
  ElTag,
  ElText,
  ElTimePicker,
  ElTimeSelect,
  ElTimeline,
  ElTimelineItem,
  ElTooltip,
  ElTooltipV2,
  ElTransfer,
  ElTree,
  ElTreeSelect,
  ElTreeV2,
  ElUpload,
  ElWatermark,
  ElTour,
  ElTourStep,
  ElAnchor,
  ElAnchorLink,
  ElSegmented,
] as Plugin[]

import { ElInfiniteScroll } from '@tams-ui/components/infinite-scroll'
import { ElLoading } from '@tams-ui/components/loading'
import { ElMessage } from '@tams-ui/components/message'
import { ElMessageBox } from '@tams-ui/components/message-box'
import { ElNotification } from '@tams-ui/components/notification'
import { ElPopoverDirective } from '@tams-ui/components/popover'

import type { Plugin } from 'vue'

export default [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElPopoverDirective,
] as Plugin[]

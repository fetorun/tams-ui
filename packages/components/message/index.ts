import { withInstallFunction } from '@tams-ui/utils'

import Message from './src/method'

export const ElMessage = withInstallFunction(Message, '$message')
export default ElMessage

export * from './src/message'

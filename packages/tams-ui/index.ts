import installer from './defaults'
export * from '@tams-ui/components'
export * from '@tams-ui/constants'
export * from '@tams-ui/directives'
export * from '@tams-ui/hooks'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'

import type { CSSProperties, ComputedRef, InjectionKey, Ref } from 'vue'
import type { UseNamespaceReturn } from '@tams-ui/hooks'

export type DialogContext = {
  dialogRef: Ref<HTMLElement | undefined>
  headerRef: Ref<HTMLElement | undefined>
  bodyId: Ref<string>
  ns: UseNamespaceReturn
  rendered: Ref<boolean>
  style: ComputedRef<CSSProperties>
}

export const dialogInjectionKey: InjectionKey<DialogContext> =
  Symbol('dialogInjectionKey')

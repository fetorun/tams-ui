<template>
  <div :class="ns.b('group')">
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { provide, reactive, toRef } from 'vue'
import { useNamespace } from '@tams-ui/hooks'
import { buttonGroupProps } from './button-group'
import { buttonGroupContextKey } from './constants'

defineOptions({
  name: 'ElButtonGroup',
})
const props = defineProps(buttonGroupProps)
provide(
  buttonGroupContextKey,
  reactive({
    size: toRef(props, 'size'),
    type: toRef(props, 'type'),
  })
)
const ns = useNamespace('button')
</script>

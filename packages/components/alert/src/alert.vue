<template>
  <transition :name="ns.b('fade')">
    <div
      v-show="visible"
      :class="[ns.b(), ns.m(type), ns.is('center', center), ns.is(effect)]"
      role="alert"
    >
      <el-icon v-if="showIcon && iconComponent" :class="iconClass">
        <component :is="iconComponent" />
      </el-icon>

      <div :class="ns.e('content')">
        <span
          v-if="title || $slots.title"
          :class="[ns.e('title'), withDescription]"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p v-if="$slots.default || description" :class="ns.e('description')">
          <slot>
            {{ description }}
          </slot>
        </p>
        <template v-if="closable">
          <div
            v-if="closeText"
            :class="[ns.e('close-btn'), ns.is('customed')]"
            @click="close"
          >
            {{ closeText }}
          </div>
          <el-icon v-else :class="ns.e('close-btn')" @click="close">
            <Close />
          </el-icon>
        </template>
      </div>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import { computed, ref, useSlots } from 'vue'
import { ElIcon } from '@tams-ui/components/icon'
import { TypeComponents, TypeComponentsMap } from '@tams-ui/utils'
import { useNamespace } from '@tams-ui/hooks'
import { alertEmits, alertProps } from './alert'

const { Close } = TypeComponents

defineOptions({
  name: 'ElAlert',
})

const props = defineProps(alertProps)
const emit = defineEmits(alertEmits)
const slots = useSlots()

const ns = useNamespace('alert')

const visible = ref(true)

const iconComponent = computed(() => TypeComponentsMap[props.type])

const iconClass = computed(() => [
  ns.e('icon'),
  { [ns.is('big')]: !!props.description || !!slots.default },
])

const withDescription = computed(() => {
  return { 'with-description': props.description || slots.default }
})

const close = (evt: MouseEvent) => {
  visible.value = false
  emit('close', evt)
}
</script>

<template>
  <el-button plain @click="open"> Hide close button </el-button>
</template>

<script lang="ts" setup>
import { ElNotification } from 'tams-ui'

const open = () => {
  ElNotification.success({
    title: 'Info',
    message: 'This is a message without close button',
    showClose: false,
  })
}
</script>

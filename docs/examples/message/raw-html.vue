<template>
  <el-button :plain="true" @click="openHTML">Use HTML string</el-button>
</template>

<script lang="ts" setup>
import { ElMessage } from 'tams-ui'

const openHTML = () => {
  ElMessage({
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>

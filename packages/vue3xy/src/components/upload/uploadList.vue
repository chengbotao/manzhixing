<!--
 * @Author: Chengbotao
 * @Date: 2023-02-16 13:19:15
-->
<template>
  <ul class="xy-upload-list">

    <li v-for="file in fileList" :key="file.uid" class="upload-list-item">
      <span :class="`file-name file-name-${file.status}`">
        <xyIcon icon="file-alt" theme="secondary"></xyIcon>
        {{file.name}}
      </span>
      <span class="file-status">
        <xyIcon v-if="file.status === 'uploading' || file.status === 'ready'" key="uploading" icon="spinner" spin theme="primary">
        </xyIcon>
        <xyIcon v-else-if="file.status === 'success'" key="success" icon="check-circle" theme="success"></xyIcon>
        <xyIcon v-else-if="file.status === 'error'" key="error" icon="times-circle" theme="danger"></xyIcon>
      </span>
      <span class="file-actions">
        <xyIcon icon="times" @click="onRemove(file)"></xyIcon>
      </span>
      <xyProgress v-if="file.status === 'uploading'" :percent="file.percent ?? 0" :strokeHeight="10"></xyProgress>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'xyUploadList',
  inheritAttrs: false,
})

</script>

<script setup lang="ts">
type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';

interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
}

// defineOptions({
//     name: 'xyUploadList',
//     inheritAttrs: false,
// })

// Props
const props = withDefaults(defineProps<UploadListProps>(), {});

// Emits

// inject

// data

// computed

// methods

// public 方法
defineExpose({})

</script>

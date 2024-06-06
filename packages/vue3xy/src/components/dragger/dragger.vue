<!--
 * @Author: Chengbotao
 * @Date: 2023-02-16 10:36:16
-->
<template>
  <div v-bind="$attrs" :class="classes" @dragover="handleDrag($event, true)" @dragleave="handleDrag($event, false)" @drop="handleDrop">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import classNames from "classnames";

defineOptions({
  name: 'XyDragger',
  inheritAttrs: false,
})

interface DraggerProps {
  onFile: (file: FileList) => void;
  className?: string
}

// Props
const props = withDefaults(defineProps<DraggerProps>(), {
});

// Emits

// data
const dragOver = ref(false);

// computed
const classes = computed(() => {
  return classNames("xy-dragger", props.className, {
    "is-dragover": dragOver
  });
});

// methods
const handleDrag = (event: DragEvent, over: boolean) => {
  event.preventDefault();
  dragOver.value = over;
}
const handleDrop = (event: DragEvent) => {
  event.preventDefault();
  dragOver.value = false;
  props.onFile(event.dataTransfer!.files)
}

// public 方法
defineExpose({})

</script>

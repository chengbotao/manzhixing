<!--
 * @Author: Chengbotao
 * @Date: 2023-01-30 15:34:02
-->
<template>
  <div class="xy-progress-bar">
    <div class="xy-progress-bar-outer" :style="{ height: `${strokeHeight}px` }">
      <div :class="classes" :style="{ width: `${percent}%` }">
        <span v-if="showText" class="inner-text">{{ percent }}%</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'XyProgress',
  inheritAttrs: false,
})

</script>

<script setup lang="ts">
import { computed } from "vue"
import classNames from "classnames";

interface ProgressProps {
  percent: number;
  strokeHeight?: number;
  showText?: boolean;
  theme?: string;
}

// defineOptions({
//     name: 'XyProgress',
//     inheritAttrs: false,
// })

// Props
const props = withDefaults(defineProps<ProgressProps>(), {
  strokeHeight: 15,
  showText: true,
  theme: 'primary',
});

// Emits

// computed
const classes = computed(() => {
  return classNames("xy-progress-bar-inner", {
    [`color-${props.theme}`]: props.theme,
  });
})


// methods

// public 方法
defineExpose({})

</script>

<!--
 * @Author: Chengbotao
 * @Date: 2023-01-28 22:31:08
-->
<template>
  <ul :class="classes" v-bind="$attrs">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { defineComponent, Ref } from 'vue'

export default defineComponent({
  name: 'XyMenu',
  inheritAttrs: false,
})

</script>

<script setup lang="ts">
import { computed, provide, ref } from "vue";
import classNames from "classnames";

type MenuMode = 'horizontal' | 'vertical';
type MenuSelectCallback = (selectedIndex: string) => void;

interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  onSelect?: MenuSelectCallback;
  defaultOpenSubMenus?: string[];
}

interface ProvideOrInjectTyping {
  index: Ref<string>;
  mode?: MenuMode;
  onSelect?: MenuSelectCallback;
  defaultOpenSubMenus?: string[];
}

// defineOptions({
//     name: 'XyMenu',
//     inheritAttrs: false,
// })

// Props
const props = withDefaults(defineProps<MenuProps>(), {
  defaultIndex: '0',
  mode: 'vertical',
  defaultOpenSubMenus: () => [],
});

// Emits

// data
const currentActive = ref(props.defaultIndex)

// computed
const classes = computed(() => {
  return classNames('xy-menu', props.className, {
    'xy-menu-vertical': props.mode === 'vertical',
    'xy-menu-horizontal': props.mode != 'vertical',
  });
});

// methods
const handleClick = (index: string) => {
  currentActive.value = index;
  props.onSelect && props.onSelect(index);
};

// provide
provide<ProvideOrInjectTyping>("context", {
  index: currentActive,
  onSelect: handleClick,
  mode: props.mode,
  defaultOpenSubMenus: props.defaultOpenSubMenus
})

// public 方法
defineExpose({})

</script>

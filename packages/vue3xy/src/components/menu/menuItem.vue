<!--
 * @Author: Chengbotao
 * @Date: 2023-01-29 10:31:46
-->
<template>
  <li :class="classes" v-bind="$attrs" @click="handleClick">
    <slot></slot>
  </li>
</template>

<script setup lang="ts">
import { computed, inject, Ref, useSlots } from "vue";
import classNames from "classnames";

defineOptions({
    name: 'XyMenuItem',
    inheritAttrs: false,
})

type MenuMode = 'horizontal' | 'vertical';
type MenuSelectCallback = (selectedIndex: string) => void;

interface MenuItemProps {
  index: string;
  disabled?: boolean;
  className?: string;
}

interface MenuItemEmits {
  (event: "click", payload: MouseEvent): void
}

interface ProvideOrInjectTyping {
  index?: Ref<string>;
  mode?: MenuMode;
  onSelect?: MenuSelectCallback;
  defaultOpenSubMenus?: string[];
}

// slots
const slots = useSlots();

// Props
const props = withDefaults(defineProps<MenuItemProps>(), {});

// Emits

// inject
const context = inject<ProvideOrInjectTyping>("context", {})

// data

// computed
const classes = computed(() => {
  return classNames('xy-menu-item', props.className, {
    'is-disabled': props.disabled,
    'is-active': context.index!.value === props.index,
  });
});

// methods
const handleClick = (event: MouseEvent) => {
  if (context.onSelect && !props.disabled && typeof props.index === 'string') {
    context.onSelect(props.index);
  }
};

// public 方法
defineExpose({})

</script>

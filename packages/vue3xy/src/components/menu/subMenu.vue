<!--
 * @Author: Chengbotao
 * @Date: 2023-01-29 16:08:29
-->
<template>
  <li :class="classes" v-bind="$attrs" @mouseenter="handleMouse($event, true)" @mouseleave="handleMouse($event, false)">
    <div class="xy-submenu-title" @click="handleClick">
      {{ title }}
      <xyIcon icon="angle-down" class="arrow-icon"></xyIcon>
    </div>
    <Transition animation="zoom-in-bottom" class="zoom-in-left">
      <ul v-if="menuOpen" :class="subMenuClasses">
        <slot></slot>
      </ul>
    </Transition>
  </li>
</template>

<script setup lang="ts">
import { computed, inject, ref, Ref } from "vue";
import classNames from "classnames";

defineOptions({
    name: 'XySubMenu',
    inheritAttrs: false,
})

type MenuMode = 'horizontal' | 'vertical';
type MenuSelectCallback = (selectedIndex: string) => void;

interface SubMenuProps {
  index: string;
  title: string;
  disabled?: boolean;
  className?: string;
}

interface SubMenuEmits {
  (event: "click", payload: MouseEvent): void
}

interface ProvideOrInjectTyping {
  index?: Ref<string>;
  mode?: MenuMode;
  onSelect?: MenuSelectCallback;
  defaultOpenSubMenus?: string[];
}

// Props
const props = withDefaults(defineProps<SubMenuProps>(), {});

// Emits

// inject
const context = inject<ProvideOrInjectTyping>("context", {})

// data
const openSubMenus = context.defaultOpenSubMenus as string[]
const isOpened = props.index && context.mode === "vertical" ? openSubMenus.includes(props.index) : false
const menuOpen = ref(isOpened)
// computed
const classes = computed(() => {
  return classNames('xy-submenu', props.className, {
    'is-active': context.index!.value === props.index,
    'is-opened': menuOpen.value,
    'is-vertical': context.mode === 'vertical',
  });
});
const subMenuClasses = computed(() => {
  return classNames('xy-submenu-items', {
    'menu-open': menuOpen.value,
  })
});

// methods
const handleClick = (event: MouseEvent) => {

  if (context.mode === 'vertical') {
    event.preventDefault();
    menuOpen.value = !menuOpen.value;
  }
};
const handleMouse = (e: MouseEvent, toggle: boolean) => {
  if (context.mode !== 'vertical') {
    menuOpen.value = toggle;
  }
};

// public 方法
defineExpose({})

</script>

<!--
 * @Author: Chengbotao
 * @Date: 2022-11-17 23:16:43
-->
<template>
    <FontAwesomeIcon v-bind="$attrs" :icon="icon" :class="classes"></FontAwesomeIcon>
</template>

<script setup lang="ts">
import { computed } from "vue";
import classNames from "classnames";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
defineOptions({
  name: 'XyIcon',
  inheritAttrs: false
})
type ThemeProps =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'light'
    | 'dark';

interface FontAwesomeIconProps {
  border?: boolean
  fixedWidth?: boolean
  flip?: 'horizontal' | 'vertical' | 'both'
  icon: object | Array<string> | string | IconDefinition
  mask?: object | Array<string> | string
  listItem?: boolean
  pull?: 'right' | 'left'
  pulse?: boolean
  rotation?: 90 | 180 | 270 | '90' | '180' | '270'
  swapOpacity?: boolean
  size?: 'lg' | 'xs' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x'
  spin?: boolean
  transform?: object | string
  symbol?: boolean | string
  title?: string
  inverse?: boolean
}
interface IconProps {
    icon: object | Array<string> | string | IconDefinition
    className?: string
    theme?: ThemeProps
}

// Props
const props = withDefaults(defineProps<IconProps>(), {
    theme: "primary"
});

// computed
const classes = computed(() => {
    return classNames("xy-icon", props.className, {
        [`xy-icon-${props.theme}`]: props.theme,
    });
})
</script>


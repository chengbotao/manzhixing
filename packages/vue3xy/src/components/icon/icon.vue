<!--
 * @Author: Chengbotao
 * @Date: 2022-11-17 23:16:43
-->
<template>
    <FontAwesomeIcon v-bind="$attrs" :icon="icon" :class="classes"></FontAwesomeIcon>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'XyIcon',
    inheritAttrs: false
    
})

</script>

<script setup lang="ts">
import { computed } from "vue";
import classNames from "classnames";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/vue-fontawesome";

type ThemeProps =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'light'
    | 'dark';

interface IconProps extends Omit<FontAwesomeIconProps, "icon"> {
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


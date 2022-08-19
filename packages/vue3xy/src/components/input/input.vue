<!--
 * @Author: Chengbotao
 * @Date: 2022-11-19 23:47:15
-->
<template>
    <div :class="classes">
        <div v-if="slots.prepend" key="prepend" class="xy-input-group-prepend">
            <slot name="prepend"></slot>
        </div>
        <div v-if="icon" key="icon" class="icon-wrapper">
            <xyIcon :icon="icon"></xyIcon>
        </div>
        <input class="xy-input-inner" v-bind="$attrs" :disabled=disabled @focus="handleFocus" @blur="handleBlur"
            @change="handleChange" @input="handleInput" :value="modelValue" />
        <div v-if="slots.append" key="append" class="xy-input-group-append">
            <slot name="append"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'XyInput',
    inheritAttrs: false,
})
</script>

<script setup lang="ts">
import { useSlots } from "vue";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames';

type InputSize = 'lg' | 'sm';

interface InputProps {
    modelValue?: string | number;
    disabled?: boolean;
    sized?: InputSize;
    icon?: IconProp;
    className?: string;
}

interface InputEmits {
    (event: "input", payload: Event): void
    (event: "focus", payload: FocusEvent): void
    (event: "blur", payload: FocusEvent): void
    (event: "change", payload: Event): void
    (event: "update:modelValue", payload: string): void
}
// slots
const slots = useSlots();

// Props
const props = withDefaults(defineProps<InputProps>(), {
    modelValue: ""
});

// Emits
const emits = defineEmits<InputEmits>();

// computed
const classes = classNames('xy-input-wrapper', props.className, {
    [`xy-input-size-${props.sized}`]: props.sized,
    'is-disabled': props.disabled,
    'xy-input-group': slots?.prepend || slots?.append,
    'xy-input-group-append': !!slots?.append,
    'xy-input-group-prepend': !!slots?.prepend,
});

// methods
const handleInput = (event: Event) => {
    emits("input", event)
    emits("update:modelValue", (event.target as HTMLInputElement).value)
}
const handleFocus = (event: FocusEvent) => {
    emits("focus", event)
}
const handleBlur = (event: FocusEvent) => {
    emits("blur", event)
}
const handleChange = (event: Event) => {
    emits("change", event)
}

// public 方法
defineExpose({})
</script>
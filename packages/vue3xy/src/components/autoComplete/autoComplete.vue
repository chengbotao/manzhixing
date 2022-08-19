<!--
 * @Author: Chengbotao
 * @Date: 2022-11-24 12:50:54
-->
<template>
    <div ref="xyAutoComplete" :class="classes">
        <xyInput v-bind="$attrs" ref="xyAutoCompleteInput" v-model="inputValue" @input="handleInput" @blur="handleBlur" @keydown="handleKeyDown">
        </xyInput>
        <Transition name="zoom-in-top">
            <ul v-if="suggestions.length" class="xy-suggestion-list">
                <li v-for="(item, index) in suggestions" :key="item.value + '-' + index"
                    :class="['xy-suggestion-item', { 'is-active': index === highlightIndex }]"
                    @click="handleSelect(item)">
                    <template v-if="!slots.suggestionItem">
                        {{ item.value }}
                    </template>
                    <slot name="suggestionItem" :scope="item"></slot>
                </li>
            </ul>
            <div v-else-if="loading" class="xy-suggestion-list">
                <div class ="xy-suggestions-loading-icon">
                    <xyIcon icon="spinner" spin />
                </div>
            </div>
        </Transition>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'XyAutoComplete',
    inheritAttrs: false

})
</script>

<script setup lang="ts">
import { ref, computed, useSlots } from "vue";
import classNames from 'classnames';
import { useClickOutside } from "../../hooks/useClickOutside";
import { useDebounce } from "../../hooks/useDebounce";


interface DataSourceObject {
    value: string;
}
type DataSourceType<T = Record<string, unknown>> = T & DataSourceObject;

interface AutoCompleteProps {
    fetchSuggestions: (keyword: string) => DataSourceType[] | Promise<DataSourceType[]>;
    modelValue?: string | number;
    className?: string
}

interface AutoCompleteEmits {
    (event: "select", payload: DataSourceType): void
    (event: "update:modelValue", payload: string): void
}

// defineOptions({
//     name: 'XyAutoComplete',
//     inheritAttrs: false,
// })

// ref
const xyAutoComplete = ref<HTMLDivElement>();
useClickOutside(xyAutoComplete, (event: MouseEvent) => {
    suggestions.value = [];
})

// slots
const slots = useSlots();

// Props
const props = withDefaults(defineProps<AutoCompleteProps>(), {
});

// Emits
const emits = defineEmits<AutoCompleteEmits>();

// data
const inputValue = ref(props.modelValue);
const suggestions = ref<DataSourceType[]>([]);
const loading = ref(false);
const highlightIndex = ref(-1);
// const showDropdown = ref(false);
// const triggerSearch = ref(false);


// computed
const classes = computed(() => {
    return classNames("xy-auto-complete", props.className);
});

// methods
const handleInput = useDebounce((event: Event) => {
    inputValue.value = (event.target as HTMLInputElement).value.trim();
    // triggerSearch.value = true;
    const results = props.fetchSuggestions(inputValue.value);
    if (results instanceof Promise) {
        loading.value = true;
        results.then((data) => {
            loading.value = false;
            suggestions.value = data;
        });
    } else {
        suggestions.value = results;
    }
}, 300)
const handleBlur = ()=>{
    inputValue.value = props.modelValue as string;
}
const handleSelect = (item: DataSourceType) => {
    inputValue.value = item.value;
    suggestions.value = [];
    // triggerSearch.value = false;
    highlightIndex.value = -1
    emits("select", item);
    emits("update:modelValue", item.value)
}
const highlight = (index: number) => {
    if (index < 0) index = 0;
    if (index >= suggestions.value.length) {
        index = suggestions.value.length - 1;
    }
    highlightIndex.value = index;
};
const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.code) {
        case 'Enter':
            suggestions.value[highlightIndex.value] && handleSelect(suggestions.value[highlightIndex.value]);
            break;
        case 'Escape':
            suggestions.value = [];
            break;
        case 'ArrowUp':
            highlight(highlightIndex.value - 1);
            break;
        case 'ArrowDown':
            highlight(highlightIndex.value + 1);
            break;
        default:
            break;
    }
};
</script>

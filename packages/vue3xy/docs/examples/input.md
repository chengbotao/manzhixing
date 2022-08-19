# Input

> 输入框

## 基础用法

<script setup lang="ts">
    import {ref} from "vue"
    const inputVal = ref("")
    const focusInputVal = ref("")
    const BlurInputVal = ref("")
    const changeInputVal = ref("")
    const handleInput = (event) => {
        
    }
    const handleFocus = (event) => {
        focusInputVal.value = inputVal.value
    }
    const handleBlur = (event) => {
        BlurInputVal.value = inputVal.value
    }
    const handleChange = (event) => {
        changeInputVal.value = inputVal.value
        
    }
</script>

<XyInput
v-model="inputVal"
placeholder="基础输入框"
@input="handleInput"
@focus="handleFocus"
@blur="handleBlur"
@change="handleChange">
</XyInput>
<br />
在 Input 值改变时触发: {{inputVal}}  
<br />  
Input 获得焦点时触发 : {{focusInputVal}}  
<br />
Input 失去焦点时触发: {{BlurInputVal}}  
<br />  
仅当 modelValue 改变时且当输入框失去焦点或按 Enter 时触发: {{changeInputVal}}

::: tip ❣️view the code❣️

```vue
<XyInput
  v-model="inputVal"
  placeholder="基础输入框"
  @input="handleInput"
  @focus="handleFocus"
  @blur="handleBlur"
  @change="handleChange"
></XyInput>
```

---

```ts
<script setup lang="ts">
    import {ref} from "vue"
    const inputVal = ref("")
    const focusInputVal = ref("")
    const BlurInputVal = ref("")
    const changeInputVal = ref("")
    const handleInput = (event) => {

    }
    const handleFocus = (event) => {
        focusInputVal.value = inputVal.value
    }
    const handleBlur = (event) => {
        BlurInputVal.value = inputVal.value
    }
    const handleChange = (event) => {
        changeInputVal.value = inputVal.value
    }
</script>
```

:::

## 不同尺寸

<XyInput sized="lg" placeholder="大型输入框"></XyInput>
<br />
<XyInput placeholder="默认输入框"></XyInput>
<br />
<XyInput sized="sm" placeholder="小型输入框"></XyInput>

::: tip ❣️view the code❣️

```vue
<XyInput sized="lg" placeholder="大型输入框"></XyInput>
<XyInput placeholder="默认输入框"></XyInput>
<XyInput sized="sm" placeholder="小型输入框"></XyInput>
```

:::

## 禁用状态

<XyInput disabled placeholder="禁用状态"></XyInput>

::: tip ❣️view the code❣️

```vue
<XyInput disabled placeholder="禁用状态"></XyInput>
```

:::

## 添加图标

<XyInput placeholder="图标展示" icon="calendar-days"></XyInput>

::: tip ❣️view the code❣️

```vue
<XyInput placeholder="图标展示" icon="calendar-days"></XyInput>
```

:::

## 前后插槽

<XyInput placeholder="插槽使用">
    <template #prepend>https://</template>
    <template #append>.com</template>
</XyInput>

::: tip ❣️view the code❣️

```vue
<XyInput placeholder="插槽使用">
    <template #prepend>https://</template>
    <template #append>.com</template>
</XyInput>
```

:::

## Props 属性

> 支持原生 `Input` 属性

| 属性名                  | 属性类型             | 说明                | 默认值  |
| ----------------------- | -------------------- | ------------------- | ------- |
| `model-value\| v-model` | `string \| number`   | 绑定值              | -       |
| `disabled`              | `boolean`            | 设置 Input 禁用     | `false` |
| `className`             | `string`             | 自定义`CSS`类名     | -       |
| `sized`                 | `oneOf "sm" \| "lg"` | 设置 Input 尺寸     | -       |
| `icon`                  | `IconProp`           | 设置 Input 后面图标 | -       |

## Event 事件

| 事件名   | 参数类型     | 说明                                                      |
| -------- | ------------ | --------------------------------------------------------- |
| `input`  | `MouseEvent` | 在 Input 值改变时触发                                     |
| `focus`  | `MouseEvent` | Input 获得焦点时触发                                      |
| `blur`   | `MouseEvent` | Input 失去焦点时触发                                      |
| `change` | `MouseEvent` | 仅当 modelValue 改变时且当输入框失去焦点或按 Enter 时触发 |

## Slot 插槽

| 插槽名    | 说明           |
| --------- | -------------- |
| `prepend` | 输入框前置内容 |
| `append`  | 输入框后置内容 |

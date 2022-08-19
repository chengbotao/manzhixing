# AutoComplete

> 搜索框  
> 支持键盘操作: **上下键切换选项,Esc取消搜索,回车触发选择事件**

## Note 注意

::: tip 💕💕💕

```ts
// DataSourceType 类型, 必须要包含 `value` 属性

interface DataSourceObject {
    value: string;
}
type DataSourceType<T = Record<string, unknown>> = T & DataSourceObject;

```

:::

## 基础用法

<script setup lang="ts">
    import {ref} from "vue";
    const inputVal = ref("");
    const inputAsyncVal = ref("");
    const data = ref([{
        id: 1,
        value: "Vue"
    },{
        id: 2,
        value: "React"
    },{
        id: 3,
        value: "JavaScript"
    },{
        id: 4,
        value: "TypeScript"
    }])
    
    const handleSelect = (item) => {
        console.log("selected", item);
    }
    const handleFetchSuggestions = (keyword) => {
        return data.value.filter(item=>item.value.includes(keyword))
    }
    const handleAsyncFetchSuggestions = (keyword)=>{
        return fetch(`https://api.github.com/search/users?q=${keyword}`)
      .then((res) => res.json())
      .then(({ items }) => {
        return items
          .slice(0, 10)
          .map((item: any) => ({ value: item.login, ...item }));
      });
    }
</script>

<ClientOnly>
  <XyAutoComplete
  v-model="inputVal"
  placeholder="自动补全输入框"
  @select="handleSelect"
  :fetchSuggestions="handleFetchSuggestions">
  </XyAutoComplete>
</ClientOnly>
<br />
AutoComplete 选择条例: {{inputVal}}

::: tip ❣️view the code❣️

```vue
<XyAutoComplete
  v-model="inputVal"
  placeholder="自动补全输入框"
  @select="handleSelect"
  :fetchSuggestions="handleFetchSuggestions"
>
</XyAutoComplete>
```

---

```ts
<script setup lang="ts">
    import {ref} from "vue";
    const inputVal = ref("");
    const data = ref([{
        id: 1,
        value: "Vue"
    },{
        id: 2,
        value: "React"
    },{
        id: 3,
        value: "JavaScript"
    },{
        id: 4,
        value: "TypeScript"
    }])

    const handleSelect = (item) => {
        console.log("selected", item)
    }
    const handleFetchSuggestions = (keyword) => {
        return data.value.filter(item=>item.value.includes(keyword))
    }
</script>
```

:::

## 自定义下拉选项布局(slot)

<ClientOnly>
  <XyAutoComplete
  v-model="inputVal"
  placeholder="搜索框"
  @select="handleSelect"
  :fetchSuggestions="handleFetchSuggestions">
  <template #suggestionItem={scope}>
  {{scope.id}} - {{scope.value}}
  </template>
  </XyAutoComplete>
</ClientOnly>
<br />
AutoComplete 选择条例: {{inputVal}}

::: tip ❣️view the code❣️

```vue
<XyAutoComplete
  v-model="inputVal"
  placeholder="搜索框"
  @select="handleSelect"
  :fetchSuggestions="handleFetchSuggestions"
>
<template #suggestionItem={scope}>
{{scope.id}} - {{scope.value}}
</template>
</XyAutoComplete>
```

---

```ts
<script setup lang="ts">
    import {ref} from "vue";
    const inputVal = ref("");
    const data = ref([{
        id: 1,
        value: "Vue"
    },{
        id: 2,
        value: "React"
    },{
        id: 3,
        value: "JavaScript"
    },{
        id: 4,
        value: "TypeScript"
    }])

    const handleSelect = (item) => {
        console.log("selected", item);
    }
    const handleFetchSuggestions = (keyword) => {
        return data.value.filter(item=>item.value.includes(keyword))
    }
</script>
```

:::

## 异步搜索

<ClientOnly>
  <XyAutoComplete
  v-model="inputAsyncVal"
  placeholder="异步搜索框"
  :fetchSuggestions="handleAsyncFetchSuggestions"
  @select="handleSelect">
  </XyAutoComplete>
</ClientOnly>
<br />
GitHub 用户名: {{inputAsyncVal}}

::: tip ❣️view the code❣️

```vue
<XyAutoComplete
  v-model="inputAsyncVal"
  placeholder="异步搜索框"
  @select="handleSelect"
  :fetchSuggestions="handleAsyncFetchSuggestions"
>
</XyAutoComplete>
```

---

```ts
<script setup lang="ts">
    import {ref} from "vue";
    const inputAsyncVal = ref("");

    const handleSelect = (item) => {
        console.log("selected", item);
    }

    const handleAsyncFetchSuggestions = (keyword)=>{
        return fetch(`https://api.github.com/search/users?q=${keyword}`)
      .then((res) => res.json())
      .then(({ items }) => {
        return items
          .slice(0, 10)
          .map((item: any) => ({ value: item.login, ...item }));
      });
    }
</script>
```

:::

## 禁用状态

<ClientOnly>
  <XyAutoComplete
  disabled
  v-model="inputVal"
  :fetchSuggestions="handleAsyncFetchSuggestions"
  placeholder="禁用搜索框">
  </XyAutoComplete>
</ClientOnly>

::: tip ❣️view the code❣️

```vue
<XyAutoComplete disabled v-model="inputVal" placeholder="禁用搜索框">
</XyAutoComplete>
```

:::

## Props 属性

> 支持 `xyInput` 属性

| 属性名                  | 属性类型                                                             | 说明               | 默认值 |
| ----------------------- | -------------------------------------------------------------------- | ------------------ | ------ |
| `model-value\| v-model` | `string \| number`                                                   | 绑定值             | -      |
| `fetchSuggestions`      | `(keyword: string) => DataSourceType[] \| Promise<DataSourceType[]>` | 获取关键字的候选项 | -      |

## Event 事件

| 事件名   | 参数类型         | 说明             |
| -------- | ---------------- | ---------------- |
| `select` | `DataSourceType` | 选择下拉选项事件 |

## Slot 插槽

| 插槽名           | 说明                 |
| ---------------- | -------------------- |
| `suggestionItem` | 自定义下拉列表项展示 |

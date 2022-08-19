# Dragger

> 可拖放文件容器

## 基础用法

<script setup lang="ts">

const hanldeFile = (files)=>{
    console.log(files)
}
</script>

<xyDragger :onFile="hanldeFile">
  <xyIcon icon="fa-solid fa-circle-up" size="8x"></xyIcon>
</xyDragger>

::: tip ❣️view the code❣️

```vue
<xyDragger :onFile="hanldeFile">
  <xyIcon icon="fa-solid fa-circle-up" size="8x"></xyIcon>
</xyDragger>
```

---

```ts
<script setup lang="ts">

const hanldeFile = (files)=>{
    console.log(files)
}
</script>
```

:::

## Props 属性

| 属性名      | 属性类型                   | 说明             | 默认值 |
| ----------- | -------------------------- | ---------------- | ------ |
| `onFile`    | `(file: FileList) => void` | 拖放文件列表集合 | -      |
| `className` | `string`                   | 自定义`CSS`类名  | -      |

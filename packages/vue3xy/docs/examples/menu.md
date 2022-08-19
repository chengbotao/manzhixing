# Menu

> 菜单组件

## 基础用法

> 横行与纵行两种风格(`mode`属性)

<script setup lang="ts">
const handleSelect = (index)=>{
    console.log(index)
}
</script>
<xyMenu :onSelect="handleSelect" mode="horizontal">
  <xySubMenu index="0" title="横向展示组合">
    <xyMenuItem index="0-1">0-1</xyMenuItem>
    <xyMenuItem index="0-2">0-2</xyMenuItem>
    <xyMenuItem index="0-3">0-3</xyMenuItem>
  </xySubMenu>
  <xyMenuItem index="1">2</xyMenuItem>
  <xyMenuItem index="2">3</xyMenuItem>
  <xyMenuItem index="3">4</xyMenuItem>
  <xyMenuItem index="4">5</xyMenuItem>
</xyMenu><br />

<xyMenu :onSelect="handleSelect">
  <xySubMenu index="0" title="纵行展示组合">
    <xyMenuItem index="0-1">0-1</xyMenuItem>
    <xyMenuItem index="0-2">0-2</xyMenuItem>
    <xyMenuItem index="0-3">0-3</xyMenuItem>
  </xySubMenu>
  <xyMenuItem index="1">2</xyMenuItem>
  <xyMenuItem index="2">3</xyMenuItem>
  <xyMenuItem index="3">4</xyMenuItem>
  <xyMenuItem index="4">5</xyMenuItem>
</xyMenu>

::: tip ❣️view the code❣️

```vue
<xyMenu :onSelect="handleSelect" mode="horizontal">
  <xySubMenu index="0" title="横向展示组合">
    <xyMenuItem index="0-1">0-1</xyMenuItem>
    <xyMenuItem index="0-2">0-2</xyMenuItem>
    <xyMenuItem index="0-3">0-3</xyMenuItem>
  </xySubMenu>
  <xyMenuItem index="1">2</xyMenuItem>
  <xyMenuItem index="2">3</xyMenuItem>
  <xyMenuItem index="3">4</xyMenuItem>
  <xyMenuItem index="4">5</xyMenuItem>
</xyMenu>
<br />

<xyMenu :onSelect="handleSelect" :defaultOpenSubMenus="['0']">
  <xySubMenu index="0" title="纵行展示组合">
    <xyMenuItem index="0-1">0-1</xyMenuItem>
    <xyMenuItem index="0-2">0-2</xyMenuItem>
    <xyMenuItem index="0-3">0-3</xyMenuItem>
  </xySubMenu>
  <xyMenuItem index="1">2</xyMenuItem>
  <xyMenuItem index="2">3</xyMenuItem>
  <xyMenuItem index="3">4</xyMenuItem>
  <xyMenuItem index="4">5</xyMenuItem>
</xyMenu>
```

:::

## 禁用菜单项

<xyMenu :onSelect="handleSelect">
  <xySubMenu index="0" title="展示组合">
    <xyMenuItem index="0-1">0-1</xyMenuItem>
    <xyMenuItem  disabled index="0-2">0-2</xyMenuItem>
    <xyMenuItem index="0-3">0-3</xyMenuItem>
  </xySubMenu>
  <xyMenuItem index="1" disabled>2</xyMenuItem>
  <xyMenuItem index="2">3</xyMenuItem>
  <xyMenuItem index="3">4</xyMenuItem>
  <xyMenuItem index="4">5</xyMenuItem>
</xyMenu>

::: tip ❣️view the code❣️

```vue
<xyMenu :onSelect="handleSelect">
  <xySubMenu index="0" title="展示组合">
    <xyMenuItem index="0-1">0-1</xyMenuItem>
    <xyMenuItem  disabled index="0-2">0-2</xyMenuItem>
    <xyMenuItem index="0-3">0-3</xyMenuItem>
  </xySubMenu>
  <xyMenuItem index="1" disabled>2</xyMenuItem>
  <xyMenuItem index="2">3</xyMenuItem>
  <xyMenuItem index="3">4</xyMenuItem>
  <xyMenuItem index="4">5</xyMenuItem>
</xyMenu>
```

:::

## 设置默认展开组合

<xyMenu :onSelect="handleSelect" :defaultOpenSubMenus="['0']">
  <xySubMenu index="0" title="默认展开组合">
    <xyMenuItem index="0-1">0-1</xyMenuItem>
    <xyMenuItem index="0-2">0-2</xyMenuItem>
    <xyMenuItem index="0-3">0-3</xyMenuItem>
  </xySubMenu>
  <xyMenuItem index="1">2</xyMenuItem>
  <xySubMenu index="2" title="默认不展开组合">
    <xyMenuItem index="2-1">2-1</xyMenuItem>
    <xyMenuItem index="2-2">2-2</xyMenuItem>
    <xyMenuItem index="2-3">2-3</xyMenuItem>
  </xySubMenu>
  <xyMenuItem index="3">4</xyMenuItem>
  <xyMenuItem index="4">5</xyMenuItem>
</xyMenu>

::: tip ❣️view the code❣️

```vue
<xyMenu :onSelect="handleSelect" :defaultOpenSubMenus="['0']">
  <xySubMenu index="0" title="默认展开组合">
    <xyMenuItem index="0-1">0-1</xyMenuItem>
    <xyMenuItem index="0-2">0-2</xyMenuItem>
    <xyMenuItem index="0-3">0-3</xyMenuItem>
  </xySubMenu>
  <xyMenuItem index="1">2</xyMenuItem>
  <xySubMenu index="2" title="默认不展开组合">
    <xyMenuItem index="2-1">2-1</xyMenuItem>
    <xyMenuItem index="2-2">2-2</xyMenuItem>
    <xyMenuItem index="2-3">2-3</xyMenuItem>
  </xySubMenu>
  <xyMenuItem index="3">4</xyMenuItem>
  <xyMenuItem index="4">5</xyMenuItem>
</xyMenu>
```

:::

## Menu Props 属性

| 属性名                | 属性类型                                             | 说明                           | 默认值     |
| --------------------- | ---------------------------------------------------- | ------------------------------ | ---------- |
| `mode`                | `oneOf 'horizontal' \| 'vertical'`                   | 菜单展示风格                   | `vertical` |
| `defaultIndex`        | `number`                                             | 默认选中项                     | `0`        |
| `defaultOpenSubMenus` | `string[]`                                           | `vertical`模式下默认展开组合项 | `[]`       |
| `className`           | `string`                                             | 自定义`CSS`类名                | -          |
| `onSelect`            | `MenuSelectCallback:(selectedIndex: string) => void` | 选择选项的方法                 | -          |

## SubMenu Props 属性

| 属性名      | 属性类型 | 说明            | 默认值 |
| ----------- | -------- | --------------- | ------ |
| `index`     | `string` | 唯一标志        | -      |
| `title`     | `string` | 展示组合标题    | -      |
| `className` | `string` | 自定义`CSS`类名 | -      |

## MenuItem Props 属性

| 属性名      | 属性类型  | 说明            | 默认值  |
| ----------- | --------- | --------------- | ------- |
| `index`     | `string`  | 唯一标志        | -       |
| `disabled`  | `boolean` | 是否禁用        | `false` |
| `className` | `string`  | 自定义`CSS`类名 | -       |

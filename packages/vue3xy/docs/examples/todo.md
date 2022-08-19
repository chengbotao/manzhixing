# Todo 待办

## button 组件

::: tip ✍️✍️✍️
对于文本按钮的禁用使用的是 `CSS` 样式, 让鼠标事件失效

```css
 {
  pointer-events: none; // 不接受鼠标事件
}
```

导致禁用文本按钮的鼠标样式修改不生效  
**任务: _让文本禁用按钮的鼠标样式生效_**
:::

## menu 组件

::: tip ✍️✍️✍️

1. 对于属性 `index` 组件代码自动生成 `1-1-1-1`
2. `onSelect` 方法返回的信息, 现在返回的是当前的`index`, 应该返回`menuItem`实例
3. `menu subMenu menuItem` 组件插槽展示逻辑&插槽组件校验
4. `subMenu` 组件支持 `disabled`
5. `hover` 样式会微动优化
6. `menu subMenu menuItem` provide inject 类型定义
:::

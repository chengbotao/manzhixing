# useClickOutside

> 点击指定元素以外的区域

::: tip ❣️view the code❣️

## 源码

```ts
import { Ref } from 'vue';
import { useEventListener } from './useEventListener';

export function useClickOutside(ref: Ref, handler: (event: MouseEvent) => void) {
  const listener = (event: MouseEvent) => {
    if (!ref.value || ref.value.contains(event.target as HTMLElement)) return;

    handler(event);
  };
  useEventListener(document, 'click', listener);
  return;
}
```

:::

## 参数

| 参数      | 类型                          | 说明      | 默认值 |
| --------- | ----------------------------- | --------- | ------ |
| `ref`     | `Ref`                         | `DOM`元素 | -      |
| `handler` | `(event: MouseEvent) => void` | 回调函数  | -      |

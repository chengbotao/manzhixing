# useEventListener

> 事件监听取消

## 源码

::: tip ❣️view the code❣️

```ts
import { onMounted, onUnmounted } from 'vue';
export function useEventListener<K extends keyof DocumentEventMap>(
  target: Document,
  event: K,
  callback: (event: DocumentEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
) {
  onMounted(() => target.addEventListener(event, callback, options));
  onUnmounted(() => target.removeEventListener(event, callback, options));
}
```

:::

## 参数

| 参数       | 类型                                   | 说明                     | 默认值 |
| ---------- | -------------------------------------- | ------------------------ | ------ |
| `target`   | `Document`                             | `DOM`元素                | -      |
| `event`    | `<K extends keyof DocumentEventMap>`   | 监听的事件名             | -      |
| `callback` | `(event: DocumentEventMap[K]) => void` | 事件的回调函数           | -      |
| `options`  | `boolean \| AddEventListenerOptions`   | 有关 `listener` 属性对象 | -      |

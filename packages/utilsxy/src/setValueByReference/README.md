# setValueByReference

 **_根据对象的引用设置值_**

## 参数

| 参数名   | 参数类型             | 参数说明       |
| -------- | -------------------- | -------------- |
| `target` | `any`                | 要设置值的对象 |
| `refer`  | `string`\|`string[]` | 对象的引用路径 |
| `val`    | `any`                | 要设置的值     |

## 源代码&使用

::: code-group

```ts [使用]
import { setValueByReference } from '@botaoxy/utilsxy';

const obj = {
  a: {
      b: 1,
  },
};

setValueByReference(obj, "a.b", 2);
// setValueByReference(obj, ["a", "b"], 2);
{ a: { b: 2 } }
```

<<< @/src/setValueByReference/index.ts [源代码: setValueByReference]

:::

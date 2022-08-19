# partial

**_偏函数_**

## 参数

| 参数名 | 参数类型 | 参数说明       |
| ------ | -------- | -------------- |
| `fn`   | `any`    | 需要偏函数函数 |
| `values` | `unknown[]`  | fn 函数参数    |

## 源代码&使用

::: code-group

```ts [使用]
import { partial } from "@botaoxy/utilsxy"

function isType(type: string, val: any) {
  return Object.prototype.toString.call(val) === `[object ${type}]`;
}
let isString = partial(isType, "String");
let isArray = partial(isType, "Array");
let isDate = partial(isType, "Date");

isString("chengbotao"); // true
isArray([]); // true
isDate(new Date()); // true
```

<<< @/src/partial/index.ts [源代码: partial]

:::

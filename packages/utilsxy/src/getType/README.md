# getType

**获取变量的类型值**(Number 对 NaN 做处理)

## 参数

| 参数名  | 参数类型  | 参数说明 |
| ------- | --------- | -------- |
| `value` | `unknown` | 任意值   |

## 源代码&使用

::: code-group

```ts [使用]
import { getType } from "@manzhixing/utilsxy";

getType("manzhixing") // String
getType(221) // Number
getType(NaN) // NaN
getType(Symbol()) // Symbol
getType(new Date()) // Date
```

<<< @/src/getType/index.ts [源代码: getType]

:::

::: tip 提示

**`getType` 与 [`typeOf`](../typeOf/) 返回值不同**

1. typeOf 返回类型值全小写,getType 返回类型值首字母大写
2. getType 对 `Number` 做了处理可以返回 `NaN`
3. typeOf 是一个手写 typeof 的扩展, getType 更有语义化些

:::

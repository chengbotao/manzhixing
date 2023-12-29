# interpolateList

**_字符串插值(占位符替换)_**

## 参数

| 参数名    | 参数类型                               | 参数说明  |
| --------- | -------------------------------------- | --------- |
| `message` | `string`                               | 模版字符串 |
| `values`  | `unknown[] \| Record<string, unknown>` | 替换的值集合 |

## 源代码&使用

::: code-group

```ts [使用]
import { interpolateList } from "@botaoxy/utilsxy";

let info = "Hello, {0} {1}.";
interpolateList(info, ["I'm", "Botao"])

let info1 = "Hello, {value} {name}.";
interpolateList(info, value: "I'm", name: "Botao")

// Hello, I'm Botao.
```

<<< @/src/interpolateList/index.ts [源代码: interpolateList]

:::

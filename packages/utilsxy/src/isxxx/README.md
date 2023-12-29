
# isxxx

**_用于判断某个值是否符合某种特定的条件或类型_**

## isURLSearchParams

### 参数

| 参数名   | 参数类型 | 参数说明       |
| -------- | -------- | -------------- |
| `val` | `unknown`    | 检验的变量 |

### 源代码&使用

::: code-group

```ts [使用]
import { isURLSearchParams } from "@manzhixing/utilsxy"

isURLSearchParams(new URLSearchParams()) // true
```

<<< @/src/isxxx/index.ts#isURLSearchParams [源代码: isURLSearchParams]

:::

## isEmpty

### 参数

| 参数名   | 参数类型 | 参数说明       |
| -------- | -------- | -------------- |
| `val` | `unknown`    | 检验的变量 |

### 源代码&使用

::: code-group

```ts [使用]
import { isEmpty } from "@manzhixing/utilsxy"

isEmpty([]) // true
isEmpty({}) // true
```

<<< @/src/isxxx/index.ts#isEmpty [源代码: isEmpty]

:::

## isFormData

### 参数

| 参数名   | 参数类型 | 参数说明       |
| -------- | -------- | -------------- |
| `val` | `unknown`    | 检验的变量 |

### 源代码&使用

::: code-group

```ts [使用]
import { isFormData } from "@manzhixing/utilsxy"

isFormData(new FormData())
```

<<< @/src/isxxx/index.ts#isFormData [源代码: isFormData]

:::

## isPlainObject

### 参数

| 参数名   | 参数类型 | 参数说明       |
| -------- | -------- | -------------- |
| `val` | `unknown`    | 检验的变量 |

### 源代码&使用

::: code-group

```ts [使用]
import { isPlainObject } from "@manzhixing/utilsxy"

isPlainObject({}) // true
isPlainObject([]) // false

```

<<< @/src/isxxx/index.ts#isPlainObject [源代码: isPlainObject]

:::

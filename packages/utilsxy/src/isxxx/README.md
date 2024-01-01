
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

```ts [源代码: isURLSearchParams]
export function isURLSearchParams(val: unknown): val is URLSearchParams {
  return typeof val !== 'undefined' && val instanceof URLSearchParams;
}
```

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

```ts [源代码: isEmpty]
export function isEmpty(values: unknown[] | Record<string, unknown>): boolean {
  if (Array.isArray(values)) {
    // 数组为空
    if (values.length > 0) return false;
  } else {
    // 对象为空
    for (const key in values) {
      return !!key && false;
    }
  }
  return true;
}
```

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

```ts [源代码: isFormData]
export function isFormData(val: unknown): val is FormData {
  return typeof val !== 'undefined' && val instanceof FormData;
}
```

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

```ts [源代码: isPlainObject]
export function isPlainObject(val: unknown): val is Record<string, unknown> {
  return Object.prototype.toString.call(val) === '[object Object]';
}
```

:::

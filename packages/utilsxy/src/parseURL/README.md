# parseURL

_解析获取 **URL** 参数_

## 参数

| 参数名 | 参数类型 | 参数说明  |
| ------ | -------- | --------- |
| `url`  | `string` | `url`地址 |

## 源代码&使用

::: code-group

```ts [使用]
import { parseURL } from "@botaoxy/utilsxy"

parseURL('http://botaoonline.com.cn/search?a=1&b=2');

{
  a: '1',
  b: '2',
}
```

<<< @/src/parseURL/index.ts [源代码: parseURL]

:::

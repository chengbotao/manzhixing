# buildURL

_构建**URL**_

## 参数

| 参数名             | 参数类型                  | 参数说明         |
| ------------------ | ------------------------- | ---------------- |
| `url`              | `string`                  | `url`地址        |
| `params`           | `Record<string, unknown> \| URLSearchParams`                     | `url`参数        |
| `paramsSerializer` | `(params: Record<string, unknown> \| URLSearchParams) => string` | 自定义参数序列化 |

## 源代码&使用

::: code-group

```ts 使用
import { buildURL } from "@botaoxy/utilsxy";

const url = "http://botaoonline.com.cn/search";
const params = {
 userName: "botaoxy",
 password: "123456",
};
buildURL(url, params); // http://botaoonline.com.cn/search?userName=botaoxy&password=123456
```

<<< @/src/buildURL/index.ts [源代码: buildURL]

:::

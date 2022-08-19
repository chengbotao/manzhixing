# Promise版 jsonp

## 参数

| 参数名             | 参数类型                  | 参数说明           |
| ------------------ | ------------------------- | ------------------ |
| `url`              | `string`                  | `url`地址          |
| `callbackKey`      | `string`-默认值`callback` | `url`回调函数的key |
| `callbackName`     | `string`                  | 回调函数名         |
| `params`           | `any`                     | `url`参数          |
| `paramsSerializer` | `(params: any) => string` | 自定义参数序列化   |

## 源代码&使用

::: code-group

``` ts [使用]
import { jsonp } from "@botaoxy/utilsxy"

// 调用 百度搜索🔍API
jsonp({
    url: 'https://suggestion.baidu.com/su',
    callbackKey: 'cb',
    callbackName: 'callback',
    params: {
        wd: "chengbotao"
    }
}).then(data => {
    console.log(data);
})
```

<<< @/src/jsonp/index.ts [源代码: jsonp]

:::

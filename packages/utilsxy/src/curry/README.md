# curry

**_函数柯里化_**

## 参数

| 参数名 | 参数类型 | 参数说明       |
| ------ | -------- | -------------- |
| `fn`   | `any`    | 需要柯里化函数 |
| `args` | `unknown[]`  | fn 函数参数    |

## 源代码&使用

::: code-group

```ts [使用]
import { curry } from '@botaoxy/utilsxy';

function add(a, b) {
 return a + b;
}
const add1 = curry(add, 1);
add1(2); // 3
```

<<< @/src/curry/index.ts [源代码: curry]

:::

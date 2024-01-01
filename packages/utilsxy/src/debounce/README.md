# debounce

**_防抖函数_**

## 参数

| 参数名      | 参数类型  | 参数说明     |
| ----------- | --------- | ------------ |
| `fn`        | `any`     | 目标函数     |
| `wait`      | `number`  | 间隔(ms)     |
| `immediate` | `boolean` | 是否立即执行 |

## 源代码&使用

::: code-group

```ts [使用]
import { debounce } from  "@manzhixing/utilsxy"

function add(a:number, b:number){
  console.log(a+b)
}

const add1 = debounce(add, 1000);

add1(1, 2)
add1(2, 3)
add1(3, 4)

// 1s 后控制台只打印一个 7

add1(4, 5)
add1(6, 7)
add1(7, 8)
add1.cancel()

// 1s 后控制台不会打印任何内容
```

<<< @/src/debounce/index.ts [源代码:  debounce]

:::

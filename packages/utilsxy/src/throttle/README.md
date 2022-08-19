# throttle

**_节流函数_**

## 参数

| 参数名    | 参数类型                                  | 参数说明       |
| --------- | ----------------------------------------- | -------------- |
| `fn`      | `any`                                     | 指定的函数     |
| `wait`    | `number`                                  | 节流时间(毫秒) |
| `options` | `{leading?: boolean; trailing?: boolean;}` | 节流配置参数   |

| 属性       | 说明                     | 默认值  |
| ---------- | ------------------------ | ------- |
| `leading`  | 是否立即执行             | `false` |
| `trailing` | 最后一次执行后是否再等待一段时间 | `true`  |

## 源代码&使用

::: code-group

```ts [使用]
import { throttle } from "@botaoxy/utilsxy"

function add(a:number, b:number){
  console.log(a+b)
}

const add1 = throttle(add, 1000);

add1(1, 2)
add1(2, 3)
add1(3, 4)

// 1s 后控制台只打印一个 3

add1(4, 5)
add1(6, 7)
add1(7, 8)
add1.cancel()

// 1s 后控制台不会打印任何内容
```

<<< @/src/throttle/index.ts [源代码: throttle]

:::

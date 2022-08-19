# deepClone

**_深克隆_**

## 参数

| 参数名   | 参数类型               | 参数说明                   |
| -------- | ---------------------- | -------------------------- |
| `target` | `any`                  | 要克隆的对象               |
| `map`    | `WeakMap<object, any>` | 用来存对象做循环引用的判断 |

## 源代码&使用

::: code-group

```ts [使用]
import { deepClone } from '@botaoxy/utilsxy';

const map = new Map();
map.set("name", "chengbotao");

const set = new Set();
set.add("utilsxy");
set.add("chengbotao");

const obj = {
  field: 1,
  fieldUn: undefined,
  fieldObj: {
    age: 28,
  },
  fieldArr: [2, 4, 8],
  empty: null,
  map,
  set,
  bool: new Boolean(true),
  num: new Number(2),
  str: new String(2),
  symbol: Object(Symbol(1)),
  date: new Date(),
  reg: /\d+/,
  error: new Error(),
  fun: () => {
    console.log("Hello Family!");
  },
  fun1: function (a, b) {
    return a + b;
  },
};

const copy = deepClone(obj);
```

<<< @/src/deepClone/index.ts [源代码: deepClone]

:::

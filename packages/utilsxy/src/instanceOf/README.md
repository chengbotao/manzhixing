# instanceOf

_检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上_

## 参数

| 参数名   | 参数类型 | 参数说明       |
| -------- | -------- | -------------- |
| `target` | `object`    | 检测的构造函数 |
| `ctor`   | `T extends new (...args: any[]) => void`    | 实例对象       |

## 使用

::: code-group

```ts [使用]
import { instanceOf } from '@botaoxy/utilsxy';

class Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  }
  const auto = new Car('Honda', 'Accord', 1998);

instanceOf(auto, Car); // true
instanceOf(auto, Object); // true
```

<<< @/src/instanceOf/index.ts [源代码: instanceOf]

:::

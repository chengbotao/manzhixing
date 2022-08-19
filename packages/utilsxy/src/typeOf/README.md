# typeOf

_返回一个**对象或原始值**表达式的类型_  

## 参数

| 参数名    | 参数类型 | 参数说明               |
| --------- | -------- | ---------------------- |
| `operand` | `unknown`    | 一个对象或原始值表达式 |

## 返回值

_`{ string }`_: 全小写的表示类型的字符串

## 源代码&使用

::: code-group

```ts [使用]
import { typeOf } from '@botaoxy/utilsxy';

typeOf("chengbotao"); // "string"
typeOf(28); // "number"
typeOf(+"1"); // "number"
typeOf(1 + "1"); // "string"
typeOf(new Date()); // "date"
```

<<< @/src/typeOf/index.ts [源代码: typeOf]

:::

## 延伸

_JavaScript `typeof` 操作符可能返回值_

| 类型         | 返回值      |
| ------------ | ----------- |
| `Undefined`  | `undefined` |
| `Boolean`    | `boolean`   |
| `Number`     | `number`    |
| `BigInt`     | `bigint`    |
| `String`     | `string`    |
| `Symbol`     | `symbol`    |
| `Function`   | `function`  |
| `Null`       | `object`    |
| **其他对象(数据)** | `object`    |

> 操作符 `typeof` 能将**_原始值_(除 Null)**的类型返回,其他的数据类型都是`object`  
> 封装的 **`typeOf`** 函数可以细化`object`类型

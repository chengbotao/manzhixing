# getValueByReference

 **_根据对象的引用获取值_**

## 参数

| 参数名   | 参数类型             | 参数说明       |
| -------- | -------------------- | -------------- |
| `target` | `T extends Record<string, any>`                | 要设置值的对象 |
| `refer`  | `string`\|`string[]` | 对象的引用路径 |

## 源代码&使用

::: code-group

```ts [使用]
import { getValueByReference } from '@manzhixing/utilsxy';

const obj = {
  userInfo: {
      name: "chengbotao",
  },
};

getValueByReference(obj, "userInfo.name"); // "chengbotao"
// getValueByReference(obj, ["userInfo", "name"]); // "chengbotao"
```

<<< @/src/getValueByReference/index.ts [源代码: getValueByReference]

:::

# getNodeFromTree

_根据**唯一标志**获取树形中的节点_

## 参数

| 参数名     | 参数类型                                              | 参数说明                       |
| ---------- | ----------------------------------------------------- | ------------------------------ |
| `target`   | `Record<string, any>[] & Record<string, any>` | 树结构对象数组或一个树结构对象 |
| `mark`     | `string \| number`                                    | 要找的节点的唯一标志           |
| `options?` | `Partial<Record<'idKey' \| 'childrenKey', string>>`   | 标志的 `key` 、子集的 `key`    |

## 源代码&使用

::: code-group

```ts [使用]
import { getNodeFromTree } from '@manzhixing/utilsxy';

const provinceList = [
  {
    id: "1000",
    label: "湖北省",
    children: [
      {
        id: "1001",
        pid: "1000",
        label: "武汉",
        children: [
          { id: "100101", pid: "1001", label: "洪山区" },
          { id: "100102", pid: "1001", label: "武昌区" },
          { id: "100103", pid: "1001", label: "汉阳区" },
        ],
      },
      { id: "1020", pid: "1000", label: "咸宁" },
      { id: "1022", pid: "1000", label: "孝感" },
      { id: "1034", pid: "1000", label: "襄阳" },
      { id: "1003", pid: "1000", label: "宜昌" },
    ],
  },
  {
    id: "1200",
    value: "江苏省",
    label: "江苏省",
    children: [
      { id: "1201", pid: "1200", label: "南京" },
      { id: "1202", pid: "1200", label: "苏州" },
      { id: "1204", pid: "1200", label: "扬州" },
    ],
  },
];

const province1201 = getNodeFromTree(provinceList, "1201");

{
    id: "1201",
    pid: "1200",
    label: "南京"
};
```

<<< @/src/getNodeFromTree/index.ts [源代码: getNodeFromTree]

:::

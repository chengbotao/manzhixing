# flatToTree

**_扁平化数据结构树形_**

## 参数

| 参数名     | 参数类型                                                                    | 参数说明                                                             |
| ---------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `target`   | `Record<string, unknown>[]`                                                 | 扁平化数据结构                                                       |
| `options?` | `Partial<Record<'idKey' \| 'pidKey' \| 'childrenKey' \| 'topVal', string>>` | 树形结构关键 keys(唯一标志、 父级`id`、 子集 `key`、 `topVal`顶层值) |

## 使用

::: code-group

```ts [使用]
import  { flatToTree } from  "@botaoxy/utilsxy"
const provinceFlat = [
  {
    id: '1000',
    label: '湖北省',
  },
  {
    id: '1200',
    value: '江苏省',
    label: '江苏省',
  },
  {
    id: '1001',
    pid: '1000',
    label: '武汉',
  },
  {
    id: '1020',
    pid: '1000',
    label: '咸宁',
  },
  {
    id: '1022',
    pid: '1000',
    label: '孝感',
  },
  {
    id: '1034',
    pid: '1000',
    label: '襄阳',
  },
  {
    id: '1003',
    pid: '1000',
    label: '宜昌',
  },
  {
    id: '1201',
    pid: '1200',
    label: '南京',
  },
  {
    id: '1202',
    pid: '1200',
    label: '苏州',
  },
  {
    id: '1204',
    pid: '1200',
    label: '扬州',
  },
  {
    id: '100101',
    pid: '1001',
    label: '洪山区',
  },
  {
    id: '100102',
    pid: '1001',
    label: '武昌区',
  },
  {
    id: '100103',
    pid: '1001',
    label: '汉阳区',
  },
];
const provinceList = flatToTree(provinceFlat);

// 返回值
[
  {
    id: '1000',
    label: '湖北省',
    children: [
      {
        id: '1001',
        pid: '1000',
        label: '武汉',
        children: [
          { id: '100101', pid: '1001', label: '洪山区' },
          { id: '100102', pid: '1001', label: '武昌区' },
          { id: '100103', pid: '1001', label: '汉阳区' },
        ],
      },
      { id: '1020', pid: '1000', label: '咸宁' },
      { id: '1022', pid: '1000', label: '孝感' },
      { id: '1034', pid: '1000', label: '襄阳' },
      { id: '1003', pid: '1000', label: '宜昌' },
    ],
  },
  {
    id: '1200',
    value: '江苏省',
    label: '江苏省',
    children: [
      { id: '1201', pid: '1200', label: '南京' },
      { id: '1202', pid: '1200', label: '苏州' },
      { id: '1204', pid: '1200', label: '扬州' },
    ],
  },
]
```

<<< @/src/flatToTree/index.ts [源代码: flatToTree]

:::

# Progress

> 进度条

## 基础用法

<xyProgress :percent="40"></xyProgress><br />
<xyProgress :percent="50" :showText="false"></xyProgress>

::: tip ❣️view the code❣️

```vue
<XyProgress :percent="40"></XyProgress>

<XyProgress :percent="50" :showText="false"></XyProgress>
```

:::

## 不同主题

<XyProgress theme="secondary" :percent="50"></XyProgress><br />
<XyProgress theme="info" :percent="60"></XyProgress><br />
<XyProgress theme="warning" :percent="70"></XyProgress><br />
<XyProgress theme="light" :percent="80"></XyProgress><br />
<XyProgress theme="dark" :percent="90"></XyProgress><br />
<XyProgress theme="success" :percent="100"></XyProgress>

::: tip ❣️view the code❣️

```vue
<XyProgress theme="secondary" :percent="50"></XyProgress>

<XyProgress theme="info" :percent="60"></XyProgress>

<XyProgress theme="warning" :percent="70"></XyProgress>

<XyProgress theme="light" :percent="80"></XyProgress>

<XyProgress theme="dark" :percent="90"></XyProgress>

<XyProgress theme="success" :percent="100"></XyProgress>
```

:::

## 设置高度

<XyProgress theme="secondary" :percent="50" :strokeHeight="10"></XyProgress><br/>
<XyProgress theme="secondary" :percent="50"></XyProgress><br/>
<XyProgress theme="secondary" :percent="50" :strokeHeight="20"></XyProgress>

::: tip ❣️view the code❣️

```vue
<XyProgress theme="secondary" :percent="50" :strokeHeight="10"></XyProgress>

<XyProgress theme="secondary" :percent="50"></XyProgress>

<XyProgress theme="secondary" :percent="50" :strokeHeight="20"></XyProgress>
```

:::

## Props 属性

| 属性名         | 属性类型                                                                                       | 说明               | 默认值    |
| -------------- | ---------------------------------------------------------------------------------------------- | ------------------ | --------- |
| `percent`      | `number`                                                                                       | Progress 进度值    | -         |
| `theme`        | `oneOf 'primary'\| 'secondary'\| 'success'\| 'info'\| 'warning'\| 'danger'\| 'light'\| 'dark'` | 设置 Progress 主题 | `primary` |
| `strokeHeight` | `number`                                                                                       | 设置 Progress 高度 | 15        |
| `showText`     | `boolean`                                                                                      | 是否显示百分比     | `true`    |

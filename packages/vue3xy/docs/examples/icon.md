# Icon

> 基于 `Font Awesome` 免费图标二次封装  
> [Font Awesome | free](https://fontawesome.com/search?o=r&m=free)

## Note 注意

> 在使用 `Icon` 组件前需加载 `Font Awesome` 默认图标

::: tip

```ts
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
```

:::

## 基础用法

<xyIcon icon="coffee"></xyIcon>

::: tip ❣️view the code❣️

```ts
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
```

---

```vue
<xyIcon icon="coffee"></xyIcon>
```

:::

## 不同主题

<xyIcon icon="coffee"></xyIcon>
<xyIcon icon="coffee" theme="danger"></xyIcon>
<xyIcon icon="coffee" theme="secondary"></xyIcon>
<xyIcon icon="coffee" theme="success"></xyIcon>
<xyIcon icon="coffee" theme="info"></xyIcon>
<xyIcon icon="coffee" theme="warning"></xyIcon>
<xyIcon icon="coffee" theme="light"></xyIcon>
<xyIcon icon="coffee" theme="dark"></xyIcon>

::: tip ❣️view the code❣️

```vue
<xyIcon icon="coffee"></xyIcon>
<xyIcon icon="coffee" theme="danger"></xyIcon>
<xyIcon icon="coffee" theme="secondary"></xyIcon>
<xyIcon icon="coffee" theme="success"></xyIcon>
<xyIcon icon="coffee" theme="info"></xyIcon>
<xyIcon icon="coffee" theme="warning"></xyIcon>
<xyIcon icon="coffee" theme="light"></xyIcon>
<xyIcon icon="coffee" theme="dark"></xyIcon>
```

:::

## 不同尺寸

<xyIcon icon="coffee" size="2xs"></xyIcon>
<xyIcon icon="coffee"></xyIcon>
<xyIcon icon="coffee" size="2xl"></xyIcon>
<xyIcon icon="coffee" size="10x"></xyIcon>

::: tip ❣️view the code❣️

```vue
<xyIcon icon="coffee" size="2xs"></xyIcon>
<xyIcon icon="coffee"></xyIcon>
<xyIcon icon="coffee" size="2xl"></xyIcon>
<xyIcon icon="coffee" size="10x"></xyIcon>
```

:::

## Props 属性

> **更多属性参考 `Font Awesome` 的 `FontAwesomeIconProps`**

| 属性名      | 属性类型                                                                                              | 说明            | 默认值    |
| ----------- | ----------------------------------------------------------------------------------------------------- | --------------- | --------- |
| `theme`     | `oneOf "primary" \| "danger" \| "secondary" \| "success" \| "info" \| "warning" \| "light" \| "dark"` | 设置 Icon 主题  | `primary` |
| `className` | `string`                                                                                              | 自定义`CSS`类名 | -         |
| `icon`      | `IconProp`                                                                                            | `icon`名字      | -         |

::: tip `FontAwesomeIconProps`接口

```ts
interface FontAwesomeIconProps {
  border?: boolean;
  fixedWidth?: boolean;
  flip?: 'horizontal' | 'vertical' | 'both';
  icon: object | Array<string> | string | IconDefinition;
  mask?: object | Array<string> | string;
  listItem?: boolean;
  pull?: 'right' | 'left';
  pulse?: boolean;
  rotation?: 90 | 180 | 270 | '90' | '180' | '270';
  swapOpacity?: boolean;
  size?: 'lg' | 'xs' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
  spin?: boolean;
  transform?: object | string;
  symbol?: boolean | string;
  title?: string;
  inverse?: boolean;
}
```

:::

# @manzhixing/vue3xy

> **Vue3 组件库**

## Install

```bash
npm install @manzhixing/vue3xy
# OR
yarn add @manzhixing/vue3xy
```

### 安装主题包

```bash
npm install @manzhixing/themes
# OR
yarn add @manzhixing/themes
```

## Usage

### 全量引入

```ts
// 全量引入
import { createApp } from "vue";
import vue3xy from "@manzhixing/vue3xy";
import "@manzhixing/themes";
import App from "./App.vue";

createApp(App).use(vue3xy).mount("#app");
```

### 按需引入

```ts
import { createApp } from "vue";
import { xyButton } from "@manzhixing/vue3xy";
import "@manzhixing/themes/dist/button.css";
import App from "./App.vue";

createApp(App).use(xyButton).mount("#app");
```

## Docs

[文档地址](https://chengbotao.github.io/vue3xy/)

## License

> **MIT**

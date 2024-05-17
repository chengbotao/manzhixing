# vuex-persisted-plugin

`Vuex` 状态管理中实现持久化存储的插件。它可以将 `Vuex` 的状态持久化到本地存储(如 `LocalStorage` 或 `SessionStorage` ),并在页面刷新后自动恢复这些状态，从而实现了状态的持久化。  

::: tip 该插件的主要作用是解决以下问题：  

_在页面刷新后，Vuex 状态会被重置，导致用户需要重新进行登录等操作。_

**通过使用该插件，您可以轻松地实现以上功能，而无需手动编写逻辑来处理状态的持久化和恢复。**
:::

## 安装

```sh
#PNPM
pnpm add vuex-persisted-plugin

# NPM
npm install vuex-persisted-plugin

# YARN
yarn add vuex-persisted-plugin
```

## 使用

```ts
import { createStore } from "vuex";
import { persistedPlugin } from "vuex-persisted-plugin";
const store = createStore({
 state() {
   return {
    count: 0
   };
 },
 plugins: [
  persistedPlugin({
   paths: ["count"],
  }),
 ],
});
```

## 属性&方法

| 属性                | 说明                                       | 类型                                                        | 默认值                                                                               |
| ------------------- | ------------------------------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `paths`             | 需要持久化状态属性集合                     | (string\|Path)[]                                            | []                                                                                   |
| `storage`           | 指定存储类型                               | Storage                                                     | localStorage                                                                         |
| `storageKey`        | 存储中存储状态的键值                       | string                                                      | \_\_VUEX_PERSIST_PLUGIN\_\_                                                          |
| `getState`          | 自定义获取本地存储中状态的逻辑             | (storage: Storage, key: string) => Record<string, unknown>; | (storage, key) => {return storage.getItem(key) && JSON.parse(storage.getItem(key)!)} |
| `setState`          | 用于自定义将状态存储到本地存储的逻辑       | (storage: Storage, key: string, value: unknown) => void;    | (storage, key, value) => {storage.setItem(key, JSON.stringify(value));}              |
| `removeState`       | 用于自定义从本地存储中移除状态的逻辑       | (storage: Storage, key: string) => void;                    | (storage, key) => {storage.removeItem(key)}                                          |
| `mutationFilter`    | 用于过滤哪些 mutation 会触发状态持久化     | (mutation: MutationPayload) => boolean                      | (mutation) => true                                                                   |
| `resetMutationType` | 指定一个 mutation 类型会重置状态为初始状态 | string                                                      | \_\_RESET_STATE\_\_                                                                  |

## 配置

### paths

- 类型: (string\|Path)[]
- 默认值: []
用于指定 state 中哪些数据需要被持久化, 默认不持久化任何状态。

```ts
// string[] 类型
state() {
   return {
      count: 0,
      userInfo: {
         name: "chengbotao",
         email: "chengbotao5221@163.com",
      },
   };
},
// 持久化 state.count
paths: ["count"]

// 持久化 state.userInfo.name
paths: ["userInfo.name"]

// 持久化 state.count 和 state.userInfo.name
paths: ["count", "userInfo.name"]

// 持久化 state.count 和 state.userInfo
paths: ["count", "userInfo"]

```

```ts
// Path[] 类型
state() {
   return {
      count: 0,
      userInfo: {
         name: "chengbotao",
         email: "chengbotao5221@163.com",
      },
   };
},

// 持久化 state.count 到 localStorage, 
// 持久化 state.userInfo.name 到 sessionStorage
paths: ['count', { paths: ["userInfo.name"], storage: sessionStorage }]

```

### storage

- 类型: Storage
- 默认值: localStorage
用于指定存储类型，可以是 localStorage、sessionStorage 等。

### storageKey

- 类型: string
- 默认值: \_\_VUEX_PERSIST_PLUGIN\_\_
用于指定存储中存储状态的键值，默认值为 \_\_VUEX_PERSIST_PLUGIN\_\_。

### getState

- 类型: (storage: Storage, key: string) => Record<string, unknown>
- 默认值: (storage, key) => {return storage.getItem(key) && JSON.parse(storage.getItem(key)!)}
用于自定义获取本地存储中状态的逻辑，默认使用 localStorage.getItem(key) 并 JSON.parse() 获取状态。

### setState

- 类型: (storage: Storage, key: string, value: unknown) => void
- 默认值: (storage, key, value) => {storage.setItem(key, JSON.stringify(value));}
用于自定义将状态存储到本地存储的逻辑，默认使用 localStorage.setItem(key, JSON.stringify(value)) 存储状态。

### removeState

- 类型: (storage: Storage, key: string) => void
- 默认值: (storage, key) => {storage.removeItem(key)}
用于自定义从本地存储中移除状态的逻辑，默认使用 localStorage.removeItem(key) 移除状态。

### mutationFilter

- 类型: (mutation: MutationPayload) => boolean
- 默认值: (mutation) => true
用于过滤哪些 mutation 会触发状态持久化，默认会持久化所有 mutation。

### resetMutationType

- 类型: string
- 默认值: \_\_RESET_STATE\_\_
用于指定一个 mutation 类型会重置状态为初始状态，默认值为 \_\_RESET_STATE\_\_。

#### 重置状态

```ts
// 恢复所有持久化状态为初始值
store.commit("__RESET_STATE__");
// 只恢复指定持久化状态为初始值
store.commit("__RESET_STATE__", ["userInfo.name"]);
```

## 定制化使用的示例

```ts
import { createStore } from "vuex";
import { persistedPlugin } from "vuex-persisted-plugin";
import { localStore, sessionStore } from "@manzhixing/web-storage-adapter";  // 封装的Storage的第三方库
const store = createStore({
    state() {
    return {
     count: 0,
     userInfo: {
      name: "chengbotao",
      email: "chengbotao5221@163.com",
     },
    };
   },
 // ...其他配置
 plugins: [
  persistedPlugin({
     storage: localStore, // 存在localStorage
     storageKey: "__PERSIST_PLUGIN__", // 自定以键值
     paths: [
      "count",
      {
       paths: ["userInfo.name"],  // 将 userInfo.name 缓存到 sessionStorage
       storage: sessionStore,
      },
     ],
     // 第三方库存取移出的自定义逻辑
     getState(storage, key) {
      return storage.get(key) as Record<string, unknown>;
     },
     setState(storage, key, value) {
      storage.set(key, value);
     },
     removeState(storage, key) {
      storage.remove(key);
     },
  }),
 ],
});
```

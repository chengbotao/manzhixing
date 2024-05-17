# pinia-persisted-plugin

`Pinia` 状态管理的持久化插件。它可以将 `Pinia` 的状态持久化到本地存储(如 `LocalStorage` 或 `SessionStorage` ),并在页面刷新后自动恢复这些状态，从而实现了状态的持久化。  

> 该插件的主要作用是解决以下问题：  
> _在页面刷新后，Pinia 状态会被重置，导致用户需要重新进行登录等操作。_  
> **通过使用该插件，您可以轻松地实现以上功能，而无需手动编写逻辑来处理状态的持久化和恢复。**

## 安装

```sh
#PNPM
pnpm add pinia-persisted-plugin

# NPM
npm install pinia-persisted-plugin

# YARN
yarn add pinia-persisted-plugin
```

## 使用

```ts
import { createPinia, defineStore, setActivePinia } from "pinia";
import { persistedPlugin } from "pinia-persisted-plugin";
const pinia = createPinia();
pinia.use(persistedPlugin(
    {
        // 全局持久化配置
    }
));

const useStore = defineStore(key, {
    state: () => ({ count: 0 }),
    persisted: true, // false 是不持久化状态, true 是整个 store 使用默认配置持久化
    // persisted: {
    //     // store 定制化配置,会覆盖全局配置
    // },
});
```

## 属性&

| 属性          | 说明                                 | 类型                                                        | 默认值                                                                               |
| ------------- | ------------------------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `paths`       | 需要持久化状态属性集合               | (string\|Path)[] \| undefined                               | []                                                                                   |
| `storage`     | 指定存储类型                         | Storage                                                     | localStorage                                                                         |
| `storageKey`  | 存储中存储状态的键值                 | string \| ((id: string) => string)                          | (storeKey) => `${DEFAULT_STORAGE_KEY}${storeKey}`                                    |
| `getState`    | 自定义获取本地存储中状态的逻辑       | (storage: Storage, key: string) => Record<string, unknown>; | (storage, key) => {return storage.getItem(key) && JSON.parse(storage.getItem(key)!)} |
| `setState`    | 用于自定义将状态存储到本地存储的逻辑 | (storage: Storage, key: string, value: unknown) => void;    | (storage, key, value) => {storage.setItem(key, JSON.stringify(value));}              |
| `removeState` | 用于自定义从本地存储中移除状态的逻辑 | (storage: Storage, key: string) => void;                    | (storage, key) => {storage.removeItem(key)}                                          |

## 方法

| 方法名     | 描述                        | 参数               | 参数描述                                       |
| ---------- | --------------------------- | ------------------ | ---------------------------------------------- |
| `$hydrate` | 手动触发还原store数据的方法 | payload?: string[] | 还原指定状态恢复初始状态,不传默认还原整个store |

## 配置

### paths

- 类型: (string\|Path)[] | undefined
- 默认值: undefined
用于指定 state 中哪些数据需要被持久化, 默认持久化整个store。

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

- 类型: string | ((id: string) => string)
- 默认值: (storeKey) => `${DEFAULT_STORAGE_KEY}${storeKey}`
- DEFAULT_STORAGE_KEY : "\_\_PINIA_PERSIST_PLUGIN\_\_"
- storeKey : store.$id

用于指定存储中存储状态的键值，默认值为 (storeKey) => `${DEFAULT_STORAGE_KEY}${storeKey}`。

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

### $hydrate

手动触发还原store数据的方法

#### 还原状态

```ts
const useStore = defineStore(key, {
    state: () => ({ count: 0 }),
    persisted: true, // false 是不持久化状态, true 是整个 store 使用默认配置持久化
    // persisted: {
    //     // store 定制化配置,会覆盖全局配置
    // },
});
// 恢复所有持久化状态为初始值
useStore.$hydrate();
// 只恢复指定持久化状态为初始值
useStore.$hydrate(["userInfo.name"]);
```

## 定制化使用的示例

```ts
import { createPinia, defineStore, setActivePinia } from "pinia";
import { persistedPlugin } from "pinia-persisted-plugin";
import { localStore, sessionStore } from "@manzhixing/web-storage-adapter";  // 封装的Storage的第三方库
const pinia = createPinia();
pinia.use(persistedPlugin());

const useStore = defineStore(key, {
   state: () => ({
    count: 0,
    userInfo: {
     name: "chengbotao",
     email: "chengbotao5221@163.com",
    },
   }),
   persisted: {
    storage: localStore,
    storageKey: "__PERSIST_PLUGIN_2__",
    paths: [
     "count",
     {
      paths: ["userInfo.name"],
      storage: sessionStore,
     },
    ],
    getState(storage, key) {
     return storage.get(key) as Record<string, unknown>;
    },
    setState(storage, key, value) {
     storage.set(key, value);
    },
    removeState(storage, key) {
     storage.remove(key);
    },
   },
  });
```

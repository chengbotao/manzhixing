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
 // ...其他配置
 plugins: [
  persistedPlugin({
   paths: [],
  }),
 ],
});
```

## 属性&方法

|属性|说明|类型|默认值|
|---|---|---|---|
|`paths`|需要持久化状态属性集合|`(string\|Path)[]`|`[]`|
|`storage`|指定存储类型|`Storage`|`localStorage`|
|`storageKey`|存储中存储状态的键值|`string`|`__VUEX_PERSIST_PLUGIN__`|
|`getState`|自定义获取本地存储中状态的逻辑|`(storage: Storage, key: string) => Record<string, unknown>`|`(storage, key) => {return storage.getItem(key) && JSON.parse(storage.getItem(key)!)}`|
|`setState`|用于自定义将状态存储到本地存储的逻辑|`(storage: Storage, key: string, value: unknown) => void`|`(storage, key, value) => {storage.setItem(key, JSON.stringify(value));}`|
|`removeState`|用于自定义从本地存储中移除状态的逻辑|`(storage: Storage, key: string) => void`|`(storage, key) => {storage.removeItem(key)}`|
|`mutationFilter`|用于过滤哪些 `mutation` 会触发状态持久化|`(mutation: MutationPayload) => boolean`|`(mutation) => true`|
|`resetMutationType`|指定一个 `mutation` 类型重置状态为初始状态|`string`|`__RESET_STATE__`|

> 可以通过配置选项来实现对状态持久化的更加灵活的控制和定制化

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

## 重置已持久化状态恢复初始值

```ts
// 恢复所有持久化状态为初始值
store.commit("__RESET_STATE__");
// 只恢复指定持久化状态为初始值
store.commit("__RESET_STATE__", ["userInfo.name"]);
```

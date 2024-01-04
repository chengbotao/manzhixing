# @manzhixing/web-storage-adapter

用于适配 Web 本地存储的适配器, 将 `LocalStorage` 和 `SessionStorage` 的接口转换为统一的接口,以便于使用和管理。  
**适配器的主要功能是针对不同类型做序列化和反序列化的处理以及复刻[`Web Storage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage)的属性和`API`**.

封装的 `localStore` 和 `sessionStore`，几乎支持所有 `Javascript` 数据类型的直接存取，不需要任何转换!!!

## 安装

```sh
# NPM
npm install @manzhixing/web-storage-adapter

#PNPM
pnpm add @manzhixing/web-storage-adapter

# YARN
yarn add @manzhixing/web-storage-adapter
```

## 属性&方法

|属性|说明|
|---|---|
|`length`|[Storage.length](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/length):返回存储在给定的 Storage 对象中的数据项的数量|

---

|方法|参数|说明|
|---|---|---|
|`set`|`keyName`:string, `keyValue`:any|[Storage.setItem(keyName, keyValue)](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/setItem):传递了一个键名和值时，将会把键名添加到给定的 Storage 对象中，如果键名已存在，则更新其对应的值|
|`get`|`keyName`: string|[Storage.getItem(keyName)](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/getItem):传递一个键名时，将返回该键的值；而如果在给定的 Storage 对象中不存在该键，则返回 null|
|`remove`|`keyName`: string|[Storage.removeItem()](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/removeItem):传递一个键名时，将从给定的 Storage 对象中删除该键（如果它存在）|
|`clear`|-|[Storage.clear()](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/clear):清除给定 Storage 对象中存储的所有键|
|`key`|`index`: number|[Storage.key(index)](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/key):传递一个数字 n 时，返回给定存储对象中第 n 个键的名称|
|`setItem`|同`set`|
|`getItem`|同`get`|
|`removeItem`|同`remove`|

## 使用

```ts
import { localStore, sessionStore } from "@manzhixing/web-storage-adapter";
// localStore 与 sessionStore 的属性和API的使用是一致的，使用案例用localStore做演示。

// length
localStore.set("npm", "botaocheng");
localStore.set("pack", "@manzhixing/web-storage-adapter");
localStore.length; // 2

// clear
localStore.set("npm", "botaocheng");
localStore.set("pack", "@manzhixing/web-storage-adapter");
localStore.clear();
localStore.length; // 0

// key
localStore.set("npm", "botaocheng");
localStore.set("pack", "@manzhixing/web-storage-adapter");
localStore.key(0); // npm

// remove
localStore.set("npm", "botaocheng");
localStore.set("pack", "@manzhixing/web-storage-adapter");
localStore.remove("npm")
localStore.length; // 1
localStore.key(0); // pack
localStore.get("npm"); // null

// set-get 
localStore.set('str', 'botaocheng')
localStore.get('str') // 'botaocheng'

localStore.set('num', 221)
localStore.get('num') // 221

localStore.set('bool', true)
localStore.get('bool') // true

localStore.set('nan', NaN)
localStore.get('nan') // NaN

localStore.set('obj', { name: 'botaocheng' })
localStore.get('obj') // {name: 'botaocheng'}

localStore.set('arr', [{ name: 'botaocheng' }])
localStore.get('arr') // [{ name: 'botaocheng' }]

localStore.set('sym', Symbol.for('web-storage-adapter'))
localStore.get('sym') // Symbol(web-storage-adapter)
```

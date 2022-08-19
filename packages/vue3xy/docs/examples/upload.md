# Upload

> 文件上传  
> 基于 `axios` 和 `type="file" input` 实现

> _文档使用 [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 做 demo 服务使用_

<script setup lang="ts">
import {ref} from "vue"
type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';

interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}
const defaultFileList =  ref<UploadFile[]>([{
  name: "ready.js",
  size: 1225,
  status: "ready",
  uid: "1677036555013upload-file",
},{
  name: "uploading.js",
  size: 1225,
  status: "uploading",
  percent: 50,
  uid: "1677036555013upload-file",
},{
  name: "success.js",
  size: 1225,
  status: "success",
  uid: "1677036555012upload-file",
},{
  name: "error.js",
  size: 1225,
  status: "error",
  uid: "1677036555013upload-file",
}]);

const beforeUpload = (file)=>{
  console.log("beforeUpload", file)
  return true
}
const onProgress = (percentage, file)=>{
  console.log("onProgress", percentage, file)
}
const onSuccess = (data, file)=>{
  console.log("onSuccess", data, file)
}
const onError = (err, file)=>{
  console.log("onError", err, file)
}
const onChange = (file)=>{
  console.log("onChange", file)
}
const onRemove = (file)=>{
  console.log("onRemove", file)
}
</script>

## Note 注意

::: tip 💕💕💕

> 自定义类型

```ts
type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';

interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

interface DuckTyping {
  [key: string]: any;
}
```

:::

## 基础用法

<xyUpload action="https://jsonplaceholder.typicode.com/posts">
  <xyIcon icon="fa-solid fa-circle-up" size="9x"></xyIcon>
</xyUpload>

::: tip ❣️view the code❣️

```vue
<xyUpload action="https://jsonplaceholder.typicode.com/posts">
  <xyIcon icon="fa-solid fa-circle-up" size="9x"></xyIcon>
</xyUpload>
```

:::

## 支持文件拖放

<xyUpload action="https://jsonplaceholder.typicode.com/posts" drag>
  <xyIcon icon="fa-solid fa-circle-up" size="9x"></xyIcon>
</xyUpload>

::: tip ❣️view the code❣️

```vue
<xyUpload action="https://jsonplaceholder.typicode.com/posts" drag>
  <xyIcon icon="fa-solid fa-circle-up" size="9x"></xyIcon>
</xyUpload>
```

:::

## 设置默认已上传列表

<xyUpload action="https://jsonplaceholder.typicode.com/posts" drag :defaultFileList="defaultFileList">
  <xyIcon icon="fa-solid fa-circle-up" size="9x"></xyIcon>
</xyUpload>

::: tip ❣️view the code❣️

```vue
<xyUpload action="https://jsonplaceholder.typicode.com/posts" drag :defaultFileList="defaultFileList">
  <xyIcon icon="fa-solid fa-circle-up" size="9x"></xyIcon>
</xyUpload>
```

---

```ts
<script setup lang="ts" >
import {ref} from "vue"
type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';

interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}
const defaultFileList =  ref<UploadFile[]>([{
  name: "ready.js",
  size: 1225,
  status: "ready",
  uid: "1677036555013upload-file",
},{
  name: "uploading.js",
  size: 1225,
  status: "uploading",
  percent: 50,
  uid: "1677036555013upload-file",
},{
  name: "success.js",
  size: 1225,
  status: "success",
  uid: "1677036555012upload-file",
},{
  name: "error.js",
  size: 1225,
  status: "error",
  uid: "1677036555013upload-file",
}]);
</script> 
```

:::

## 文件上传的生命周期回调

> [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 对稍大点的文件就会返回上传失败

<xyUpload action="https://jsonplaceholder.typicode.com/posts" drag :beforeUpload="beforeUpload" :onProgress="onProgress" :onSuccess="onSuccess" :onError="onError" :onChange="onChange" :onRemove="onRemove">
  <xyIcon icon="fa-solid fa-circle-up" size="9x"></xyIcon>
</xyUpload>

::: tip ❣️view the code❣️

```vue
<xyUpload action="https://jsonplaceholder.typicode.com/posts" drag :beforeUpload="beforeUpload" :onProgress="onProgress" :onSuccess="onSuccess" :onError="onError" :onChange="onChange" :onRemove="onRemove">
  <xyIcon icon="fa-solid fa-circle-up" size="9x"></xyIcon>
</xyUpload>
```

---

```ts
<script setup lang="ts">
const beforeUpload = (file)=>{
  // 上传前对文件做校验判断是否可以上传
  console.log("beforeUpload", file)
  return true
}
const onProgress = (percentage, file)=>{
  // 文件上传的进度
  console.log("onProgress", percentage, file)
}
const onSuccess = (data, file)=>{
  // 文件上传成功
  console.log("onSuccess", data, file)
}
const onError = (err, file)=>{
  // 文件上传失败
  console.log("onError", err, file)
}
const onChange = (file)=>{
  // 文件上传成功或失败都会触发onChange(文件列表发生变化)
  console.log("onChange", file)
}
const onRemove = (file)=>{
  // 文件列表移除文件
  console.log("onRemove", file)
}
</script>
```

:::

## Props 属性

| 属性名            | 属性类型                                         | 说明                             | 默认值  |
| ----------------- | ------------------------------------------------ | -------------------------------- | ------- |
| `action`          | `string`                                         | 上传文件的服务器地址             | -       |
| `drag`            | `boolean`                                        | 是否支持拖放文件                 | `false` |
| `className`       | `string`                                         | 自定义`CSS`类名                  | -       |
| `defaultFileList` | `UploadFile[]`                                   | 默认已上传文件列表               | -       |
| `beforeUpload`    | `(file: File) => boolean \| Promise<File>`       | 上传前的回调函数                 | -       |
| `onProgress`      | `(percentage: number, file: UploadFile) => void` | 上传中的回调函数                 | -       |
| `onSuccess`       | `(data: any, file: UploadFile) => void`          | 上传成功的回调函数               | -       |
| `onError`         | `(err: any, file: UploadFile) => void`           | 上传失败的回调函数               | -       |
| `onChange`        | `(file: UploadFile) => void`                     | 选择文件的回调函数               | -       |
| `onRemove`        | `(file: UploadFile) => void`                     | 移除上传列中的文件回调函数       | -       |
| `headers`         | `DuckTyping`                                     | `axios headers` 配置             | -       |
| `data`            | `DuckTyping`                                     | `formData data` 添加             | -       |
| `withCredentials` | `boolean`                                        | 是否需要忽略响应中的 cookie      | -       |
| `name`            | `string`                                         | 上传文件类型设置                 | `file`  |
| `accept`          | `string`                                         | 文件上传控件中预期文件类型的提示 | -       |
| `multiple`        | `boolean`                                        | 是否允许多选                     | -       |

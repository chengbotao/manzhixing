<!--
 * @Author: Chengbotao
 * @Date: 2023-02-16 11:36:41
-->
<template>
  <div v-bind="$attrs" :class="classes">
    <div class="upload-input" style="display: inline-block" @click="handleClick">
      <template v-if="drag">
        <xyDragger key="dragger" :onFile="uploadFiles">
          <slot></slot>
        </xyDragger>
      </template>
      <slot v-else key="slot"></slot>
      <input ref="fileInput" type="file" class="file-input" style="display: none" @change="handleFileChange"
        :accept="accept" :multiple="multiple" />
    </div>
    <xyUploadList :fileList="fileList" :onRemove="handleRemove"></xyUploadList>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import classNames from "classnames";
import axios from 'axios';

defineOptions({
    name: 'XyUpload',
    inheritAttrs: false,
})

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

interface UploadProps {
  className?: string;
  action: string;
  defaultFileList?: UploadFile[];
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: UploadFile) => void;
  onSuccess?: (data: any, file: UploadFile) => void;
  onError?: (err: any, file: UploadFile) => void;
  onChange?: (file: UploadFile) => void;
  onRemove?: (file: UploadFile) => void;
  headers?: DuckTyping;
  name?: string;
  data?: DuckTyping;
  withCredentials?: boolean;
  accept?: string;
  multiple?: boolean;
  drag?: boolean;
}

// ref
const fileInput = ref<HTMLInputElement>()

// Props
const props = withDefaults(defineProps<UploadProps>(), {
  name: 'file',
});

// Emits

// data
const fileList = ref<UploadFile[]>(props.defaultFileList || []);

// computed
const classes = computed(() => {
  return classNames("xy-upload", props.className);
});

// methods
const updateFileList = (
  updateFile: UploadFile,
  updateObj: Partial<UploadFile>
) => {
  fileList.value = fileList.value.map((file) => {
    if (file.uid === updateFile.uid) {
      return { ...file, ...updateObj };
    } else {
      return file;
    }
  });

};
const handleClick = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
};
const handleRemove = (file: UploadFile) => {
  fileList.value = fileList.value.filter((item) => item.uid !== file.uid);
  props.onRemove && props.onRemove(file);
};
const handleFileChange = (event: Event) => {
  const files = (event.target as HTMLInputElement).files;
  if (!files) {
    return;
  }
  uploadFiles(files);
  if (fileInput.value) {
    fileInput.value.value = '';
  }
};

const uploadFiles = (files: FileList) => {
  let postFiles = Array.from(files);
  postFiles.forEach((file) => {
    if (!props.beforeUpload) {
      post(file);
    } else {
      const result = props.beforeUpload(file);
      if (result && result instanceof Promise) {
        // tslint:disable-next-line: no-floating-promises
        result.then((processedFile) => {
          post(processedFile);
        });
      } else if (result !== false) {
        post(file);
      }
    }
  });
};

const post = (file: File) => {
  let _file: UploadFile = {
    uid: `${Date.now()}upload-file`,
    status: 'ready',
    name: file.name,
    size: file.size,
    percent: 0,
    raw: file,
  };
  fileList.value = [_file, ...fileList.value];
  const formData = new FormData();
  formData.append(props.name, file);
  if (props.data) {
    Object.keys(props.data).forEach((key) => {
      formData.append(key, props.data![key]);
    });
  }
  axios
    .post(props.action, formData, {
      headers: {
        ...props.headers,
        'Content-Type': 'multipart/from-data',
      },
      withCredentials: !!props.withCredentials,
      onUploadProgress: (e: any) => {
        let percentage = Math.round((e.loaded * 100) / e.total) || 0;
        if (percentage < 100) {
          updateFileList(_file, { percent: percentage, status: 'uploading' });
          props.onProgress && props.onProgress(percentage, _file);
        }
      },
    })
    .then((resp: any) => {
      updateFileList(_file, { status: 'success', response: resp.data });
      props.onSuccess && props.onSuccess(resp.data, fileList.value.find(file=>file.uid===_file.uid)!);
      props.onChange && props.onChange(fileList.value.find(file=>file.uid===_file.uid)!);
    })
    .catch((err: Error) => {
      updateFileList(_file, { status: 'error', error: err });
      props.onError && props.onError(err, fileList.value.find(file=>file.uid===_file.uid)!);
      props.onChange && props.onChange(fileList.value.find(file=>file.uid===_file.uid)!);
    });
}
// public 方法
defineExpose({})

</script>

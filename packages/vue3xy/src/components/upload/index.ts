/*
 * @Author: Chengbotao
 * @Date: 2023-02-16 11:36:52
 */
import { App } from 'vue';
import Upload from './upload.vue';
import UploadList from './uploadList.vue';

Upload.install = (Vue: App) => {
  Vue.component(Upload.name, Upload);
};
UploadList.install = (Vue: App) => {
  Vue.component(UploadList.name, UploadList);
};

export { Upload, UploadList };

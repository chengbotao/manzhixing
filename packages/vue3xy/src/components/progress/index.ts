/*
 * @Author: Chengbotao
 * @Date: 2023-01-30 15:33:41
 */
import { App } from 'vue';
import Progress from './progress.vue';

Progress.install = (Vue: App) => {
  Vue.component(Progress.name, Progress);
};

export default Progress;

/*
 * @Author: Chengbotao
 * @Date: 2023-02-16 10:36:21
 */
import { App } from 'vue';
import Dragger from './dragger.vue';

Dragger.install = (Vue: App) => {
  Vue.component(Dragger.name, Dragger);
};

export default Dragger;

/*
 * @Author: Chengbotao
 * @Date: 2022-11-24 12:51:05
 */
import { App } from 'vue';
import AutoComplete from './autoComplete.vue';

AutoComplete.install = (Vue: App) => {
  Vue.component(AutoComplete.name, AutoComplete);
};

export default AutoComplete;

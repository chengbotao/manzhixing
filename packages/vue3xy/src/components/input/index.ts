/*
 * @Author: Chengbotao
 * @Date: 2022-11-19 23:47:09
 */
import { App } from 'vue';
import Input from './input.vue';

Input.install = (Vue: App) => {
  Vue.component(Input.name, Input);
};

export default Input;

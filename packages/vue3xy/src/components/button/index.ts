/*
 * @Author: Chengbotao
 * @Date: 2022-10-11 11:21:52
 */

import { App } from 'vue';
import Button from './button.vue';

Button.install = (Vue: App) => {
  Vue.component(Button.name, Button);
};

export default Button;

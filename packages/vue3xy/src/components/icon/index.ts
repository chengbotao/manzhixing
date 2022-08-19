/*
 * @Author: Chengbotao
 * @Date: 2022-11-17 23:16:38
 */

import { App } from 'vue';
import Icon from './icon.vue';

Icon.install = (Vue: App) => {
  Vue.component(Icon.name, Icon);
};

export default Icon;

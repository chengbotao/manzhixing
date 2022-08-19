/*
 * @Author: Chengbotao
 * @Date: 2023-01-29 08:56:14
 */
import { App } from 'vue';
import Menu from './menu.vue';
import MenuItem from './menuItem.vue';
import SubMenu from './subMenu.vue';

Menu.install = (Vue: App) => {
  Vue.component(Menu.name, Menu);
};
MenuItem.install = (Vue: App) => {
  Vue.component(MenuItem.name, MenuItem);
};
SubMenu.install = (Vue: App) => {
  Vue.component(SubMenu.name, SubMenu);
};

export { Menu, MenuItem, SubMenu };

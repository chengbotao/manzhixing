/*
 * @Author: Chengbotao
 * @Date: 2022-10-11 11:15:28
 */

// 组件
import { App } from 'vue';
import xyButton from './components/button/index';
import xyIcon from './components/icon/index';
import xyInput from './components/input/index';
import xyAutoComplete from './components/autoComplete/index';
import {
  Menu as xyMenu,
  MenuItem as xyMenuItem,
  SubMenu as xySubMenu,
} from './components/menu/index';
import xyProgress from './components/progress/index';
import xyDragger from './components/dragger/index';
import { Upload as xyUpload, UploadList as xyUploadList } from './components/upload/index';

// hooks

import { useDebounce } from './hooks/useDebounce';
import { useClickOutside } from './hooks/useClickOutside';
import { useEventListener } from './hooks/useEventListener';

const components: any[] = [
  xyButton,
  xyIcon,
  xyInput,
  xyAutoComplete,
  xyMenu,
  xyMenuItem,
  xySubMenu,
  xyProgress,
  xyDragger,
  xyUpload,
  xyUploadList,
];

const install = (Vue: App) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
};

export {
  xyButton,
  xyIcon,
  xyInput,
  xyAutoComplete,
  xyMenu,
  xyMenuItem,
  xySubMenu,
  xyProgress,
  xyDragger,
  xyUpload,
  xyUploadList,
  // hooks
  useDebounce,
  useClickOutside,
  useEventListener,
};

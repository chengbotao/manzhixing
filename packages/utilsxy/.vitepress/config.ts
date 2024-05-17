/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
import { defineConfig } from 'vitepress'

const ENV_PATH = process.title.includes('utilsxy:docs:dev') ? '/' : '/utilsxy/';

export default defineConfig({
  srcDir: '.',
  base: ENV_PATH,
  title: 'Utilsxy',
  head: [['link', { rel: 'icon', href: `${ENV_PATH}chengbotao.ico` }]],
  lastUpdated: false,
  appearance: false,
  rewrites: {
    // 'README.md': 'index.md',
    'src/:pkg/README.md': ':pkg/index.md',
  },
  themeConfig: {
    logo: '/chengbotao.png',
    socialLinks: [{ icon: 'github', link: 'https://github.com/chengbotao' }],
    sidebar: {
      '/': [
        {
          text: '手写代码',
          items: [
            {
              text: 'typeOf<操作数类型>',
              link: '/typeOf/',
            },
            {
              text: 'instanceOf<检测构造函数>',
              link: '/instanceOf/',
            },
          ],
        },
        {
          text: '数据操作',
          items: [
            {
              text: 'treeToFlat<树转平铺>',
              link: '/treeToFlat/',
            },
            {
              text: 'flatToTree<平铺转树>',
              link: '/flatToTree/',
            },
            {
              text: 'getNodeFromTree<从树中获取节点>',
              link: '/getNodeFromTree/',
            },
            {
              text: 'deepClone<深克隆>',
              link: '/deepClone/',
            },
            {
              text: 'getValueByReference<根据对象的引用获取值>',
              link: '/getValueByReference/',
            },
            {
              text: 'setValueByReference<根据对象的引用设置值>',
              link: '/setValueByReference/',
            },
            {
              text: 'interpolateList<字符串格式化>',
              link: '/interpolateList/',
            },
          ],
        },
        {
          text: '普通函数',
          items: [
            {
              text: 'curry<函数柯里化>',
              link: '/curry/',
            },
            {
              text: 'partial<偏函数>',
              link: '/partial/',
            },
            {
              text: 'buildURL<构建URL>',
              link: '/buildURL/',
            },
            {
              text: 'parseURL<获取URL参数>',
              link: '/parseURL/',
            },
            {
              text: 'jsonp<支持Promise>',
              link: '/jsonp/',
            },
            {
              text: 'debounce<防抖>',
              link: '/debounce/',
            },
            {
              text: 'throttle<节流>',
              link: '/throttle/',
            },
            {
              text: 'isURLSearchParams',
              link: '/isxxx/#isurlsearchparams',
            },
            {
              text: 'isEmpty',
              link: '/isxxx/#isempty',
            },
            {
              text: 'isFormData',
              link: '/isxxx/#isformdata',
            },
            {
              text: 'isPlainObject',
              link: '/isxxx/#isplainobject',
            },
            {
              text: 'getType<获取类型值>',
              link: '/getType/',
            }
          ],
        },
        {
          text: '其他工具包',
          items: [
            {
              text: 'webStorageAdapter<本地存储扩展>',
              link: '/web-storage-adapter/',
            },
            {
              text: 'vuexPersistedPlugin<持久化插件>',
              link: '/vuex-persisted-plugin/',
            },
            {
              text: 'piniaPersistedPlugin<持久化插件>',
              link: '/pinia-persisted-plugin/',
            },
          ],
        }
      ],
    },
    docFooter: {
      prev: '上一个',
      next: '下一个',
    },
    footer: {
      message:
        'Released under the <a href="https://github.com/chengbotao/manzhixing/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2024-present <a href="https://github.com/chengbotao">Chengbotao</a>',
    },
  },
});

/*
 * @Author: Chengbotao
 * @Date: 2022-10-11 12:35:59
 */
const ENV_PATH = process.title.includes("vue3xy:docs:dev") ? "/" : "/vue3xy/"

export default {
  base: ENV_PATH,
  title: 'Vue3xy',
  description: 'Vue3 UI library',
  head: [
    ["link", { rel: "icon", href: `${ENV_PATH}chengbotao.ico` }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "Vue3 UI Library" }],
    ["meta", { property: "og:description", content: "通过开发组件库学习 Vue3、 Typescript 和工程化" }],
    ["meta", { property: "og:image", content: "https://chengbotao.github.io/vue3xy/chengbotao.png" }],
    ["meta", { property: "og:url", content: "https://chengbotao.github.io/vue3xy" }]
  ],
  lastUpdated: false,
  appearance: false,
  themeConfig: {
    logo: "/chengbotao.png",
    socialLinks: [
      { icon: "github", link: "https://github.com/chengbotao" }
    ],
    sidebar: {
      "/examples/": [
        {
          text: "待办清单",
          link: "/examples/todo"
        },
        {
          text: "基础组件",
          items: [
            {
              text: "Icon<图标>",
              link: "/examples/icon",
            },
            {
              text: "Button<按钮>",
              link: "/examples/button",
            },
            {
              text: "Input<输入框>",
              link: "/examples/input",
            },
            {
              text: "AutoComplete<补全输入框>",
              link: "/examples/autoComplete",
            },
            {
              text: "Menu<菜单>",
              link: "/examples/menu",
            },
            {
              text: "Progress<进度条>",
              link: "/examples/progress",
            },
            {
              text: "Dragger<拖放容器>",
              link: "/examples/dragger",
            },
            {
              text: "Upload<上传>",
              link: "/examples/upload",
            },
          ],
        },
        {
          text: "函数式组件",
          items: [
            {
              text: "Alert",
              link: "/examples/alert"
            }
          ]
        },
        {
          text: "hooks 函数",
          items: [
            {
              text: "useEventListener<监听>",
              link: "/examples/useEventListener",
            },
            {
              text: "useDebounce<防抖>",
              link: "/examples/useDebounce",
            },
            {
              text: "useClickOutside<点击外面>",
              link: "/examples/useClickOutside",
            },
          ]
        }],
    },
    docFooter: {
      prev: '上一个组件',
      next: '下一个组件'
    }
  }

}

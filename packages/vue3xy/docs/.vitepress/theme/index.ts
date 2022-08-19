/*
 * @Author: Chengbotao
 * @Date: 2022-10-11 15:34:39
 */
import DefaultTheme from "vitepress/theme";
import vue3xy from "../../../src/main";
import "../../../../themes/src/index.scss";
import "./custom.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);

export default {
    ...DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        // app is the Vue 3 app instance from `createApp()`.
        // router is VitePress' custom router. `siteData` is
        // a `ref` of current site-level metadata.
        app.use(vue3xy)
    }
}

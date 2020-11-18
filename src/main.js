import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

const app = createApp(App)

import antv from "@/plugins/antv"
antv.forEach(component => {
    app.component(component.name, component)
})

import { message, notification } from "ant-design-vue"
app.config.globalProperties.$message = message
app.config.globalProperties.$notice = notification

import "./assets/css/app.less"
import "./assets/css/style.css"

import waves from "@/directive/waves/waves"
app.directive("waves", waves)

app.use(store)
    .use(router)
    .mount("#app")

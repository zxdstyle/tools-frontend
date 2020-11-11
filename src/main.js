import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import "./assets/css/app.scss"

const app = createApp(App)

import { Dropdown, Menu, Tooltip } from "ant-design-vue"
app.component(Tooltip.name, Tooltip)
app.component(Dropdown.name, Dropdown)
app.component(Menu.name, Menu)
app.component(Menu.Item.name, Menu.Item)

import waves from "@/directive/waves/waves"
app.directive("waves", waves)

app.use(store)
    .use(router)
    .mount("#app")

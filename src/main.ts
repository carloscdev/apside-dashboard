import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import * as BiIcons from "oh-vue-icons/icons/bi";

const Bi = Object.values({ ...BiIcons });
addIcons(...Bi);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");

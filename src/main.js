import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";


import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'




import home from './components/text.vue'


const routes =[
{path:'/',component:home},


]

const router = createRouter({
  history: createWebHistory(),
  routes,
});


const app = createApp(App);

app.use(router).mount("#app");

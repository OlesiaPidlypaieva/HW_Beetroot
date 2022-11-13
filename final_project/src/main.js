import { createApp } from 'vue'
import App from './App.vue'
import 'animate.css'


import Paginate from "vuejs-paginate-next";
// import VueAwesomePaginate from "vue-awesome-paginate";
// import "vue-awesome-paginate/dist/style.css";
import router from "@/router/router";


createApp(App)
   .component('Paginate' , Paginate)
   .use(router)
   // .use(VueAwesomePaginate)
   .mount('#app')

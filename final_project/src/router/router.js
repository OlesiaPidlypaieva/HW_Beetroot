import { createWebHistory, createRouter } from "vue-router";
import FirstScreen from "@/components/FirstScreen.vue";
import HistoryScreen from "@/components/HistoryScreen.vue";
import MenuScreen from "@/components/MenuScreen.vue";
import PopularCoctails from "@/components/PopularCoctails.vue";
import CoctailScreen from "@/components/CoctailScreen.vue";
import RandomCoctails from "@/components/RandomCoctails.vue";
import SearchCoctails from "@/components/SearchCoctails.vue";
import ContactsScreen from "@/components/ContactsScreen.vue";

const routes = [
   {
      path: "/",
      name: "Home",
      component: FirstScreen,
   },

   {
   path: "/about",
   name: "About",
   component: HistoryScreen,
},

{
   path: "/coctails",
   name: "coctails",
   component: MenuScreen,
},
{
   path: "/popular",
   name: "popular",
   component: PopularCoctails,
},

{
   path: "/random",
   name: "random",
   component: RandomCoctails,
},
{
path: "/coctail/:idDrink",
name: "coctail",
component: CoctailScreen,
},

{
   path: "/search",
   name: "search",
   component: SearchCoctails,
},

{
   path: "/contacts",
   name: "contacts",
   component: ContactsScreen,
}



];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

export default router;
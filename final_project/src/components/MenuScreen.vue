<template>
   <section class="menu-screen">
         <div class="menu-screen__wrapper container">
            <div class="menu-screen__title main-title">{{title}}</div>
            <div class="menu-screen__menu-list">
               <div class="menu-screen__menu-item" v-for="item in menuList" :key="item.menuList">
                  <router-link v-bind:to="item.src">
                     <img v-bind:src="item.url" v-bind:alt="item.alt">
                     <h3>{{item.text}}</h3>
                  </router-link>
               </div>
            </div>
         </div>
   </section>
</template>

<script>
export default {
name: 'MenuScreen',


data () {
   return {
      title: 'So...lets start',
      
      menuList: [
         {
            url: 'img/first_screen/3.jpeg',
            alt: 'coctail',
            text: 'Popular coctails',
            src:'/popular'
         },
         {
            url: 'img/first_screen/7.jpeg',
            alt: 'coctail',
            text: 'Random game',
            src:'/random'
         },
         {
            url: 'img/first_screen/4.jpeg',
            alt: 'coctail',
            text: 'Search you favourite',
            src:'/search'
         }
      ]
   }
},

}


</script>

<style>
</style>
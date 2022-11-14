<template>
   <header :class="['header' , isActive ? activeClass : '' ]">
      <div class="header__wrapper container">
         <div class="header__logo main-title"><h1 class="main-title">{{logo}}</h1></div>
         <div :class="['header__nav' , isActive ? activeClass : '' ]">
         <MainNav v-bind:menuItems="menuItems" v-on:click="menuDisActive"/>
         </div>
         <div v-on:click="menuActive" :class="['header__burger-menu' , isActive ? activeClass : '']">
            <span></span>
         </div>
      </div>
   </header>
</template>

<script>
import MainNav from '@/components/menu/MainNav.vue';
export default {
name: 'HeaderComp',

components: {
   MainNav,
},

data () {
   return {
      logo: 'C.o.c.t.a.i.l.s.',
      
      menuItems: [
         {
            url: '/',
            text: 'home'},

         {
            url:'/about',
            text: 'about'
         },
         {  
            url:'/coctails',
            text: 'coctails'
         },

         {
            url:'/contacts',
            text: 'contacts'}
      ],

      isActive:false,
      activeClass:'active',
   }
},


methods: {
   menuActive(){
      this.isActive = !this.isActive;
   },

   menuDisActive() {
      this.isActive = false;
   }
},


   }
</script>

<style>
</style>
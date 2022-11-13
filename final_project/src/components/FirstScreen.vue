<template>
   <section class="first-screen">
         <div class="first-screen__wrapper container">
            <div class="first-screen__description">
               <div class="first-screen__img">
                  <img v-bind:src="img.url" v-bind:alt="img.alt">
               </div>
               <div class="first-screen__text">
                  <h2 class="animate__animated animate__fadeInDown">{{tagline}}</h2>
               </div>
            </div>
         </div>
   </section>
</template>

<script>
export default {
name: 'FirstScreen',

components: {
   
},

data () {
   return {
      img: {
         alt: 'coctail',
         url: 'img/first_screen/1.jpeg'
      },
      tagline:'Discover the New world of tastes'   
   }
},


methods: {
      
   }
}


</script>

<style>

</style>
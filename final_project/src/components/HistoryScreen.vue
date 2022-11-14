<template>
   <section class="history-screen">
         <div class="history-screen__wrapper container">
            <div class="history-screen__description">
               <div class="history-screen__text">
                  <h1 class="history-screen__title">{{title}}</h1>
                  <h2>{{tagline}}</h2>
                  <h3>{{theory}}</h3>
                  <h4>{{description}}</h4>
               </div>
               <div class="history-screen__img">
                  <img v-bind:src="img.url" v-bind:alt="img.alt">
               </div>
            </div>
         </div>
   </section>
</template>

<script>
export default {
name: 'HistoryScreen',

components: {
   
},

data () {
   return {
      title: 'Before our journey...',
      img: {
         alt: 'coctail',
         url: 'img/first_screen/2.jpeg'
      },
      tagline:'WHY ARE COCKTAILS CALLED COCKTAILS?',
      theory: 'DOCKED HORSES THEORY',
      description: 'The term cock-tailed comes from the United Kingdom and was used to describe a horse with a docked or clipped tail. This was an elitism subject at the time as a docked tail was a sign that the racehorse was not a pedigree but was instead of mixed breed. The cock-tailed horse was therefore considered to be of mixed blood or mixed breed and the term “mixed” was then believed to have been associated with a mixed drink which could have coined the term cocktail.'   
   }
},


methods: {
      
   }
}


</script>

<style>

</style>
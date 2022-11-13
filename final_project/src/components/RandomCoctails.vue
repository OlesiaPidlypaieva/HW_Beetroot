<template>
   <section class="coctail">
      <div class="coctail__wrapper container">
         <h3 class="coctail__title main-title ">{{coctail.strDrink}}</h3>
         <div class="coctail__information">
            <div class="coctail__img"><img v-bind:src="coctail.strDrinkThumb" alt=""></div>
            <div class="coctail__description description">
               <h3 class="coctail__ingredients main-title ">Ingredients</h3>
               <div class="description__items">
                  <div class="descrtiption__item">{{coctail.strIngredient1}}</div>
                  <div class="descrtiption__item">{{coctail.strMeasure1}}</div>
                  <div class="descrtiption__item">{{coctail.strIngredient2}}</div>
                  <div class="descrtiption__item">{{coctail.strMeasure2}}</div>
                  <div class="descrtiption__item">{{coctail.strIngredient3}}</div>
                  <div class="descrtiption__item">{{coctail.strMeasure3}}</div>
                  <div class="descrtiption__item">{{coctail.strIngredient4}}</div>
                  <div class="descrtiption__item">{{coctail.strMeasure4}}</div>
                  <div class="descrtiption__item">{{coctail.strIngredient5}}</div>
                  <div class="descrtiption__item">{{coctail.strMeasure5}}</div>
                  <div class="descrtiption__item">{{coctail.strIngredient6}}</div>
                  <div class="descrtiption__item">{{coctail.strMeasure6}}</div>
                  <div class="descrtiption__item">{{coctail.strIngredient7}}</div>
                  <div class="descrtiption__item">{{coctail.strMeasure7}}</div>
               </div>
               <h3 class="coctail__instructions main-title ">Instructions</h3>
               <div class="coctail__instruction">{{coctail.strInstructions}}</div>
            </div>
         </div>
         <input class="random__button" type="button" value="One more, please" @click="Coctail">
      </div>
      
      
   </section>
</template>

<script>
import axios from 'axios';

export default {
name: 'RandomCoctails',

data () {
   return {
      coctail: ' ',
      apiUrl: 'https://the-cocktail-db.p.rapidapi.com/random.php?',
		apiKey: 'rapidapi-key=85c391443bmshc359155c6d6e60dp1b3750jsn9c6a99343cb2',
      error: [],
   }
},


methods: {
   Coctail() {
	axios.get(this.apiUrl+this.apiKey)
	.then (response => {
		this.coctail = response.data.drinks[0];
      window.scrollTo(0,0);
	})

	.catch(e => {
            this.error.push(e)
         })
   }, 
},	

mounted() {
   this.Coctail();
   }
}

</script>

<template>
   <section class="coctail">
      <div class="coctail__wrapper container">
         <h3 class="coctail__title main-title ">{{coctailName}}</h3>
         <div class="coctail__information">
            <div class="coctail__img"><img v-bind:src="coctailImg" alt=""></div>
            <div class="coctail__description description">
               <h3 class="coctail__ingredients main-title ">Ingredients</h3>
               <div class="description__items">
                  <div class="descrtiption__item">{{coctailIngridient1}}</div>
                  <div class="descrtiption__item">{{coctailMeasure1}}</div>
                  <div class="descrtiption__item">{{coctailIngridient2}}</div>
                  <div class="descrtiption__item">{{coctailMeasure2}}</div>
                  <div class="descrtiption__item">{{coctailIngridient3}}</div>
                  <div class="descrtiption__item">{{coctailMeasure3}}</div>
                  <div class="descrtiption__item">{{coctailIngridient4}}</div>
                  <div class="descrtiption__item">{{coctailMeasure4}}</div>
                  <div class="descrtiption__item">{{coctailIngridient5}}</div>
                  <div class="descrtiption__item">{{coctailMeasure5}}</div>
                  <div class="descrtiption__item">{{coctailIngridient6}}</div>
                  <div class="descrtiption__item">{{coctailMeasure6}}</div>
                  <div class="descrtiption__item">{{coctailIngridient7}}</div>
                  <div class="descrtiption__item">{{coctailMeasure7}}</div>
               </div>
               <h3 class="coctail__instructions main-title ">Instructions</h3>
               <div class="coctail__instruction">{{coctailInstruction}}</div>
            </div>
         </div>
      </div>
      
      
   </section>
</template>

<script>

import { useRoute } from 'vue-router';
import axios from 'axios';

export default {
name: 'CoctailScreen',

data () {
   return {
      coctail: null,
      coctailName: ' ',
      coctailImg: null,
      coctailIngridient1: ' ',
      coctailIngridient2: ' ',
      coctailIngridient3: ' ',
      coctailIngridient4: ' ',
      coctailIngridient5: ' ',
      coctailIngridient6: ' ',
      coctailIngridient7: ' ',
      coctailMeasure1: ' ',
      coctailMeasure2: ' ',
      coctailMeasure3: ' ',
      coctailMeasure4: ' ',
      coctailMeasure5: ' ',
      coctailMeasure6: ' ',
      coctailMeasure7: ' ',
      coctailInstruction: ' ',
      apiUrl: 'https://the-cocktail-db.p.rapidapi.com/lookup.php?i=',
		apiKey: 'rapidapi-key=85c391443bmshc359155c6d6e60dp1b3750jsn9c6a99343cb2',
      id:useRoute().params.idDrink,
   }
},


methods: {
   Coctail() {
	axios.get(this.apiUrl+this.id+'&'+this.apiKey)
	.then (response => {
		this.coctail = response.data.drinks[0];
      this.coctailName = response.data.drinks[0].strDrink;
      this.coctailImg = response.data.drinks[0].strDrinkThumb;
      this.coctailIngridient1 = response.data.drinks[0].strIngredient1;
      this.coctailMeasure1 = response.data.drinks[0].strMeasure1;
      this.coctailIngridient2 = response.data.drinks[0].strIngredient2;
      this.coctailMeasure2 = response.data.drinks[0].strMeasure2;
      this.coctailIngridient3 = response.data.drinks[0].strIngredient3;
      this.coctailMeasure3 = response.data.drinks[0].strMeasure3;
      this.coctailIngridient4 = response.data.drinks[0].strIngredient4;
      this.coctailMeasure4 = response.data.drinks[0].strMeasure4;
      this.coctailIngridient5 = response.data.drinks[0].strIngredient5;
      this.coctailMeasure5 = response.data.drinks[0].strMeasure5;
      this.coctailIngridient6 = response.data.drinks[0].strIngredient6;
      this.coctailMeasure6 = response.data.drinks[0].strMeasure6;
      this.coctailIngridient7 = response.data.drinks[0].strIngredient7;
      this.coctailMeasure7 = response.data.drinks[0].strMeasure7;
      this.coctailInstruction = response.data.drinks[0].strInstructions;
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

<style>
@import '../../public/dist/css/style.min.css'
</style>
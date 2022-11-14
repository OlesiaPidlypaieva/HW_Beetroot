<template>
<section class="popular">
	<div class="popular__wrapper container">
		<div class="main-title">Let's try something spesial...</div>
		<swiper
		:modules="modules"
		:slides-per-view="4"
		:space-between="50"
		:breakpoints="breakpoints"
		:pagination="{clickable:true}"
		:autoplay="{
			delay: 2000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true
		}"
		@swiper="onSwiper"
		@slideChange="onSlideChange"
		>
			<swiper-slide class="popular__drink" v-for="drink in coctails" :key="drink.coctails">
			<router-link v-bind:to="'/coctail/' + drink.idDrink">
			<img class="popular__drink-img" v-bind:src="drink.strDrinkThumb">
			<h1 class='popular__drink-title'>{{drink.strDrink}}</h1>
			</router-link>
			</swiper-slide>
		</swiper>
	</div>
</section>


</template>

<script>
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Autoplay, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
name: 'PopularCoctails',

components: {
		Swiper,
      SwiperSlide,
},

setup() {
      const onSwiper = (swiper) => {
      console.log(swiper);
      };
      const onSlideChange = () => {
      console.log('slide change');
      };
      return {
      onSwiper,
      onSlideChange,
		modules: [Autoplay, Pagination]
      };
   },

data () {
	return {
		coctails: null, 
		apiUrl: 'https://the-cocktail-db.p.rapidapi.com/popular.php?',
		apiKey: 'rapidapi-key=85c391443bmshc359155c6d6e60dp1b3750jsn9c6a99343cb2',
		error: [],
		breakpoints: {
			300: {
				slidesPerView: 1,   
			},
			425: {
				slidesPerView: 1,   
			},

			550: {
				slidesPerView: 2,   
			},

			768:{
				slidesPerView: 2,   
			},
			769:{
				slidesPerView: 4,   
			}
		}
	}
},

methods: {

popularCoctails() {
	axios.get(this.apiUrl+this.apiKey)
	.then (response => {
		this.coctails = response.data.drinks;
		window.scrollTo(0,0);
	})

	.catch(e => {
            this.error.push(e)
         })
} 
},

mounted() {
   this.popularCoctails();
}
	}
</script>


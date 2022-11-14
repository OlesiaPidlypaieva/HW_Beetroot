<template>
<section class="search-coctails">
	<div class="search-coctails__wrapper container">
		<div class="search-coctails__form">
			<input class='search-coctails__input' type="text" v-model="name" placeholder="Please, input your favourite coctail...">
		</div>
		<div class="search-coctails__drinks">
			<div class="search-coctails__drink" v-for="drink in coctails_list" :key="drink.coctails_list">
				<router-link v-bind:to="'/coctail/' + drink.idDrink">
			<img class="search-coctails__img" v-bind:src="drink.strDrinkThumb">
			<h1 class="search-coctails__name">{{drink.strDrink}}</h1>
		</router-link>
		</div>
		</div>
		<nav id="pagination">
			<paginate
					:v-model = "page"
					:page-count="pagesCount"
					:page-range="5"
					:margin-pages="2"
					:click-handler="changePage"
					:prev-text="'Prev'"
					:next-text="'Next'"
					:container-class="'search_pagination'"
					:page-class="'search_page-item'"
				>
			</paginate>
		</nav>
	</div>
</section>
</template>

<script>
import axios from 'axios';

export default {
name: 'SearchCoctails',

data () {
	return {
		coctails: null,
		coctails_list: [],
		coctailName: null,
		name: null,
		pagination_items_total: null,
		pagination_items_per_page: 12,
		page: 1,
		pagination_offset:0,
		apiUrl: 'https://the-cocktail-db.p.rapidapi.com/search.php?s=',
		apiKey: 'rapidapi-key=85c391443bmshc359155c6d6e60dp1b3750jsn9c6a99343cb2',
		error: [],
	}
},

methods: {
	allCoctails() {
	axios.get(this.apiUrl+'&'+this.apiKey)
	.then (response => {
		this.coctails = response.data.drinks;
		this.pagination_items_total = this.coctails.length;
		this.coctails_list = this.coctails.splice(this.pagination_offset, this.pagination_items_per_page);
	})

	.catch(e => {
            this.error.push(e)
         })
}, 


searchCoctails() {
	axios.get(this.apiUrl+this.name+'&'+this.apiKey)
	.then (response => {
		this.coctails = response.data.drinks;
		this.coctails_list = this.coctails.splice(this.pagination_offset, this.pagination_items_per_page);
	})

	.catch(e => {
            this.error.push(e)
         })
}, 

changePage(page_num){
	this.page = page_num;
	this.pagination_offset=(this.pagination_items_per_page * page_num) - this.pagination_items_per_page;

	if (page_num === 1) {
		this.$router.push('/search')
	} else {
		this.$router.push(`/search?page=${page_num}`)
	}
	this.coctails_list = this.coctails.splice(this.pagination_offset, this.pagination_items_per_page)
	window.scrollTo(0,0)
},	

},	

mounted() {
	this.allCoctails();
},

watch: {
		name(Newname) {
			this.name = Newname,
			this.searchCoctails();
		}
		
	},

computed: {
	pagesCount() {
		return Math.ceil(this.pagination_items_total/this.pagination_items_per_page)
	}
},
}
</script>

<style scoped>

</style>
<template>
  <HeaderComp/>
  <MainComp/>
  <!-- <PopularCoctails/>
  <SearchCoctails/> -->
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
// import SearchCoctails from './components/SearchCoctails.vue';
// import PopularCoctails from './components/PopularCoctails.vue';
import MainComp from './components/MainComp.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
    // SearchCoctails,
    // PopularCoctails,
    MainComp
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

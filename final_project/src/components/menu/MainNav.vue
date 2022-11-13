<template>
      <nav>
         <ul>
            <li v-for="item in menuItems" :key="item.menuItems"><router-link v-bind:to="item.url">{{item.text}}</router-link></li>
         </ul>
      </nav>
</template>

<script>

export default {
name: 'MainNav',

      
      props: {
         menuItems: []
      }
}


</script>

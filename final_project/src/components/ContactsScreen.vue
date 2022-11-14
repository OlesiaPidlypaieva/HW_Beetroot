<template>
   <section class="contacts-screen">
         <div class="contacts-screen__wrapper container">
            <div class="contacts-screen__contacts">
                  <h3 class="contacts-screen__title main-title">{{title}}</h3>
                  <h4>{{contactEmail}}</h4>
                  <h3 class="contacts-screen__title main-title">{{title2}}</h3>
                  <LoginForm/>  
         </div>      
            <div class="contact-screen__img">
                  <img v-bind:src="img.url" v-bind:alt="img.alt">
               </div>
         </div>
   </section>
</template>

<script>
import LoginForm from './LoginForm.vue';
export default {

name: 'ContactsScreen',
components: {
      LoginForm
   },
data () {
   return {
      title: 'Our contacts',
      title2: 'If you have any advisies:',
      img: {
         alt: 'coctail',
         url: 'img/first_screen/9.jpeg'
      },
      contactEmail:'Vorobyshe4ek@gmail.com',
      }
   },
}


</script>

<style>

.contact__form {
   display: flex;
   flex-direction: column;
   gap: 10px;
}

</style>
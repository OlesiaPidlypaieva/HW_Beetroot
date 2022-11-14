<template>
  <form @submit.prevent="onSubmit" class="contact__form">
    <BaseInput
      label="Email"
      type="email"
      v-model="email"
      :error="emailError"
    />

    <BaseInput
      label="Name"
      type="text"
      v-model="name"
      :error="nameError"
    />

    <BaseInput
      label="Advise"
      type="text"
      v-model="advise"
      :error="adviseError"
    />

    <BaseButton
      type="submit"
      class="-fill-gradient"
    >
    Submit
    </BaseButton>
  </form>
</template>

<script>
import { useField } from 'vee-validate'
import BaseButton from './BaseButton.vue'
import BaseInput from './BaseInput.vue'

export default {
  name: 'LoginForm',
  components: {
    BaseButton,
    BaseInput
  },
  setup () {
    function onSubmit () {
      if (name.value && email.value && advise.value) {
      alert('Submitted')}
      else {
        alert ('Please fill required fields')
      }
    }

    const { value: email, errorMessage: emailError} = useField('email', function (value) {
      if (!value) return 'This field is required'

      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!regex.test(String(value).toLowerCase())) {
        return 'Please enter a valid email address'
      }

      return true
    })

    const { value: name, errorMessage: nameError } = useField('name', function (value) {
      if (!value) return 'This field is required'
      console.log(name);

      return true
    })

    const { value: advise, errorMessage: adviseError} = useField('advise', function (value) {
      if (!value) return 'This field is required'

      return true
    })

    return {
      email,
      emailError,
      name,
      nameError,
      advise,
      adviseError,
      onSubmit
    }
  }
}
</script>



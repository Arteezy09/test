<template>
  <v-text-field
    :value="email"  
    @input="onInput"
    :rules="emailRules"
    outlined
    dense
  ></v-text-field>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      // требования для почтового адреса
      emailRules: [
        v => !!v || 'Это поле необходимо заполнить.',
      ]
    }
  },

  methods: {
    onInput(event) {
      this.$emit('update:email', event)
    }
  }
}
</script>
<template>
  <v-text-field
    :value="name"  
    @input="onInput"
    :rules="nameRules"
    outlined
    dense
  ></v-text-field>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      // требования для имени
      nameRules: [
        v => !!v || 'Это поле необходимо заполнить.',
      ]
    }
  },

  methods: {
    onInput(event) {
      this.$emit('update:name', event)
    }
  }
}
</script>
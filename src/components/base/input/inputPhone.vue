<template>
  <v-text-field
    :value="phone"  
    @input="onInput"
    :rules="phoneRules"
    outlined
    dense
  ></v-text-field>
</template>

<script>
export default {
  props: {
    phone: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      // требования для номера телефона
      phoneRules: [
        v => !!v || 'Это поле необходимо заполнить.',
      ]
    }
  },

  methods: {
    onInput(event) {
      this.$emit('update:phone', event)
    }
  }
}
</script>
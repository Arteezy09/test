<template>
  <v-btn
    :width="width"
    :color="color"
    :outlined="outlined"
    :dark="dark"
    @click="onClick"
  >
    <slot>Продолжить</slot>
  </v-btn>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 300
    },
    color: {
      type: String,
      default: '#FFC800'
    },
    outlined: {
      type: Boolean,
      default: true
    },
    dark: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function,
      default: () => 1
    }
  }
}
</script>
<template>
  <v-card class="cart-empty">
    <p>В вашей корзине пусто?</p>
    <p>Это не страшно!</p>
    <btn-large :onClick="toMain" color="#673AB7" class="mt-5">Перейти к покупкам</btn-large>
  </v-card>
</template>

<script>
import btnLarge from '@/components/base/button/btnLarge.vue'

export default {
  name: 'cart-empty',

  methods: {
    toMain() {
      this.$router.push('/')
    }
  },

  components: {
    btnLarge
  }
}
</script>

<style scoped>
.cart-empty {
  text-align: center;
  padding: 40px 0;
}
</style>
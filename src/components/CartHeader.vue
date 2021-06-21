<template>
  <div class="cart-header">
    <text-header>Оформление заказа</text-header>
    <btn-text :onClick="toMain">Вернуться к покупкам</btn-text>
  </div>
</template>

<script>
import textHeader from '@/components/base/text/textHeader.vue'
import btnText from '@/components/base/button/btnText.vue'

export default {
  name: 'cart-header',

  methods: {
    toMain() {
      this.$router.push('/')
    }
  },

  components: {
    textHeader,
    btnText
  }
}
</script>

<style scoped>
.cart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}

@media screen and (max-width: 640px) {
  .cart-header {
    display: block;
  }
}
</style>
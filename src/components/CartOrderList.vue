<template>
  <v-card class="cart-order-list">

    <div class="header">
      <text-header :small="true">Состав заказа</text-header>
      <btn-text :onClick="prevState">Изменить</btn-text>
    </div>

    <products></products>
    <total class="mt-5"></total>

  </v-card>
</template>

<script>
import total from '@/components/base/total.vue'
import products from '@/components/base/products.vue'
import btnText from '@/components/base/button/btnText.vue'
import textHeader from '@/components/base/text/textHeader.vue'

export default {
  name: 'cart-order-list',

  methods: {
    prevState() {
      this.$emit('prev-state')
    }
  },

  components: {
    total,
    products,
    btnText,
    textHeader
  }
}
</script>

<style scoped>
.cart-order-list {
  padding: 40px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 640px) {
  .header {
    display: block;
  }
}
</style>
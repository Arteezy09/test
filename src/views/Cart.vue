<template>
  <v-container>

    <CartHeader></CartHeader>

    <CartEmpty v-if="products.length === 0" class="mt-10"></CartEmpty>

    <div v-else-if="state === 1" class="mt-10">
      <v-card>
        <CartProduct v-for="product in products" :key="product.id" :product="product"></CartProduct>
      </v-card>
      <CartTotalPrice @next-state="state += 1" class="mt-10"></CartTotalPrice>
    </div>

    <div v-else class="mt-10">
      <CartOrderList @prev-state="state -= 1"></CartOrderList>
      <CartAddressee class="mt-10"></CartAddressee>
    </div>

  </v-container>
</template>

<script>
import CartHeader from '@/components/CartHeader.vue'
import CartEmpty from '@/components/CartEmpty.vue'
import CartProduct from '@/components/CartProduct.vue'
import CartTotalPrice from '@/components/CartTotalPrice.vue'
import CartOrderList from '@/components/CartOrderList.vue'
import CartAddressee from '@/components/CartAddressee.vue'

export default {
  name: 'Cart',

  data: () => ({
    state: 1
  }),

  computed: {
    products() {
      return this.$store.getters.items
    }
  },

  components: {
    CartHeader,
    CartEmpty,
    CartProduct,
    CartTotalPrice,
    CartOrderList,
    CartAddressee
  }
}
</script>
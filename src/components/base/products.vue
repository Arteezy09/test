<template>
  <div class="products">
    <div v-for="product in products" :key="product.id" class="product">

      <p>{{ product.full_name }}</p>

      <text-subtitle class="product-price">
        {{ product.total_count + ' шт. x ' + product.offer.price + ' ₽' }}
      </text-subtitle>

    </div> 
  </div>
</template>

<script>
import textSubtitle from '@/components/base/text/textSubtitle.vue'

export default {
  computed: {
    products() {
      return this.$store.getters.items
    }
  },

  components: {
    textSubtitle
  }
}
</script>

<style scoped>
.products {
  padding: 20px 0;
}

.product {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 12px;
}

.product-price {
  margin-top: 2px;
  margin-left: 6px;
}
</style>
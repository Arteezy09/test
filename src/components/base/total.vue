<template>
  <div class="total">
    <span v-if="showCount">{{ totalCount }}</span>
    <span v-else>Итого к оплате</span>

    <text-bold >{{ totalPrice }}</text-bold> 
  </div>
</template>

<script>
import textBold from '@/components/base/text/textBold.vue'

export default {
  props: {
    showCount: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    totalCount() {
      return `Итого товаров: (${this.$store.getters.totalCount})`
    },

    totalPrice() {
      return `${this.$store.getters.totalPrice} ₽`
    }
  },

  components: {
    textBold
  }
}
</script>

<style scoped>
.total {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
}
</style>
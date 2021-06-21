<template>
  <div class="price">
    
    <text-subtitle v-if="price_old !== null" :line="true">
      {{ price_old + ' ₽' }}
    </text-subtitle>

    <text-bold>{{ price_full }}</text-bold>
    
    <text-subtitle v-if="count !== 1">{{ price_count }}</text-subtitle>

  </div>
</template>

<script>
import textBold from '@/components/base/text/textBold.vue'
import textSubtitle from '@/components/base/text/textSubtitle.vue'

export default {
  props: {
    price_old: {
      type: Number,
      default: null
    },
    price: {
      type: Number,
      required: true
    },
    count: {
      type: Number,
      default: 1
    }
  },

  computed: {
    price_full() {
      return `${this.count * this.price} ₽`
    },

    price_count() {
      return `${this.count} шт. x ${this.price} ₽`
    }
  },

  components: {
    textBold,
    textSubtitle
  }
}
</script>

<style scoped>
.price {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 220px;
  height: 120px;
}
</style>
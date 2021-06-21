<template>
  <v-card class="cart-total-price">
    <div class="container-center">

      <total :showCount="false"></total>  
        
      <btn-large :onClick="nextState" :outlined="false" :dark="true" class="mt-5">
        Продолжить оформление
      </btn-large>

    </div>
  </v-card>
</template>

<script>
import total from '@/components/base/total.vue'
import btnLarge from '@/components/base/button/btnLarge.vue'

export default {
  name: 'cart-total-price',

  methods: {
    nextState() {
      this.$emit('next-state')
    }
  },

  components: {
    total,
    btnLarge
  }
}
</script>

<style scoped>
.cart-total-price {
  padding: 30px 0;
}

.container-center {
  width: 300px;
  margin: 0 auto;
}
</style>
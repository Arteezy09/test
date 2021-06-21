<template>
  <div class="cart-product">

    <div class="product">
      <div class="product_info-block">
        <preview-image :src="product.preview_image"></preview-image>

        <div class="product_text-block">
          <text-subtitle>{{ product.category.name }}</text-subtitle>
          <text-title>{{ product.full_name }}</text-title>
          <rating :rating="product.rating"></rating>
          <btn-text>{{ product.attr.comments_count + ' комментариев' }}</btn-text>
        </div>
      </div>

      <div class="product_actions-block">
        <div class="product_price-block">
          <quantity  
            :count="product.total_count"
            :quantity="product.offer.quantity"
            @plus="increaseItem"
            @minus="decreaseItem"
            class="mt-5"
          ></quantity>

          <price
            :count="product.total_count"
            :price_old="product.offer.price_old"
            :price="product.offer.price"
          ></price>
        </div>

        <btn-text :onClick="deleteItem">Удалить</btn-text>
      </div>
    </div>

    <v-divider></v-divider>
  </div>
</template>

<script>
import price from '@/components/base/price.vue'
import quantity from '@/components/base/quantity.vue'
import rating from '@/components/base/rating.vue'
import btnText from '@/components/base/button/btnText.vue'
import previewImage from '@/components/base/image/previewImage.vue'
import textSubtitle from '@/components/base/text/textSubtitle.vue'
import textTitle from '@/components/base/text/textTitle.vue'

export default {
  name: 'cart-product',

  props: {
    product: {
      type: Object,
      required: true
    }
  },

  methods: {
    increaseItem() {
      this.$store.dispatch('increaseItem', this.product.id) 
    },

    decreaseItem() {
      this.$store.dispatch('decreaseItem', this.product.id)  
    },

    deleteItem() {
      this.$store.dispatch('deleteItem', this.product.id)
    }
  },

  components: {
    price,
    quantity,
    rating,
    btnText,
    previewImage,
    textSubtitle,
    textTitle
  }
}
</script>

<style scoped>
.cart-product {
  padding-top: 4px;
}

.product {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 20px;
}

.product_info-block {
  display: flex;
  flex-wrap: nowrap;
}

.product_text-block {
  padding: 0 20px;
}

.product_text-block div:last-child {
  margin-top: 32px;
}

.product_actions-block {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
}

.product_price-block {
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
}
</style>
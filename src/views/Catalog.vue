<!-- Каталог сделал по-быстрому (не до конца и одним компонентом) для проверки работы -->
<template>
  <v-container>

    <v-text-field v-model="input" label="Поиск" outlined class="mx-10"></v-text-field>
    
    <v-card v-for="product in filterProducts" :key="product.id" class="ma-10 pa-10">
      <v-card-title>{{ product.name }}</v-card-title>
      <v-card-subtitle>{{ product.offer.price + ' ₽'}}</v-card-subtitle>
      <v-btn text color="primary" @click="addItem(product)">Добавить</v-btn>
      <v-btn text color="primary" @click="deleteItem(product.id)">Удалить</v-btn>
    </v-card>

  </v-container>
</template>

<script>
import products from '../../data/products.js'

export default {
  name: 'Catalog',

  data: () => ({
    products: products,
    timeout: null,
    debouncedInput: ''
  }),

  computed: {
    input: {
      get() {
        return this.debouncedInput
      },
      set(val) {
        if (this.timeout) clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.debouncedInput = val
        }, 300)
      }
    },

    filterProducts() {
      return this.products.filter(product => {
        return (product.name.toLowerCase().indexOf(this.input.toLowerCase()) >= 0)
      })
    }
  },

  methods: {
    addItem(product) {
      this.$store.dispatch('addItem', product)
    },

    deleteItem(id) {
      this.$store.dispatch('deleteItem', id) 
    }
  }
}
</script>
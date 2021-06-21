<template>
  <v-app-bar app dark>
    <v-toolbar-title>Связной</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>

    <v-badge
      color="pink"
      :content="totalCount"
      overlap
    >
      <v-btn depressed to="/cart">{{ totalPrice }}</v-btn>
    </v-badge>
  </v-app-bar>
</template>

<script>
export default {
  name: 'app-bar',

  data: () => ({
    //
  }),

  computed: {
    totalPrice() {
      if (this.$store.getters.totalPrice === 0) return `В корзине нет товаров`
      else return `${this.$store.getters.totalPrice} ₽`
    },

    totalCount() {
      return this.$store.getters.totalCount
    }
  }
}
</script>
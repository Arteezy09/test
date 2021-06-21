<template>
  <div class="rating">
    <v-rating
      :value="halfRating"
      :color="color"
      :size="size"
      readonly
      half-increments
      dense
    ></v-rating>

    <span v-if="showText">(оценка: {{ rating }})</span>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: '#FFC107'
    },
    size: {
      type: Number,
      default: 18
    },
    showText: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    halfRating() {
      return this.rating / 2
    }
  }
}
</script>

<style scoped>
.rating {
  display: flex;
  flex-wrap: wrap;
}

.rating span {
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.0333333333em;
  margin-left: 4px;
  margin-top: 4px;
}
</style>
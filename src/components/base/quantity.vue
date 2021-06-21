<template>
  <div class="quantity">

    <button
      type="button"
      name="button"
      class="minus-btn"
      :disabled="lowerValue"
      @click="$emit('minus')"
    >
      <img src="@/assets/minus.svg" alt="">
    </button>

    <span class="count">{{ count }}</span>

    <button
      type="button"
      name="button"
      class="plus-btn"
      :disabled="upperValue"
      @click="$emit('plus')"
    >
      <img src="@/assets/plus.svg" alt="">
    </button>

  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 1
    },
    quantity: {
      type: Number,
      default: 1
    }
  },

  computed: {
    lowerValue() {
      return this.count === 1
    },

    upperValue() {
      return this.count === this.quantity
    }
  }
}
</script>

<style scoped>
.quantity {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

button[class*=btn] {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  width: 30px;
  height: 30px;
  background-color: #E1E8EE;
  border: 1px solid #bababa;
  border-radius: 6px;
  cursor: pointer;
}

button:disabled, button[disabled] {
  opacity: 0.4;
}

.minus-btn img {
  margin-bottom: 3px;
}

.plus-btn img {
  margin-top: 2px;
}

.count {
  width: 34px;
  text-align: center;
}
</style>
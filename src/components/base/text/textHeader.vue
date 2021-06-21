<template>
  <div :class="[small ? 'small-header' : 'normal-header', 'text-header']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.text-header {
  font-weight: normal;
  line-height: 1.75rem;
  letter-spacing: 0.009375em;
}

.small-header {
  font-size: 1.3rem;
}

.normal-header {
  font-size: 2rem;
}

@media screen and (max-width: 640px) {
  .normal-header {
    font-size: 1.5rem;
  }
}
</style>
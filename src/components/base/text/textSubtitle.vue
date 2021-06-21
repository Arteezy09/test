<template>
  <div :class="[line ? 'line-through' : '', 'text-subtitle']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    line: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.text-subtitle {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: 0.0071428571em;
  color: #9e9e9e;
}

.line-through {
  font-size: 1.1rem !important;
  text-decoration: line-through;
}
</style>
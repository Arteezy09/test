<template>
  <div class="text-title">
    <a :href="href">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style scoped>
.text-title a {
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.75rem;
  letter-spacing: 0.009375em;
  color: rgba(0, 0, 0, 0.9);
  text-decoration-line: none;
  transition: all 0.2s ease;
}

.text-title a:hover {
  color: rgba(0, 0, 0, 0.7);
}
</style>
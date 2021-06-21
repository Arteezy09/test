<template>
  <div class="btn-text" @click="onClick">
    <slot>Продолжить</slot>
  </div>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      default: () => 1
    }
  }
}
</script>

<style scoped>
.btn-text {
  font-size: 0.8rem;
  font-weight: normal;
  line-height: 1.75rem;
  letter-spacing: 0.009375em;
  color: #909396;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-text:hover {
  color: rgb(197, 22, 130);
}
</style>
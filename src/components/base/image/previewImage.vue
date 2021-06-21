<template>
  <div class="preview-image">
    <a :href="href">
      <img :src="src" alt="">
    </a>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style scoped>
.preview-image {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  height: 8rem;
  width: 8rem;
}

.preview-image a {
  display: block;
  position: relative;
  height: 100%;
  width: 100%;
}

.preview-image a img {
  display: inline-block;
  max-height: 100%;
  max-width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
</style>
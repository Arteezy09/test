<template>
  <v-checkbox :checked="checked" @change="$emit('change', $event)"></v-checkbox>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  }
}
</script>
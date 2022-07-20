<template>
  <h3>Left组件 ----{{count}}</h3>
  <button @click="add">+1</button>

</template>

<script>
export default {
  data() {},
  props: ['count'],
  emits: ['update:count'],
  methods: {
    add() {
      this.$emit('update:count', this.count + 1)
    }
  }
}
</script>

<style>
</style>
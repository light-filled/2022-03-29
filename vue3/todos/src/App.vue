<template>
  <h1>App根组件----{{number}}</h1>
  <button @click="number += 1">+1</button>
  <left v-model:count="number"></left>
</template>

<script>
import Left from './components/Left.vue'

export default {
  name: 'App',
  data() {
    return {
      number: 0
    }
  },
  components: {
    Left
  }
}
</script>

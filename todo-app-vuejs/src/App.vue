<template>
  <div id="app">
    <ToDo/>
  </div>
</template>

<script>
import ToDo from './components/ToDo.vue'
export default {
  name: 'app',
  components: {
    ToDo
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }
</style>
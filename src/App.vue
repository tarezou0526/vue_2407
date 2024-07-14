<template>
  <div id="app">
    <Roulette />
  </div>
</template>

<script>
import Roulette from './components/Roulette.vue';

export default {
  name: 'App',
  components: {
    Roulette
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
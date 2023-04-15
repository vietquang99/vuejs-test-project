<template>
  <div class="container">
    <Header/>
  </div>
</template>

<script>
import Header from './layout/Header.vue'
export default {
  name: "HomePage",
  components: {
    Header
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
}
</style>

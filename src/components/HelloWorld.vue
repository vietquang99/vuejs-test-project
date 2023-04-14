<template>
  <div class="hello">
    <router-link class="link" to="/">
            <p class="item-menu">
                Home
            </p>
        </router-link>
        <router-link class="link" to="/about">
            <p class="item-menu">
                About Us
            </p>
        </router-link>
        <router-link class="link" to="/contact">
            <p class="item-menu">
                Contact
            </p>
        </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.hello {
  background-color: aqua;
  height: 100vh;
  width: 100%;
}
</style>

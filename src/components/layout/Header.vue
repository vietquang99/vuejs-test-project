<template>
  <div class="hearder-container">
    <div class="div"></div>
    <router-link class="link" to="/">
      <div class="item-menu">Home</div>
    </router-link>
    <router-link class="link" to="/about">
      <div class="item-menu">About Us</div>
    </router-link>
    <router-link class="link" to="/contact">
      <div class="item-menu">Contact</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.div {
    background-image: url(~@/assets/images/logoQD.gif);
    width: 32px;
    height: 32px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.hearder-container {
  height: 44px;
  width: 100%;
  background-color: rgba(22, 22, 23, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1;
}
.item-menu {
  color: #fff;
  text-decoration: none;
}
.link {
    margin: 0 32px;
}
</style>
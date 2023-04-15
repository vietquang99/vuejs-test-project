<template>
  <div class="container">
    <div class="icon-error-404"></div>
    <div class="title color-white">
      Xin lỗi, trang bạn tìm kiếm không tồn tại
    </div>
    <div class="content color-white">
      Có thể trang đã bị xóa hoặc URL không đúng
    </div>
    <router-link class="link" to="/">
      <div class="item-menu">Quay lại trang chủ</div>
    </router-link>
  </div>
</template>
  
<script>
export default {
  name: "Error404",
  components: {
    // msButton
  },
};
</script>
  
<style scoped>
.container {
  background-image: url(~@/assets/images/background-galaxy.svg);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
}
.icon-error-404 {
  background-image: url(~@/assets/icon/ico-error-404.svg);
  width: 100%;
  height: 370px;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 35px;
  margin-top: 110px;
}

.title {
  font-size: 24px;
  margin-bottom: 12px;
}

.content {
  font-family: GoogleSans-Regular;
  font-size: 16px;
  margin-bottom: 24px;
}

.link {
  color: #ffffff;
  height: 32px;
  padding: 0 16px;
  border: 1px solid rgb(217, 218, 222);
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: rgb(217, 218, 222);
  color: #000;
}
</style>
  
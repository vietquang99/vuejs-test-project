<template>
  <div class="container">
    <div class="icon-error-404"></div>
    <div class="title color-white">
      Xin lỗi, trang bạn tìm kiếm không tồn tại
    </div>
    <div class="content color-white">
      Có thể trang đã bị xóa hoặc URL không đúng
    </div>
    <!-- <msButton></msButton> -->
  </div>
</template>
  
<script>
// import msButton from "../Button/MsButton.vue";
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
</style>
  
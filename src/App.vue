<template>
  <!-- Hiển thị Header và Footer cho trang -->
  <Header/>
  
  <!-- Khu vực chính của trang sẽ được hiển thị ở đây (dùng <router-view> để hiển thị các component con tùy vào route) -->
  <!-- <main class="main-content">
    <router-view/>
  </main> -->

  <Footer/>
</template>

<script>
// Bước 1: Nhập các component cần thiết vào
import Header from './components/ComHeader.vue'  // Component cho Header
import Footer from './components/ComFooter.vue'  // Component cho Footer

export default {
  name: 'App',  // Đặt tên cho component này là App
  components: {
    Header,  // Đăng ký component Header
    Footer,  // Đăng ký component Footer
  }
}
</script>

<style>
/* Định kiểu chung cho ứng dụng */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;  /* Chọn kiểu chữ cho ứng dụng */
  -webkit-font-smoothing: antialiased;  /* Tăng độ mượt cho font chữ trên trình duyệt Webkit */
  -moz-osx-font-smoothing: grayscale;  /* Tăng độ mượt cho font chữ trên trình duyệt Firefox trên macOS */
  text-align: center;  /* Căn giữa toàn bộ nội dung */
  color: #2c3e50;  /* Màu sắc chữ */
  margin-top: 60px;  /* Khoảng cách trên cùng cho trang */
}
</style>

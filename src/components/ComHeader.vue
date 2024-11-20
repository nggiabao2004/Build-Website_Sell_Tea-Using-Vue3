<template>
  <header>
    <div class="container">
      <!-- Logo của Highlands Coffee -->
      <div class="logoHighlands">
        <img src="/Images/Highlands.png" alt="HighlandsBrandLogo" />
      </div>

      <!-- Thanh điều hướng -->
      <nav>
        <ul>
          <!-- Liên kết tới trang chủ -->
          <li><router-link to="/">Trang Chủ</router-link></li>
          <!-- Liên kết tới trang giới thiệu -->
          <li><router-link to="/gioithieu">Giới Thiệu</router-link></li>
          <!-- Liên kết tới trang liên hệ -->
          <li><router-link to="/lienhe">Liên Hệ</router-link></li>
          <!-- Hiển thị các liên kết đăng ký và đăng nhập khi người dùng chưa đăng nhập -->
          <li v-if="!user"><router-link to="/register">Đăng ký</router-link></li>
          <li v-if="!user"><router-link to="/login">Đăng nhập</router-link></li>
        </ul>
      </nav>

      <!-- Thông tin người dùng khi đã đăng nhập -->
      <div v-if="user" class="user-info">
        <p>Xin chào, {{ user.username }}</p>
      </div>

      <!-- Nút đăng xuất nếu người dùng đã đăng nhập -->
      <div v-if="user" class="user-info">
        <button @click="logout">Đăng xuất</button>
      </div>

      <!-- Nút giỏ hàng -->
      <div class="cta">
        <router-link to="/cart" class="cta-button">Giỏ hàng</router-link>
      </div>
    </div>
  </header>

  <!-- Hiển thị các nội dung của các route được định nghĩa -->
  <router-view />
</template>

<script>
import eventBus from '@/eventBus';

export default {
  data() {
    return {
      // Lấy thông tin người dùng từ localStorage nếu có
      user: JSON.parse(localStorage.getItem('currentUser')) || null,
    };
  },
  created() {
    // Đăng ký sự kiện khi đăng nhập thành công
    eventBus.on('loginSuccess', (user) => {
      this.user = user; // Cập nhật dữ liệu người dùng khi đăng nhập
    });
  },
  beforeUnmount() {
    // Hủy đăng ký sự kiện khi component bị hủy
    eventBus.off('loginSuccess');
  },
  methods: {
    // Phương thức đăng xuất
    logout() {
      // Xóa thông tin người dùng khỏi localStorage
      localStorage.removeItem('currentUser');
      // Xóa thông tin người dùng khỏi trạng thái của Vue
      this.user = null;
    },
  },
};
</script>

<style>
/* Layout chung cho header */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Logo của Highlands */
.logoHighlands img {
  max-height: 50px;
  object-fit: contain;
}

/* Định dạng thanh điều hướng */
nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin: 0 20px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease;
}

nav ul li a:hover {
  color: #fcb034;
}

/* Phần thông tin người dùng */
.user-info p {
  margin: 0;
  font-size: 16px;
}

.user-info button {
  padding: 5px 15px;
  margin-left: 15px;
  background-color: #fcb034;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.user-info button:hover {
  background-color: #ffa726;
}

/* Nút giỏ hàng */
.cta-button {
  padding: 10px 20px;
  background-color: #fcb034;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.cta-button:hover {
  background-color: #ffa726;
  transform: scale(1.1);
}
</style>

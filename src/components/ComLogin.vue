<template>
  <div class="login-container">
    <h2>Đăng nhập</h2>
    <!-- Trường nhập tên đăng nhập -->
    <div class="form-group">
      <input v-model="username" placeholder="Tên đăng nhập" />
    </div>
    <!-- Trường nhập mật khẩu -->
    <div class="form-group">
      <input v-model="password" type="password" placeholder="Mật khẩu" />
    </div>
    <!-- Nút đăng nhập, khi nhấn gọi hàm login -->
    <button @click="login">Đăng nhập</button>
    <!-- Hiển thị thông báo lỗi nếu có -->
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import users from '@/data/users'; // Nhập dữ liệu người dùng từ file users
import eventBus from '@/eventBus'; // Nhập eventBus để phát thông báo

export default {
  data() {
    return {
      username: '', // Biến lưu tên đăng nhập
      password: '', // Biến lưu mật khẩu
      error: '', // Biến lưu thông báo lỗi
      users: users // Lấy dữ liệu người dùng từ data
    };
  },
  methods: {
    login() {
      // Kiểm tra xem tên đăng nhập và mật khẩu có khớp với dữ liệu người dùng không
      const user = this.users.find(x => x.username === this.username && x.password === this.password);
      
      if (user) {
        // Nếu đăng nhập thành công, lưu thông tin người dùng vào localStorage
        localStorage.setItem('curentUser', JSON.stringify(user));
        // Phát sự kiện 'loginSuccess' để thông báo đăng nhập thành công
        eventBus.emit('loginSuccess', user);
        // Chuyển hướng về trang chủ sau khi đăng nhập thành công
        this.$router.push('/');
      } else {
        // Nếu không thành công, hiển thị thông báo lỗi
        this.error = "Đăng nhập không thành công";
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: Arial, sans-serif;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #218838;
}

.error {
  color: red;
  margin-top: 10px;
  font-size: 14px;
}
</style>

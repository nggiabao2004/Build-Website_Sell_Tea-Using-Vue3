<template>
  <div class="register-container">
    <h2>Đăng ký tài khoản</h2>
    <div class="form-group">
      <input v-model="username" placeholder="Tên đăng nhập" />
    </div>
    <div class="form-group">
      <input v-model="password" type="password" placeholder="Mật khẩu" />
    </div>
    <div class="form-group">
      <input
        v-model="confirmPassword"
        type="password"
        placeholder="Xác nhận mật khẩu"
      />
    </div>
    <button @click="register">Đăng ký</button>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import users from '@/data/users';

export default {
  data() {
    return {
      username: "", // Biến để lưu tên đăng nhập
      password: "", // Biến để lưu mật khẩu
      confirmPassword: "", // Biến để lưu xác nhận mật khẩu
      error: "", // Biến để lưu thông báo lỗi
      success: "", // Biến để lưu thông báo thành công
      users: users // Mảng chứa danh sách người dùng hiện tại
    };
  },
  methods: {
    register() {
      // Kiểm tra mật khẩu và xác nhận mật khẩu có trùng khớp không
      if (this.password !== this.confirmPassword) {
        this.error = "Mật khẩu không trùng"; // Hiển thị lỗi nếu mật khẩu không khớp
        return;
      }

      // Kiểm tra xem tên đăng nhập đã tồn tại trong danh sách người dùng chưa
      const user = this.users.find(x => x.username === this.username);
      if (user) {
        this.error = "Tên đã tồn tại"; // Hiển thị lỗi nếu tên đăng nhập đã tồn tại
        return;
      }

      // Tạo đối tượng người dùng mới
      const newuser = { id: this.users.length + 1, username: this.username, password: this.password };
      this.users.push(newuser); // Thêm người dùng mới vào danh sách

      // Lưu danh sách người dùng vào localStorage
      localStorage.setItem('users', JSON.stringify(this.users));

      // Reset các trường nhập liệu sau khi đăng ký thành công
      this.username = '';
      this.password = '';
      this.confirmPassword = '';
      this.error = ''; // Xóa thông báo lỗi nếu có

      // Thông báo thành công và chuyển đến trang đăng nhập
      alert("Đăng ký thành công");
      this.$router.push('/login'); // Chuyển hướng đến trang đăng nhập
    }
  }
};
</script>

<style scoped>
.register-container {
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
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-top: 10px;
  font-size: 14px;
}
</style>

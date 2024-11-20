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
export default {
  // Không thay đổi phần logic
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

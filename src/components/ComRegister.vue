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
      username: "",
      password: "",
      confirmPassword: "",
      error: "",
      success: "",
      users:users
    };
  },
  methods:{
    register()
    {
      //kiểm tra mật khẩu và nhập lại mật khẩu
      if(this.password!==this.confirmPassword)
      {
        this.error="Mật khẩu không trùng"
        return
      }
      //Kiểm tra username mà người dùng đăng ký có bị trùng hay không
      const user=this.users.find(x=>x.username===this.username)
      if (user)
      {
        this.error="Tên đã tồn tại"
        return
      }
      //Tạo đối tượng
      const newuser={id:this.users.length+1,username:this.username,password:this.password}
      this.users.push(newuser)
      //lưu vào localstorage
      localStorage.setItem('users',JSON.stringify(this.users))
      this.username=''
      this.password=''
      this.confirmPassword=''
      this.error=''
      alert("Đăng ký thành công")
      //Chuyển trang nhanh nhất this.$router.push('path')
      this.$router.push('/login')
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

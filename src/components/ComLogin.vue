<template>
  <div class="login-container">
    <h2>Đăng nhập</h2>
    <div class="form-group">
      <input v-model="username" placeholder="Tên đăng nhập" />
    </div>
    <div class="form-group">
      <input v-model="password" type="password" placeholder="Mật khẩu" />
    </div>
    <button @click="login">Đăng nhập</button>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import users from '@/data/users';
import eventBus from '@/eventBus';

export default {
  data() {
    return {
      username: '',//an
      password: '',//1234
      error: '',
      users:users
    };
  },
 methods:{
  login()
  {
    //kiem tra trong data có tức là đăng ký thành công và đăng nhập thành công
    const user=this.users.find(x=>x.username===this.username && x.password===this.password)
    if (user)
    {
      //đăng nhập thành công thì lưu đối tượng xuống localstorage
      localStorage.setItem('curentUser',JSON.stringify(user))
      eventBus.emit('loginSuccess', user)
      this.$router.push('/')
    }
    else
    {
      this.error="Đăng nhập không thành công"
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

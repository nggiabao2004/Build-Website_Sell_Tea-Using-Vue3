<template>
  <div>
      <h2>Đăng nhập</h2>
      <input v-model="username" placeholder="Tên đăng nhập" />
      <input v-model="password" type="password" placeholder="Mật khẩu" />
      <button @click= "login">Đăng nhập</button>
      <p v-if = "error">{{error}}</p>
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

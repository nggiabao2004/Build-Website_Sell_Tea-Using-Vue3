<template>
  <div>
    <h2>Đăng ký tài khoản</h2>
    <input v-model="username" placeholder="Tên đăng nhập" />
    <input v-model="password" type="password" placeholder="Mật khẩu" />
    <input
      v-model="confirmPassword"
      type="password"
      placeholder="Xác nhận mật khẩu"
    />
    <button @click= "register">Đăng ký</button>
    <p v-if="error" class="error">{{error}}</p>
    <!-- <p  class="success">báo thành công</p> -->
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

<style>
</style>
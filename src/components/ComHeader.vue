<template>
 <header>
        <div class="container">
            <div class="logoBitis">
                <img src="/Images/Highlands.png" alt= "HighlandsBrandLogo">
            </div>
            <nav>
                <ul>
                    <li><router-link to="/">Trang Chủ</router-link></li>
                    <li><router-link to="/gioithieu">Giới Thiệu</router-link></li>
                    <li><router-link to="/lienhe">Liên Hệ </router-link></li>
                    <li><router-link to="/tintuc">Tin Tức </router-link></li>
                    <li v-if="user==null"><router-link to="/register">Đăng ký </router-link></li>
                    <li v-if="user==null"><router-link to="/login">Đăng nhập </router-link></li>
                </ul>
            </nav>
            <div v-if="user">
                    <p>Xin chào, {{user.username}}</p>
                    <button>Đăng xuất</button>
                </div>
            <div class="cta">
                <router-link to= "/cart" class="cta-button">Giỏ hàng</router-link>
            </div>
        </div>
    </header>
 <!-- lấy nội dung component được link tới thì dùng -->
 <router-view/>
</template>
<script>
import eventBus from '@/eventBus';
export default {
    data(){
        return{
            user:JSON.parse(localStorage.getItem('currentUser'))||null
        };
    },
    created()
    {
        eventBus.on('loginSuccess',(user)=>{
            this.user=user
        })
    },
    beforeUnmount()
    {
        //hủy bỏ các sự kiện lắng nghe của component
        eventBus.off('loginSuccess')
    },
    methods:{
        logout()
        {
            localStorage.removeItem('current')
        }
    }
}
</script>

<style>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   
}

/* .logoBitis {
    height: 5px;
    transition: transform 0.3s ease;
}    */

/* .logo img:hover {
    transform: scale(1.1);
}   */

nav ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: #fcb034;
}
.cta-button {
    padding: 10px 20px;
    background-color: #fcb034;
    color: #fff;
    text-decoration: none;
    border-radius: 25px;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.cta-button:hover {
    background-color: #ffa726;
    transform: scale(1.1);
}
</style>
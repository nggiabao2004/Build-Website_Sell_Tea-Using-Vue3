<template>
    <header>
      <div class="container">
        <div class="logoHighlands">
          <img src="/Images/Highlands.png" alt="HighlandsBrandLogo" />
        </div>
        <nav>
          <ul>
            <li><router-link to="/">Trang Chủ</router-link></li>
            <li><router-link to="/gioithieu">Giới Thiệu</router-link></li>
            <li><router-link to="/lienhe">Liên Hệ</router-link></li>
            <li v-if="!user"><router-link to="/register">Đăng ký</router-link></li>
            <li v-if="!user"><router-link to="/login">Đăng nhập</router-link></li>
          </ul>
        </nav>
        <div v-if="user" class="user-info">
          <p>Xin chào, {{ user.username }}</p>
          <button @click="logout">Đăng xuất</button>
        </div>
        <div class="cta">
          <router-link to="/cart" class="cta-button">Giỏ hàng</router-link>
        </div>
      </div>
    </header>
    <router-view />
  </template>
  
  <script>
  import eventBus from '@/eventBus';
  export default {
    data() {
      return {
        user: JSON.parse(localStorage.getItem('currentUser')) || null,
      };
    },
    created() {
      eventBus.on('loginSuccess', (user) => {
        this.user = user;
      });
    },
    beforeUnmount() {
      eventBus.off('loginSuccess');
    },
    methods: {
      logout() {
        localStorage.removeItem('currentUser');
        this.user = null; // Clear user data from Vue state
      },
    },
  };
  </script>
  
  <style>
  /* General Layout for the header */
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .logoHighlands img {
    max-height: 50px;
    object-fit: contain;
  }
  
  /* Navigation styles */
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
  
  /* User info section */
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
  
  /* CTA Button */
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
  
<template>
    <main>  
         <div class="menu">
             <!-- Phần tiêu đề menu (có thể mở rộng cho các loại sản phẩm khác) -->
             <!-- <h2 class="menu-title">TRÀ</h2> -->
             <div class="menu-carousel">
                 <!-- Mỗi item trong menu -->
                 <div class="menu-item">
                     <!-- Sử dụng router-link để chuyển tới trang chi tiết sản phẩm khi click vào -->
                     <router-link :to="{name:'ProductDetail',params:{id}}">
                         <!-- Hình ảnh của sản phẩm -->
                         <img :src="product.image" alt="Tea">
                         <!-- Thông tin sản phẩm, bao gồm tên và giá -->
                         <div class="menu-item-info">
                             <h3>{{product.name}}</h3>
                             <p>{{product.price}}.000 VND</p>
                         </div>
                     </router-link>
                 </div>
             </div>
         </div>  
     </main>
 </template>
 
 <script>
 export default {
     // Nhận prop 'product' từ component cha
     props:['product'],
     data(){
         return{
             // Lấy id của sản phẩm để sử dụng trong router-link
             id:this.product.id
         }
     }
 }
 </script>
 
 <style>
 /* Style cho menu */
 .menu {
     text-align: center;
     padding: 40px 20px;
     background-color: #fff;
     /* Để sản phẩm nằm ngang và responsive */
     display: flex;
     flex-wrap: wrap;
 }
 
 /* Tiêu đề menu (nếu cần dùng) */
 .menu-title {
     font-size: 32px;
     margin-bottom: 20px;
 }
 
 /* Phần carousel của menu (hiển thị sản phẩm) */
 .menu-carousel {
     display: flex;
     justify-content: center;
     align-items: center;
     overflow: hidden;
     position: relative;
     max-width: 100%;
     animation: slideIn 1s ease-in-out; /* Animation cho menu */
 }
 
 /* Style cho mỗi sản phẩm */
 .menu-item {
     position: relative;
     flex: 0 0 25%; /* 4 sản phẩm mỗi dòng */
     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
     border-radius: 8px;
     margin: 0 10px;
     overflow: hidden;
     transition: transform 0.3s ease;
 }
 
 /* Hình ảnh sản phẩm */
 .menu-item img {
     width: 100%;
     transition: transform 0.3s ease; /* Hiệu ứng phóng to ảnh khi hover */
 }
 
 /* Thông tin sản phẩm khi hover */
 .menu-item-info {
     position: absolute;
     bottom: 0;
     left: 0;
     right: 0;
     background-color: rgba(0, 0, 0, 0.7); /* Nền mờ cho thông tin */
     color: #fff;
     text-align: left;
     padding: 20px;
     opacity: 0;
     transition: opacity 0.3s ease; /* Hiệu ứng xuất hiện */
 }
 
 /* Khi hover vào sản phẩm, thông tin sẽ hiện lên */
 .menu-item:hover .menu-item-info {
     opacity: 1;
 }
 
 /* Phóng to hình ảnh khi hover */
 .menu-item:hover img {
     transform: scale(1.1);
 }
 
 /* Style cho tiêu đề trong thông tin sản phẩm */
 .menu-item-info h3 {
     font-size: 18px;
     margin: 0 0 10px;
 }
 
 /* Màu sắc cho giá */
 .menu-item-info p {
     margin: 0;
     color: #ccc;
 }
 
 /* Điều hướng cho carousel (nút tiếp theo, trước đó - nếu cần) */
 .menu-navigation {
     position: absolute;
     top: 50%;
     width: 100%;
     display: flex;
     justify-content: space-between;
     transform: translateY(-50%); /* Căn giữa theo chiều dọc */
 }
 
 /* Nút điều hướng (dành cho carousel) */
 .menu-navigation i {
     background-color: rgba(0, 0, 0, 0.5);
     color: #fff;
     padding: 10px;
     border-radius: 50%;
     cursor: pointer;
     transition: background-color 0.3s ease;
 }
 
 /* Hiệu ứng hover cho nút điều hướng */
 .menu-navigation i:hover {
     background-color: #fcb034;
 }
 </style>
 
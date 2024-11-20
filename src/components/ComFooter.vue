<template>
    <footer>
         <div class="footer-container">
             <!-- Cột thông tin tuyển dụng -->
             <div class="footer-column">
                 <h3>Tuyển dụng:</h3>
                 <p>customerservice@highlandscoffee.com.vn</p>
             </div>
             <!-- Cột thông tin Hotline -->
             <div class="footer-column">
                 <h3>Hotline:</h3>
                 <p>1900.1755</p>
             </div>
             <!-- Cột thông tin liên hệ địa chỉ -->
             <div class="footer-column">
                 <h3>Liên hệ:</h3>
                 <p>135/37/50 Nguyễn Hữu Cảnh, Phường 22, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam</p>
             </div>
         </div>
     </footer>
 </template>
 
 <script>
 export default {
     // Component không có logic JavaScript, chỉ sử dụng để hiển thị giao diện footer
 }
 </script>
 
 <style>
 /* Định dạng cho phần tử footer */
 footer {
     background-color: #d2cece; /* Màu nền của footer */
     color: #393737; /* Màu chữ trong footer */
     padding: 20px; /* Khoảng cách nội dung footer */
 }
 
 /* Định dạng bố cục container của footer */
 .footer-container {
     display: flex; /* Sử dụng Flexbox để xếp các cột ngang hàng */
     justify-content: space-between; /* Căn đều khoảng cách giữa các cột */
     flex-wrap: wrap; /* Cho phép các cột xuống dòng nếu không đủ không gian */
     max-width: 1200px; /* Chiều rộng tối đa của footer */
     margin: 0 auto; /* Căn giữa nội dung footer */
 }
 
 /* Định dạng các cột trong footer */
 .footer-column {
     flex: 1; /* Mỗi cột chiếm phần không gian bằng nhau */
     padding: 10px; /* Khoảng cách nội dung cột */
     min-width: 200px; /* Độ rộng tối thiểu của cột */
     box-sizing: border-box; /* Tính cả padding vào chiều rộng cột */
 }
 
 .footer-column h3 {
     margin-top: 0; /* Xóa khoảng cách phía trên tiêu đề cột */
 }
 
 /* Định dạng các liên kết trong footer */
 .footer-column a {
     color: #fcb034; /* Màu chữ của liên kết */
     text-decoration: none; /* Xóa gạch chân mặc định */
 }
 
 .footer-column a:hover {
     text-decoration: underline; /* Hiển thị gạch chân khi di chuột vào liên kết */
 }
 </style>

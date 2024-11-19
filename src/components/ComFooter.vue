<template>
    <footer>
         <div class="footer-container">
             <div class="footer-column">
                 <h3>Tuyển dụng:</h3>
                 <p>customerservice@highlandscoffee.com.vn</p>
             </div>
             <div class="footer-column">
                 <h3>Hotline:</h3>
                 <p>1900.1755</p>
             </div>
             <div class="footer-column">
                 <h3>Liên hệ:</h3>
                 <p>135/37/50 Nguyễn Hữu Cảnh, Phường 22, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam</p>
             </div>
         </div>
     </footer>
 </template>
 
 <script>
 export default {
 
 }
 </script>
 
 <style>
 footer {
     background-color: #d2cece;
     color: #393737;
     padding: 20px;
 }
 
 .footer-container {
     display: flex;
     justify-content: space-between;
     flex-wrap: wrap;
     max-width: 1200px;
     margin: 0 auto;
 }
 
 .footer-column {
     flex: 1;
     padding: 10px;
     min-width: 200px;
     box-sizing: border-box;
 }
 
 .footer-column h3 {
     margin-top: 0;
 }
 
 /* Định dạng các liên kết trong footer */
 .footer-column a {
     color: #fcb034;
     text-decoration: none;
 }
 
 .footer-column a:hover {
     text-decoration: underline;
 }
 </style>
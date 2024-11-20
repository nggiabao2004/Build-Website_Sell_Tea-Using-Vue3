import { createApp } from 'vue'  // Nhập hàm `createApp` từ thư viện Vue
import App from './App.vue'      // Nhập component gốc của ứng dụng (App.vue)
import router from './router'    // Nhập đối tượng router để quản lý các đường dẫn (routes)

createApp(App)                  // Tạo một instance của ứng dụng Vue từ component App
  .use(router)                   // Sử dụng router để quản lý các tuyến đường (routes) của ứng dụng
  .mount('#app')                 // Gắn (mount) ứng dụng vào phần tử HTML có id là "app"

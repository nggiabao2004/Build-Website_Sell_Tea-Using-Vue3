// src/eventBus.js
// Cài đặt thư viện mitt để tạo event bus. Sử dụng lệnh: npm i mitt

import mitt from "mitt";  // Nhập thư viện mitt để tạo Event Bus

// Tạo một instance của mitt, đây sẽ là đối tượng Event Bus
const eventBus = mitt();

// Xuất eventBus ra ngoài để có thể sử dụng ở các phần khác trong ứng dụng
export default eventBus;

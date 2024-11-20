<template>
    <div class="invoice-container">
      <!-- Chia layout làm 2 cột -->
      <div class="left">
        <!-- Danh sách sản phẩm -->
        <h2>Danh sách sản phẩm</h2>
        <table class="product-table">
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Số lượng</th>
              <th>Giá tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item.id">
              <td>{{ item.name }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ (item.quantity * item.price).toLocaleString('vi-VN') }} VND</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" style="text-align: right; font-weight: bold;">Tổng cộng:</td>
              <td>{{ tongtien.toLocaleString('vi-VN') }} VND</td>
            </tr>
          </tfoot>
        </table>
      </div>
  
      <div class="right">
        <!-- Thông tin người mua -->
        <h2>Thông tin người mua</h2>
        <div class="form-group">
          <input v-model="name" placeholder="Họ và tên" />
        </div>
        <div class="form-group">
          <input v-model="phone" placeholder="Số điện thoại" />
        </div>
        <div class="form-group">
          <input v-model="address" placeholder="Địa chỉ nhận hàng" />
        </div>
        <button @click="thanhToan">Thanh toán</button>
        <p v-if="message" :class="{ success: success, error: !success }">{{ message }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '', // Tên người mua
        phone: '', // Số điện thoại
        address: '', // Địa chỉ nhận hàng
        message: '', // Thông báo trạng thái
        success: false, // Trạng thái thành công hay không
        cart: JSON.parse(localStorage.getItem('cart')) || [] // Lấy danh sách sản phẩm từ localStorage
      };
    },
    computed: {
      // Tính tổng tiền từ giỏ hàng
      tongtien() {
        return this.cart.reduce((total, item) => total + item.quantity * item.price, 0);
      }
    },
    methods: {
      // Hàm thanh toán
      thanhToan() {
        if (this.name && this.phone && this.address) {
          // Nếu người mua nhập đủ thông tin, hiển thị thông báo thành công
          this.message = "Đã thanh toán thành công!";
          this.success = true;
  
          // Lưu thông tin đơn hàng vào localStorage để hiển thị ở ComHome
          const orders = JSON.parse(localStorage.getItem('orders')) || [];
          orders.push({
            name: this.name,
            phone: this.phone,
            address: this.address,
            cart: this.cart,
            total: this.tongtien
          });
          localStorage.setItem('orders', JSON.stringify(orders));
  
          // Xóa giỏ hàng
          localStorage.removeItem('cart');
          this.cart = [];
  
          // Điều hướng về trang chủ (ComHome)
          setTimeout(() => {
            this.$router.push('/');
          }, 3000); // Đợi 3 giây để hiển thị thông báo trước khi quay về trang chủ
        } else {
          // Nếu thiếu thông tin, yêu cầu nhập đủ
          this.message = "Vui lòng nhập đầy đủ thông tin!";
          this.success = false;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Container tổng của hóa đơn */
  .invoice-container {
    display: flex; /* Chia giao diện thành 2 cột */
    gap: 20px;
    width: 800px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
  }
  
  /* Cột bên trái - Danh sách sản phẩm */
  .left {
    flex: 1; /* Chiếm 1 phần */
  }
  
  /* Cột bên phải - Thông tin người mua */
  .right {
    flex: 1; /* Chiếm 1 phần */
  }
  
  /* Bảng hiển thị danh sách sản phẩm */
  .product-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  
  .product-table th,
  .product-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  
  .product-table th {
    background-color: #f8f9fa;
    font-weight: bold;
  }
  
  /* Nhóm form nhập thông tin người mua */
  .form-group {
    margin-bottom: 15px;
  }
  
  input {
    width: 100%;
    padding: 10px;
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
  
  .success {
    color: green;
    margin-top: 10px;
    font-size: 14px;
  }
  
  .error {
    color: red;
    margin-top: 10px;
    font-size: 14px;
  }
  </style>
  
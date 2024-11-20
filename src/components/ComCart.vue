<template>
    <div>
      <div v-if="cart.length === 0">
        <p>Giỏ hàng trống</p> <!-- Hiển thị thông báo khi giỏ hàng trống -->
      </div>
      <div v-else class="modal-content">
        <table class="table text-center">
          <thead>
            <tr>
              <th></th>
              <th>Tên sản phẩm</th>
              <th>Đơn giá</th>
              <th>Số lượng</th>
              <th>Giá tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item.id">
              <td>
                <img :src="item.image" style="height: 100px; width: 100px;">
              </td>
              <td class="align-middle">{{ item.name }}</td>
              <td class="align-middle">{{ item.price }}.000 VND</td>
              <td class="align-middle">
                <button @click="decreaseQuantity(item)">-</button>
                {{ item.quantity }}
                <button @click="increaseQuantity(item)">+</button>
              </td>
              <td class="align-middle">{{ calculatePrice(item) }}.000 VND</td>
              <td class="align-middle">
                <button class="btn btn-danger" @click="deleteProduct(item)">Xóa</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2"></td>
              <td>Tổng cộng</td>
              <td>{{ totalQuantity }}</td>
              <td>{{ totalPrice }}.000 VND</td>
              <td>
                <button class="btn btn-danger" @click="clearCart">Xóa hết</button>
              </td>
            </tr>
                <tr>
                    <td colspan="6" class="pay-btn-container">
                        <button class="btn btn-primary" @click="tinhtien">Thanh toán</button>
                    </td>
                </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import items from "@/data/items";
  import cart from "@/data/cart";
  
  export default {
    data() {
      return {
        cart: cart, // Dữ liệu giỏ hàng
      };
    },
    computed: {
      // Tính tổng tiền
      totalPrice() {
        return this.cart.reduce((total, item) => total + item.quantity * item.price, 0);
      },
      // Tính tổng số lượng
      totalQuantity() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
      },
    },
    methods: {
      // Tính giá tiền từng sản phẩm
      calculatePrice(item) {
        return item.quantity * item.price;
      },
      // Xóa sản phẩm khỏi giỏ hàng
      deleteProduct(item) {
        const product = items.find((x) => x.id === item.id);
        if (product) {
          product.quality += item.quantity; // Trả lại số lượng vào kho
        }
        this.cart = this.cart.filter((x) => x.id !== item.id);
        localStorage.setItem("cart", JSON.stringify(this.cart)); // Cập nhật localStorage
      },
      // Xóa toàn bộ sản phẩm khỏi giỏ hàng
      clearCart() {
        this.cart.forEach((item) => {
          const product = items.find((x) => x.id === item.id);
          if (product) {
            product.quality += item.quantity; // Trả lại số lượng vào kho
          }
        });
        this.cart = [];
        localStorage.setItem("cart", JSON.stringify(this.cart)); // Cập nhật localStorage
      },
      // Tăng số lượng sản phẩm
      increaseQuantity(item) {
        const product = items.find((x) => x.id === item.id);
        if (product && product.quality > 0) {
          item.quantity++;
          product.quality--;
        } else {
          alert("Sản phẩm đã hết hàng!");
        }
      },
      // Giảm số lượng sản phẩm
      decreaseQuantity(item) {
        const product = items.find((x) => x.id === item.id);
        if (item.quantity > 1) {
          item.quantity--;
          product.quality++;
        } else {
          this.deleteProduct(item);
        }
      },
      // Thanh toán
      tinhtien() {
        localStorage.setItem("cart", JSON.stringify(this.cart));
        this.$router.push("/hoadon"); // Chuyển hướng đến trang thanh toán
      },
    },
    mounted() {
      // Đồng bộ giỏ hàng từ localStorage
      const savedCart = JSON.parse(localStorage.getItem("cart"));
      if (savedCart) {
        this.cart = savedCart.filter((item) => {
          const product = items.find((x) => x.id === item.id);
          return product && product.quality >= 0; // Chỉ giữ lại sản phẩm hợp lệ
        });
      }
    },
  };
  </script>
  
  <style>
  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .table {
    width: 100%;
    margin-bottom: 20px;
    border-collapse: collapse;
  }

  .table th, .table td {
    padding: 12px;
    text-align: center;
    border: 1px solid #ddd;
  }

  .table th {
    background-color: #f8f8f8;
    font-weight: bold;
  }

  .table td img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 5px;
  }

  .align-middle {
    vertical-align: middle;
  }

  .btn {
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
  }

  .btn-danger {
    background-color: #dc3545;
    color: #fff;
    border: none;
  }

  .btn-danger:hover {
    background-color: #c82333;
  }

  .btn-primary {
    background-color: #007bff;
    color: #fff;
    border: none;
  }

  .btn-primary:hover {
    background-color: #0056b3;
  }

  .cart-summary {
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cart-summary .total {
    font-size: 20px;
    color: #333;
  }

  .cart-summary button {
    padding: 10px 20px;
  }

  .cart-actions {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cart-actions .clear-cart {
    background-color: #f8d7da;
    color: #721c24;
  }

  .cart-actions .clear-cart:hover {
    background-color: #f5c6cb;
  }

  .cart-actions .pay-btn {
    background-color: #28a745;
    color: #fff;
  }

  .cart-actions .pay-btn:hover {
    background-color: #218838;
  }

  .quantity-btn {
    padding: 6px 12px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ddd;
    background-color: #f1f1f1;
  }

  .quantity-btn:hover {
    background-color: #ddd;
  }

  .quantity-controls {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pay-btn-container {
    text-align: center;
    padding-top: 10px;
  }
</style>

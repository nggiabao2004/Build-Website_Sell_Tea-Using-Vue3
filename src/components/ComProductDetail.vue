<template>
  <main class="product-detail">
    <div class="product-container">
      <!-- Cột bên trái: Hình ảnh sản phẩm -->
      <div class="product-image">
        <img :src="product.image" alt="Hình ảnh sản phẩm">
      </div>

      <!-- Cột bên phải: Thông tin sản phẩm -->
      <div class="product-info">
        <h1 class="product-name">{{ product.name }}</h1>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">Giá: {{ product.price }}.000 VND</p>

        <div v-if="product.quality > 0">
          <button class="buy-btn" @click="addToCard(product)">Mua Hàng</button>
        </div>
        <div v-else class="out-of-stock">
          <p>Hết Hàng</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import items from "@/data/items";
import cart from "@/data/cart";

export default {
data() {
  return {
    product: {}, // Thông tin sản phẩm
    cart: cart, // Giỏ hàng hiện tại
  };
},
mounted() {
  // Lấy ID sản phẩm từ URL và tìm kiếm sản phẩm tương ứng trong danh sách
  const id = this.$route.params.id;
  this.product = items.find((x) => x.id == id);
},
methods: {
  // Phương thức thêm sản phẩm vào giỏ hàng
  addToCard(product) {
    const infoproduct = this.cart.find((x) => x.id == product.id);
    if (infoproduct) {
      if (product.quality > 0) {
        infoproduct.quantity += 1; // Tăng số lượng sản phẩm trong giỏ hàng
      }
    } else {
      if (product.quality > 0) {
        const newproduct = { ...product, quantity: 1 }; // Tạo sản phẩm mới với số lượng 1
        this.cart.push(newproduct); // Thêm sản phẩm vào giỏ hàng
      }
    }
    product.quality--; // Giảm số lượng sản phẩm sau khi thêm vào giỏ hàng
  },
},
};
</script>

<style>
.product-detail {
padding: 20px;
background-color: #fff;
}

.product-container {
display: flex;
align-items: flex-start; /* Căn thông tin gần nhau theo chiều dọc */
gap: 20px; /* Khoảng cách giữa các phần tử trong container */
}

.product-image {
flex: 1;
text-align: center; /* Căn giữa hình ảnh sản phẩm */
}

.product-image img {
width: 100%;
max-width: 400px;
border: 1px solid #ddd;
border-radius: 8px;
}

.product-info {
flex: 1;
display: flex;
flex-direction: column; /* Sắp xếp thông tin sản phẩm theo chiều dọc */
gap: 10px; /* Khoảng cách nhỏ hơn giữa các dòng */
}

.product-name {
font-size: 24px;
font-weight: bold;
margin: 0;
}

.product-description {
font-size: 16px;
color: #555;
}

.product-price {
font-size: 18px;
color: #d32f2f;
font-weight: bold;
}

.buy-btn {
padding: 10px 15px;
background-color: #d32f2f;
color: #fff;
border: none;
border-radius: 4px;
cursor: pointer;
font-size: 16px;
}

.buy-btn:hover {
background-color: #b71c1c; /* Màu khi hover vào button */
}

.out-of-stock {
color: red;
font-weight: bold;
}
</style>

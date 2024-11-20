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
          <!-- Button mua hàng -->
          <button class="buy-btn" @click="addToCart(product)">Mua Hàng</button>
        </div>
        <div v-else class="out-of-stock">
          <p>Hết Hàng</p> <!-- Hiển thị thông báo nếu sản phẩm hết hàng -->
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
      product: {}, // Thông tin sản phẩm hiện tại
      cart: cart, // Dữ liệu giỏ hàng
    };
  },
  mounted() {
    // Lấy ID sản phẩm từ URL và tìm sản phẩm tương ứng
    const id = this.$route.params.id;
    this.product = items.find((x) => x.id == id);
  },
  methods: {
    // Thêm sản phẩm vào giỏ hàng
    addToCart(product) {
      const cartItem = this.cart.find((x) => x.id == product.id);
      if (cartItem) {
        // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
        if (product.quality > 0) {
          cartItem.quantity += 1;
        }
      } else {
        // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới
        if (product.quality > 0) {
          const newProduct = { ...product, quantity: 1 };
          this.cart.push(newProduct);
        }
      }
      product.quality--; // Giảm số lượng tồn kho
      localStorage.setItem("cart", JSON.stringify(this.cart)); // Cập nhật vào localStorage
    },
  },
};
</script>

<style>
/* Giữ nguyên CSS ban đầu */
.product-detail {
  padding: 20px;
  background-color: #fff;
}

.product-container {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.product-image {
  flex: 1;
  text-align: center;
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
  flex-direction: column;
  gap: 10px;
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
  background-color: #b71c1c;
}

.out-of-stock {
  color: red;
  font-weight: bold;
}
</style>

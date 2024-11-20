<template>
  <main>
    <div class="menu">
      <!-- Tiêu đề danh sách sản phẩm -->
      <h2 class="menu-title">TẤT CẢ SẢN PHẨM</h2>
      <div class="menu-grid">
        <!-- Duyệt qua từng sản phẩm và hiển thị -->
        <div class="menu-item" v-for="product in products" :key="product.id">
          <router-link :to="{ name: 'ProductDetail', params: { id: product.id }}">
            <!-- Hiển thị ảnh sản phẩm -->
            <img :src="product.image" alt="Product Image">
            <div class="menu-item-info">
              <!-- Tên sản phẩm -->
              <h3>{{ product.name }}</h3>
              <!-- Giá sản phẩm -->
              <p>{{ product.price }}.000 VND</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// Import dữ liệu sản phẩm từ file items
import items from "@/data/items";

export default {
  data() {
    return {
      // Dữ liệu sản phẩm
      products: items
    };
  }
};
</script>

<style>
/* Định dạng cho phần menu */
.menu {
  text-align: center; /* Căn giữa nội dung */
  padding: 40px 20px; /* Khoảng cách xung quanh */
  background-color: #fff; /* Màu nền trắng */
}

/* Tiêu đề của danh sách sản phẩm */
.menu-title {
  font-size: 32px; /* Kích thước chữ */
  margin-bottom: 20px; /* Khoảng cách dưới tiêu đề */
  color: #333; /* Màu chữ */
}

/* Lưới để hiển thị sản phẩm */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Lưới tự động thay đổi cột */
  gap: 20px; /* Khoảng cách giữa các sản phẩm */
  justify-items: center; /* Căn giữa các item */
}

/* Mỗi sản phẩm */
.menu-item {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Đổ bóng cho sản phẩm */
  border-radius: 8px; /* Bo góc sản phẩm */
  overflow: hidden; /* Ẩn phần ngoài viền */
  transition: transform 0.3s ease; /* Hiệu ứng chuyển động khi hover */
  background-color: #fff; /* Màu nền trắng */
}

/* Ảnh sản phẩm */
.menu-item img {
  width: 100%; /* Chiều rộng của ảnh chiếm 100% */
  transition: transform 0.3s ease; /* Hiệu ứng khi di chuột lên ảnh */
}

/* Hiệu ứng khi hover lên ảnh */
.menu-item:hover img {
  transform: scale(1.1); /* Phóng to ảnh khi hover */
}

/* Thông tin sản phẩm */
.menu-item-info {
  padding: 10px; /* Khoảng cách trong phần thông tin */
  text-align: center; /* Căn giữa nội dung */
}

/* Tên sản phẩm */
.menu-item-info h3 {
  font-size: 18px; /* Kích thước chữ */
  margin: 10px 0; /* Khoảng cách trên và dưới */
  color: #333; /* Màu chữ */
}

/* Giá sản phẩm */
.menu-item-info p {
  margin: 0; /* Loại bỏ khoảng cách mặc định */
  color: #fcb034; /* Màu vàng cho giá */
  font-weight: bold; /* Đậm chữ */
}
</style>

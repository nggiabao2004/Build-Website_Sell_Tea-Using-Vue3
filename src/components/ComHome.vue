<template>
  <main>
    <div class="menu">
      <!-- Tiêu đề danh sách sản phẩm -->
      <h2 class="menu-title">TẤT CẢ SẢN PHẨM</h2>
      
      <div class="menu-grid">
        <!-- Duyệt qua từng sản phẩm và hiển thị -->
        <div class="menu-item" v-for="product in filterproduct" :key="product.id">
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

      <!-- Nút phân trang (Prev và Next) -->
      <div class="pagination">
        <!-- Nút lùi (Prev) chỉ hiển thị nếu đang ở trang > 1 -->
        <button v-if="currentpage > 1" @click="changepage(currentpage - 1)">Prev</button>
        
        <!-- Hiển thị trang hiện tại và tổng số trang -->
        <p>{{ currentpage }} of {{ totalpage }}</p>

        <!-- Nút tới (Next) chỉ hiển thị nếu đang ở trang < totalpage -->
        <button v-if="currentpage < totalpage" @click="changepage(currentpage + 1)">Next</button>
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
      // Dữ liệu sản phẩm được import từ file items
      products: items,
      
      // Phân trang
      currentpage: 1,   // Trang hiện tại
      limit: 4          // Số lượng sản phẩm hiển thị mỗi trang
    };
  },
  
  computed: {
    // Tính tổng số trang
    totalpage() {
      return Math.ceil(this.products.length / this.limit);
    },
    
    // Lọc sản phẩm hiển thị theo trang hiện tại
    filterproduct() {
      const start = (this.currentpage - 1) * this.limit;
      const end = start + this.limit;
      return this.products.slice(start, end);
    }
  },
  
  methods: {
    // Hàm thay đổi trang khi nhấn nút phân trang
    changepage(page) {
      // Kiểm tra trang có hợp lệ không
      if (page >= 1 && page <= this.totalpage) {
        this.currentpage = page; // Cập nhật trang hiện tại
        console.log(this.currentpage); // In ra trang hiện tại (dùng cho debug)
      }
    }
  }
};
</script>

<style scoped>
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

/* Phân trang */
.pagination {
  display: flex;
  justify-content: center; /* Căn giữa các nút */
  align-items: center; /* Căn giữa theo chiều dọc */
  margin-top: 20px; /* Khoảng cách từ các sản phẩm */
}

/* Nút phân trang */
.pagination button,
.pagination p {
  margin: 0 5px; /* Khoảng cách giữa các nút */
  padding: 5px 10px; /* Đệm cho các nút */
  background-color: #fcb034; /* Màu nền vàng cho nút */
  border: none; /* Loại bỏ viền */
  border-radius: 4px; /* Bo góc */
  cursor: pointer; /* Hiệu ứng con trỏ khi di chuột lên nút */
}

.pagination button:hover,
.pagination p:hover {
  background-color: #e59426; /* Màu nền thay đổi khi hover */
}

/* Đánh dấu trang hiện tại */
.pagination button.active {
  background-color: #333; /* Màu nền nút trang hiện tại */
  color: white; /* Màu chữ nút trang hiện tại */
}
</style>

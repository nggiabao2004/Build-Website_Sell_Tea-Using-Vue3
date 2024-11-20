<template>
  <main>
    <div class="menu">
      <h2 class="menu-title">TẤT CẢ SẢN PHẨM</h2>
      <div class="menu-grid">
        <div class="menu-item" v-for="product in products" :key="product.id">
          <router-link :to="{ name: 'ProductDetail', params: { id: product.id }}">
            <img :src="product.image" alt="Product Image">
            <div class="menu-item-info">
              <h3>{{ product.name }}</h3>
              <p>{{ product.price }}.000 VND</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import items from "@/data/items";

export default {
  data() {
    return {
      products: items
    };
  }
};
</script>

<style>
.menu {
  text-align: center;
  padding: 40px 20px;
  background-color: #fff;
}

.menu-title {
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
}

.menu-item {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  background-color: #fff;
}

.menu-item img {
  width: 100%;
  transition: transform 0.3s ease;
}

.menu-item:hover img {
  transform: scale(1.1);
}

.menu-item-info {
  padding: 10px;
  text-align: center;
}

.menu-item-info h3 {
  font-size: 18px;
  margin: 10px 0;
  color: #333;
}

.menu-item-info p {
  margin: 0;
  color: #fcb034;
  font-weight: bold;
}
</style>

<template>
    <div v-if="this.cart.length == 0">
        <p>Giỏ hàng trống</p> <!-- Hiển thị thông báo nếu giỏ hàng rỗng -->
    </div>
    <div class="modal-content">
        <table style="width: 100%;" class="text-center table">
            <tr>
                <th></th>
                <th>Tên sản phẩm</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Giá tiền</th>
                <th></th>
            </tr>
            <!-- dùng v-for để hiển thị danh sách sản phẩm trong giỏ hàng -->
            <tr v-for="item in cart" :key="item.id">
                <td><img :src="item.image" style="height: 100px;width: 100px;"></td> <!-- Hiển thị hình ảnh sản phẩm -->
                <td class="align-middle">{{item.name}}</td> <!-- Tên sản phẩm -->
                <td class="align-middle">{{item.price}}.000/ ly</td> <!-- Đơn giá sản phẩm -->
                <td class="align-middle">
                    <!-- Giảm số lượng -->
                    <button @click="decreaseQuantity(item)"> - </button>
                        {{item.quantity}} <!-- Hiển thị số lượng sản phẩm -->
                    <!-- Tăng số lượng -->
                    <button @click="increaseQuantity(item)"> + </button>
                </td>
                <td class="align-middle">{{ calculatePrice(item) }}.000</td> <!-- Tính giá tiền của sản phẩm -->
                <td class="align-middle">
                    <button class="btn btn-danger" @click="deleteproduct(item)">Xóa</button> <!-- Xóa sản phẩm khỏi giỏ hàng -->
                </td>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th>Tổng tiền</th>
                <th>{{ tongsoluong }}</th> <!-- Tổng số lượng sản phẩm -->
                <th>{{ tongtien }}.000 VND</th> <!-- Tổng giá tiền -->
                <th>
                    <button class="btn btn-danger" @click="xoahet">Xóa hết</button> <!-- Xóa toàn bộ sản phẩm trong giỏ hàng -->
                </th>
            </tr>
            <!-- Thêm button Thanh toán dưới giá tiền -->
            <tr>
                <td colspan="6"> <!-- Tạo khoảng cách ngang bằng 6 cột -->
                    <button class="btn btn-primary" @click="dathang">Thanh toán</button> <!-- Button thanh toán -->
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import items from '../data/items' // Danh sách tất cả các sản phẩm
import cart from '../data/cart'   // Giỏ hàng lưu các sản phẩm đã thêm
export default {
    data() {
        return {
            cart: cart // Lấy dữ liệu giỏ hàng từ file dữ liệu
        }
    },
    computed: {
        tongtien() {
            // Tính tổng tiền trong giỏ hàng
            return this.cart.reduce((total, item) => total + item.quantity * item.price, 0)
        },
        tongsoluong() {
            // Tính tổng số lượng sản phẩm trong giỏ hàng
            return this.cart.reduce((total, item) => total + item.quantity, 0)
        },
    },
    methods: {
        calculatePrice(item) {
            // Tính giá tiền từng sản phẩm dựa trên số lượng và giá đơn vị
            return item.quantity * item.price;
        },
        deleteproduct(item) {
            // Xóa sản phẩm cụ thể khỏi giỏ hàng
            this.cart = this.cart.filter(x => x.id !== item.id)
        },
        xoahet() {
            this.cart = [] // Xóa hết tất cả sản phẩm trong giỏ hàng
        },
        increaseQuantity(item) {
            // Tăng số lượng sản phẩm, kiểm tra nếu còn hàng trong kho
            const pro = items.find(x => x.id == item.id)
            if (item.quantity < pro.quality) {
                item.quantity++
            }
        },
        decreaseQuantity(item) {
            // Giảm số lượng sản phẩm trong giỏ hàng hoặc xóa sản phẩm nếu số lượng bằng 1
            if (item.quantity > 1) {
                item.quantity--
            } else {
                this.deleteproduct(item) // Xóa sản phẩm nếu số lượng giảm về 0
            }
        },
        dathang() {
            // Lưu giỏ hàng vào localStorage và chuyển hướng đến trang hóa đơn
            localStorage.setItem('cart', JSON.stringify(this.cart));
            this.$router.push('/hoadon');
        }
    }
}
</script>

<style>
/* Không thêm CSS vì chưa có yêu cầu cụ thể */
</style>

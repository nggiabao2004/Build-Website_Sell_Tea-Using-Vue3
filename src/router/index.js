// Nhập các thành phần cần thiết từ Vue Router
import { createWebHistory, createRouter } from "vue-router";
import Home from '@/components/ComHome.vue';
import GioiThieu from '@/components/ComGioiThieu.vue';
import LienHe from '@/components/ComLienHe.vue';
import ProductDetail from '@/components/ComProductDetail.vue';
import Cart from '@/components/ComCart.vue';
import Register from '@/components/ComRegister';
import Login from '@/components/ComLogin';
import HoaDon from '@/components/ComHoaDon';

// Tạo mảng chứa các đối tượng đường dẫn (routes) cho từng trang
const routes = [
    // Đối tượng cho trang chủ
    {
        path: "/",
        name: "Home",
        component: Home
    },
    // Đối tượng cho trang Giới thiệu
    {
        path: "/gioithieu",
        name: "GioiThieu",
        component: GioiThieu
    },
    // Đối tượng cho trang Liên hệ
    {
        path: "/lienhe",
        name: "LienHe",
        component: LienHe
    },
    // Đối tượng cho trang Chi tiết sản phẩm (với tham số :id)
    {
        path: "/product/:id",
        name: "ProductDetail",
        component: ProductDetail
    },
    // Đối tượng cho trang Giỏ hàng
    {
        path: "/cart",
        name: "Cart",
        component: Cart
    },
    // Đối tượng cho trang Đăng ký tài khoản
    {
        path: "/register",
        name: "DangKy",
        component: Register
    },
    // Đối tượng cho trang Đăng nhập
    {
        path: "/login",
        name: "DangNhap",
        component: Login
    },
    // Đối tượng cho trang Hóa đơn
    {
        path: "/hoadon",
        name: "HoaDon",
        component: HoaDon
    }
];

// Tạo đối tượng router với lịch sử trình duyệt và các đường dẫn đã định nghĩa
const router = createRouter({
    history: createWebHistory(),
    routes
});

// Xuất đối tượng router để sử dụng trong ứng dụng
export default router;

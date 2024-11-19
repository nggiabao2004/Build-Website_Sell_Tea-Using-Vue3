import { createWebHistory,createRouter } from "vue-router";
import Home from '@/components/ComHome.vue'
import GioiThieu from '@/components/ComGioiThieu.vue'
import LienHe from '@/components/ComLienHe.vue'
import TinTuc from '@/components/ComTinTuc.vue'
import ProductDetail from '@/components/ComProductDetail.vue'
import Cart from '@/components/ComCart.vue'
import Register from '@/components/ComRegister'
import Login from '@/components/ComLogin'
//import HoaDon from '@/components/ComHoaDon'

// tạo mảng chứa những đường link
const routes=[
    // đối tượng trang chủ
    {
        path:"/",
        name:"Home",
        component:Home
    },
    // đường link ko phải là trang chủ path:"/ten"
    {
        path:"/gioithieu",
        name:"GioiThieu",
        component:GioiThieu
    },
    {
        path:"/lienhe",
        name:"LienHe",
        component:LienHe
    },
    {
        path:"/tintuc",
        name:"TinTuc",
        component:TinTuc
    },
    {
        path:"/product/:id",
        name:"ProductDetail",
        component:ProductDetail
    },
    {
        path:"/cart",
        name:"Cart",
        component:Cart
    },
    {
        path:"/register",
        name:"DangKy",
        component:Register
    },
    {
        path:"/login",
        name:"DangNhap",
        component:Login
    },
    // {
    //     path:"/hoadon",
    //     name:"HoaDon",
    //     component:HoaDon
    // }
]
// tạo đối tượng router
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router
<template>
    <div v-if="this.cart.length==0">
        <p>Giỏ hàng trống</p>
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
            <!-- dùng v-for thể hiện giỏ hàng -->
            <tr v-for="item in cart" :key="item.id">
                <td><img :src="item.image" style="height: 100px;width: 100px;"></td>
                <td class="align-middle">{{item.name}}</td>
                <td class="align-middle">{{item.price}}.000/ ly</td>
                <td class="align-middle">
                    <button @click="decreaseQuantity(item)"> - </button>
                        {{item.quantity}}
                    <button @click="increaseQuantity(item)"> + </button>
                </td>
                <td class="align-middle">{{ calculatePrice(item) }}.000</td>
                <td class="align-middle">
                    <button class="btn btn-danger" @click="deleteproduct(item)">Xóa</button>
                </td>
            </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Tổng tiền</th>
                            <th>{{ tongsoluong }}</th>
                            <th>{{ tongtien }}.000 VND</th>
                            <th>
                                <button class="btn btn-danger" @click="xoahet">Xóa hết</button>
                            </th>
                        </tr>
                        <!-- Thêm button Thanh toán dưới giá tiền -->
                        <tr>
                            <td colspan="6"> <!--"Tạo khoảng cách" *6 lần-->
                                <button class="btn btn-primary" @click="dathang">Thanh toán</button>
                            </td>
                        </tr>
        </table>
    </div>
</template>

<script>
import items from '../data/items'
import cart from '../data/cart'
export default {
    data(){
        return{
            cart:cart
        }
    },
    computed:{
        tongtien()
        {
            return this.cart.reduce((total,item)=>total+item.quantity*item.price,0)
        },
        tongsoluong()
        {
            return this.cart.reduce((total,item)=>total+item.quantity,0)
        },
    },
    methods:
    {
        calculatePrice(item) {
            return item.quantity * item.price; // Tính giá tiền từng sản phẩm
        },
        deleteproduct(item)
        {
            this.cart=this.cart.filter(x=>x.id!==item.id)
        },
        xoahet()
        {
            this.cart=[] // Xóa hết sản phẩm trong giỏ hàng
        },
        increaseQuantity(item)
        {
            //từ item tìm ngược lại đó là sản phẩm nào để lấy số lượng nào đó
            const pro=items.find(x=>x.id==item.id)
            if (item.quantity<=pro.quality)
            {
                item.quantity++
            }
        },
        decreaseQuantity(item){
            // Giảm số lượng sản phẩm trong giỏ hàng hoặc xóa sản phẩm nếu số lượng bằng 1
            if (item.quantity>1)
            {
                item.quantity--
            }
            else
            {
                this.deleteproduct(item)
            }
        },
        dathang()
        {
            localStorage.setItem('cart', JSON.stringify(this.cart));
            this.$router.push('/hoadon');
        }
    }
}
</script>

<style>

</style>
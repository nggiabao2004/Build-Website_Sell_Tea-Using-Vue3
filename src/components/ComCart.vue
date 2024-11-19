<template>
    <div v-if="this.cart.length==0">
        <p>Giỏ hàng trống</p>

    </div>
  <div class="modal-content">
                    <table style="width: 100%;" class="text-center table">
                        <tr>
                            <th>HÌNH</th>
                            <th>SẢN PHẨM</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Tiền</th>
                            <th></th>
                        </tr>
                        <!-- dùng v-for thể hiện giỏ hàng -->
                        <tr v-for="item in cart" :key="item.id">
                            <td><img :src="item.image" style="height: 100px;width: 100px;"></td>
                            <td class="align-middle">{{item.name}}</td>
                            <td class="align-middle">{{item.price}}</td>
                            <td class="align-middle">
                                <button @click="decreaseQuantity(item)">-</button>
                                    {{ item.quantity }}
                                <button @click="increaseQuantity(item)">+</button>
                            </td>
                            <td class="align-middle">{{item.quantity}}</td>
                            <td class="align-middle">{{item.price*item.quality}}</td>
                            <td class="align-middle"><button class="btn btn-danger" @click="deleteproduct(item)">Remove
                                    1</button></td>
                        </tr>
                        <tr>
                            <th>
                            </th>
                            <th></th>
                            <th>Tổng tiền</th>
                            <th>{{ tongsoluong }}</th>
                            <th>
                                {{ tongtien }}
                            </th>
                            <th><button class="btn btn-danger" @click="xoahet">Xóa hết: !</button>
                            </th>
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
        deleteproduct(item)
        {
            this.cart=this.cart.filter(x=>x.id!==item.id)
        },
        xoahet()
        {
            this.cart=[]
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
            const user=JSON.parse(localStorage.getItem('currentUser'))
            if (user)
            {
                //Chuyển về trang hoadon
                //this.$router.push('/hoadon')
                this.$router.push('/hoadon')
            }
            else
            {
                this.$router.push('/login')
            }
        }
    }
}
</script>

<style>

</style>
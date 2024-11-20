let items = [
  {
    id: 1, // ID của món trà
    name: "Trà sen vàng", // Tên món trà
    image: require("@/assets/TraSenVang.jpg"), // Hình ảnh của món trà
    description: "Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi mới.", // Mô tả chi tiết về món trà
    price: 45, // Giá của món trà
    quality: 3 // Chất lượng của trà, có thể là đánh giá từ 1 đến 5 (3 là trung bình)
  },
  {
    id: 2,
    name: "Trà thạch đào",
    image: require("@/assets/TraThachDao.jpg"),
    description: "Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi mới.",
    price: 40,
    quality: 3
  },
  {
    id: 3,
    name: "Trà thạch vải",
    image: require("@/assets/TraThachVai.jpg"),
    description: "Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi mới.",
    price: 45,
    quality: 3
  },
  {
    id: 4,
    name: "Trà xanh đậu đỏ",
    image: require("@/assets/TraXanhDauDo.jpg"),
    description: "Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi mới.",
    price: 45,
    quality: 3
  },
];

export default items; // Xuất mảng items để có thể sử dụng trong các phần khác của ứng dụng

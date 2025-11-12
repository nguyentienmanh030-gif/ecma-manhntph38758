// Sửa đoạn code sau để hoạt động đúng
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Hiện tại in ra 3,3,3
  }, 100);
}
// Yêu cầu: Sửa để in ra 0,1,2

// Tạo một object student với const
// Thêm thuộc tính điểm và in ra
const student = {
  name: "ThuyTien",
  age: 20,
};
student.grade = "A";

// 2. Thay đổi tuổi thành 21
student.age = 21;
console.log(student);
// Thực hiện các thao tác sau:
// 1. Thêm thuộc tính grade với giá trị "A"
// 2. Thay đổi tuổi thành 21
// 3. In ra toàn bộ thông tin student

// Tạo template cho email thông báo
const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};

// Tạo template string cho email
const emailTemplate = `xin chào ${user.firstName} ${user.lastName}, đơn hàng của bạn là ${user.product} với giá là ${user.price}, cảm ơn bạn đã sử dụng dịch vụ của chúng tôi`; // Viết template ở đây

console.log(emailTemplate);

// Tạo HTML template cho card sản phẩm
const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};

// Tính giá sau giảm
const finalPrice = product.price * (1 - product.discount / 100);

// Tạo template HTML
const productCard = `<div class="product-card" style="border:1px solid #ddd; border-radius:10px; padding:16px; width:250px; font-family:sans-serif;">
    <h2 style="margin:0 0 8px 0;">${product.name}</h2>
    <p>Giá gốc: <s>${product.price.toLocaleString()}₫</s></p>
    <p>Giảm giá: <strong>${product.discount}%</strong></p>
    <p>Giá sau giảm: <span style="color:red; font-weight:bold;">${finalPrice.toLocaleString()}₫</span></p>
    <p>Tình trạng: ${product.inStock ? "✅ Còn hàng" : "❌ Hết hàng"}</p>
    <button style="padding:8px 12px; border:none; background:#007bff; color:white; border-radius:6px; cursor:pointer;">
      Mua ngay
    </button>
  </div>`; // Viết template ở đây

console.log(productCard);
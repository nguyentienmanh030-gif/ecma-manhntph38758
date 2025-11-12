function calculateBMI(weight, height) {
  // Sử dụng const cho các hằng số
  const bmi = weight / (height * height);
  let category;

  // Phân loại BMI
  if (bmi < 18.5) {
    category = "Thiếu cân";
  } else if (bmi < 25) {
    category = "Bình thường";
  } else if (bmi < 30) {
    category = "Thừa cân";
  } else {
    category = "Béo phì";
  }

 
  return `BMI: ${bmi.toFixed(2)} - Phân loại: ${category}`;
}


console.log(calculateBMI(70, 1.75));
//b2
function createBook(title, author, year, price) {

  const propertyKey = "publishedYear";

  return {
    title,
    author,
    [propertyKey]: year, 
    price,


    getBookInfo() {
      return `📘 ${this.title} - Tác giả: ${this.author}, Năm: ${this.publishedYear}, Giá: ${this.price.toLocaleString()} VND`;
    },


    calculateDiscount(discount) {
      const finalPrice = this.price * (1 - discount / 100);
      return `💰 Giá sau giảm ${discount}%: ${finalPrice.toLocaleString()} VND`;
    }
  };
}


const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10));

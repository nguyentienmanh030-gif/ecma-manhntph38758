// Function 1
const multiply = (a, b) => a * b;

// Function 2
const isPositive = number => number >= 0;

// Function 3
const getRandomNumber = () => Math.random();

// Function 4
document.addEventListener("click", () => {
  console.log("Clicked!");
});
 //2
 function createUser(name = "Anonymous", age = 18, isAdmin = false) {
  return {
    name,
    age,
    isAdmin,
  };
}
//3
//mergeArrays
const mergeArrays = (...arrays) => [].concat(...arrays);


console.log(mergeArrays([1, 2], [3, 4], [5]));
//sumAll
const sumAll = (...numbers) => numbers.reduce((sum, n) => sum + n, 0);


console.log(sumAll(1, 2, 3, 4)); 
//createProduct
const createProduct = (
  name = "Sản phẩm chưa đặt tên",
  price = 0,
  inStock = true
) => ({
  name,
  price,
  inStock,
});


console.log(createProduct("iPhone 15", 20000000, true));


console.log(createProduct());




// function getFirstLast(array) {
//   const [first] = array;                // Lấy phần tử đầu tiên
//   const last = array[array.length - 1]; // Lấy phần tử cuối cùng
//   return [first, last];
// }

// console.log(getFirstLast([1, 2, 3, 4]));


// function swapElements(arr) {
  
//   const newArr = [...arr];

  
//   [newArr[1], newArr[3]] = [newArr[3], newArr[1]];

//   return newArr;
// }

// console.log(swapElements([1, 2, 3, 4, 5])); 



// function getUserInfo(user) {

//   const {
//     personalInfo: {
//       name,
//       contact: { email },
//     },
//   } = user;


//   return { name, email };
// }

// const user = {
//   id: 1,
//   personalInfo: {
//     name: "javascript",
//     contact: {
//       email: "javascript@email.com",
//       phone: "123-456-7890",
//     },
//   },
// };

// console.log(getUserInfo(user));


// function createProduct({ name, price, category = "general", inStock = true }) {

//   return { name, price, category, inStock };
// }

// const product = createProduct({ name: "Laptop", price: 999 });
// console.log(product);



// async function run() {
//   console.log("Start");
//   await delay(2000);
//   console.log("2 seconds passed");
// }

// run();


// Viết hàm fetchMultipleData

// function fetchMultipleData(urls) {

// }

// fetchMultipleData(["/api/user/1", "/api/user/2"]).then((users) =>
//   console.log(users)
// );




// async function processOrder(orderId) {
//   try {
//     const order = await getOrder(orderId);
//     const user = await getUser(order.userId);
//     const products = await getProducts(order.productIds);

//     return { order, user, products };
//   } catch (error) {
//     console.error("Error processing order:", error);
//     throw error; 
//   }
// }

// (async () => {
//   try {
//     const result = await processOrder(123);
//     console.log(result);
//   } catch (err) {
//     console.log("Failed:", err);
//   }
// })();




// async function safeApiCall(apiFunction, ...args) {
//   try {
//     const result = await apiFunction(...args);
//     return { success: true, data: result };
//   } catch (error) {
//     return { success: false, error };
//   }
// }


// async function fetchUser(id) {
//   if (id === 0) throw new Error("User not found");
//   return { id, name: "Nguyen Van A" };
// }


// (async () => {
//   const res1 = await safeApiCall(fetchUser, 1);
//   console.log(res1);
 

//   const res2 = await safeApiCall(fetchUser, 0);
//   console.log(res2);

// })();







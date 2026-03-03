/* ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
5. Use findIndex() to find the position of "Keyboard" */


const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//  1. Use filter() to get only inStock products
let cart_1=cart.filter((element)=> element.inStock)  // element.instock is a boolean it directly checks
    console.log("The products which are in stock are",cart_1);  /* output =  { id: 101, name: 'Laptop', price: 60000, quantity: 1, inStock: true },
  { id: 102, name: 'Mouse', price: 800, quantity: 2, inStock: true }, */ 


// 2. Use map() to create a new array with:  { name, totalPrice }
let cart_2 = cart.map(itemObj => ({
    name: itemObj.name,
    totalPrice: itemObj.price * itemObj.quantity
})); 
console.log("New array using name and total price =",cart_2);


// 3. Use reduce() to calculate grand total cart value
    let grand_total=cart.reduce((acc,itemObj)=>acc+itemObj.price,0)
    console.log("Total price is =",grand_total);



//  4. Use find() to get details of "Mouse"
    let det_of_mouse=cart.find(ele=>ele.name=="Mouse")
    console.log("Details of a Mouse is =",det_of_mouse);


// 5. Use findIndex() to find the position of "Keyboard" */
    let indexof_key=cart.findIndex((ele=>ele.name=="Keyboard"))
    console.log("Index of a element is =",indexof_key);
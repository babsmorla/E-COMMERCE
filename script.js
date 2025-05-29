

const container = document.getElementById("product-container");
const baseUrl = "https://fakestoreapi.com/products";

const getProduct = async () => {

try {
  const response = await fetch(baseUrl, {method: "GET"});
const data = await response.json();

displayData(data);

} catch (error) {
  console.log(error);
} finally {
  console.log("")
}};


const displayData = (data) => {
console.log(data);

// trial side before actual display
// create a product card
// insert card into container div

data.forEach((item, index) => {

  let productCard = document.createElement("div");
  productCard.classList.add("product-card");
  productCard.innerHTML =  `<img src= ${item.image} alt = ${item.title}   />
  <h2>${item.title} </h2>
   <p>${item.description} </p>
  <p>Rating: ${item.rating.rate} </p>
  <h3> Price: $${parseFloat (item.price)}
  `;
  container.appendChild(productCard);
  
});

};

getProduct();












// ****************************** GENERAL CLASS LINE WITH COMMENTS ******************************

// ******************************************************* BEGIN LINE

// target out html container
// fetch our product from the API
// display the product in the container
// JSON javascript Objects Notation
// ES5 syntax - fnctn def
// if you use the mouse hover over something the : after the last , is the return type
// HTTP status quos
// http methods
// A sync action in fetching api
// for 


// ******************************************************** ES6 START LINE

// Es6
// use async to a function anytime you want to use await
// the await just tries to alert the fetch to wait after it had given the promise


// const container = document.getElementById("product-container");
// const baseUrl = "https://fakestoreapi.com/products";

// const fetchProducts = async () => {

// try {
//   const response = await fetch(baseUrl, {method: "GET"});
// const data = await response.json();

// console.log(data);

// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("");
// }
// };

// fetchProducts();

// ************************************************************ ES6 ENDLINE - ES5 NEW LINE

// const container = document.getElementById("product-container");
// const baseUrl = "https://fakestoreapi.com/products";

// check function at this point later!!
// const fetchProducts = () => {

// introduce method to fetch API and assign a varibale to the fetch call

//  const response = fetch(baseUrl, {
  // the get or bringing get is optional not all specify it
    // method: "GET",
    // key : value denotes this is a method
  // });

// es5 
// this gives you a promise
// log response to see promise
// console.log(response);
// response.then((res) => res.json()).then((res) => console.log(res))
// };

// fetchProducts();

// ************************************************************ ES5

//Es5 method 2 VVVVV
// const data = response.then((res) => res.json())
// data.then((res) => console.log(res))
// };

// const getProduct = async () => {

// const response = await fetch(baseUrl, {method: "GET"});
// const data = await response.json();

// console.log(data);

// };

// getProduct();

// ************************************************************ ES5




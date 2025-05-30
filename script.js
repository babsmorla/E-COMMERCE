

const inputForm = document.getElementById("left-product-form");
const messageContainer = document.getElementById("message");
const container = document.getElementById("product-container");
const baseUrl = "https://fakestoreapi.com/products";


// fecth Data and Store in local Storage
// Store data retrieve from API into the local storgae

const fetchAndStoredData = async () => {

try {
  const response = await fetch(baseUrl, {method: "GET"});
const data = await response.json();

localStorage.setItem("apiData",JSON.stringify(data));
console.log("Data stored in localStorage", data);


} catch (error) {
  console.log("Error fecthing API ",error);
} finally {
  console.log("")
}};


// Function to display ONLY data from localStorage

const loadAndDisplayLocalData = () => {
  const dataStored = JSON.parse(localStorage.getItem("apiData"));

  if (dataStored && Array.isArray(dataStored)) {
    console.log("Data from local storage is displayed");
    displayData(dataStored);

  } else {
    console.warn("No data in localStorage. Re-fetching");
    fetchAndStoreData();
  }
};




// Diplay Stored data after retrieving from localStorage

const displayData = (data) => {
container.innerHTML = "";
console.log("Dipslayed Data", data);

data.forEach((item, index) => {

  let productCard = document.createElement("div");
  productCard.classList.add("product-card");
  productCard.innerHTML =  `<img src= ${item.image} alt = ${item.title}/>
  <h2>${item.title} </h2>
   <p>${item.description} </p>
  <p>Rating: ${item.rating.rate} </p>
  <h3>Price: $${parseFloat (item.price)}</h3>
  <button class="btn"> Delete </button>  
  `;

  container.appendChild(productCard);
  
});

};
loadAndDisplayLocalData();
fetchAndStoredData();





// **************************************************************************************** INPUT FORM AND VALIDATION


inputForm.addEventListener("submit", function(event){
  event.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
 const image = document.getElementById("imageUrl").value;
  const price = parseFloat(document.getElementById("price").value);
const rate = parseFloat(document.getElementById("rate").value);

  if (!title || !description || !image || !price || !rate){
    messageContainer.style.display ="block"
    messageContainer.innerHTML ="Please fill in all fields."
           messageContainer.style.color="red"
    return;
  };


const newProduct = {
    title,
    price,
    description,
    image,
    category: "electronics", // add a dummy category as API expects it
    rating: {
      rate: rate,
      count: 1
    }
  };


  // Pull data from local storage

  const newData = dataStored || [] ;

  // push new product to existing

  newData.push(newProduct);

  // Save data back to local storage
  localStorage.setItem("apiData",JSON.stringify(newData));
  
  messageContainer.style.display ="block"
  messageContainer.innerHTML ="Product added succesfully."
  messageContainer.style.color="green"


 productBox.innerHTML = "";
  productCard(container);

   getProduct();

    });


  











// Retrive data from localStorage after storing

// const dataStored = JSON.parse(localStorage.getItem("apiData"));
// if (dataStored) {
//   console.log("Data retrieved from localStorage", dataStored);
//   displayData(dataStored);

// } else {
//   console.log("Data not found");
//   fetchAndStoredData();
  
// }





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




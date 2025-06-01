const inputForm = document.getElementById("left-product-form");
const messageContainer = document.getElementById("message");
const container = document.getElementById("product-container");

const baseUrl = "https://btl-products-api.onrender.com/products";

// ✅ Fetch and display products
const getProducts = async () => {
  try {
    const response = await fetch(baseUrl, { method: "GET" });
    const data = await response.json();
    displayProducts(data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// ✅ Display products in the DOM
const displayProducts = (data) => {
  container.innerHTML = "";

  data.forEach((item) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <h2>${item.title}</h2>
      <p>${item.description}</p>
      <p>Rating: ${item.rating}</p>
      <h3>Price: $${item.price}</h3>
      <p>Brand: ${item.brand}</p>
      <p>Category: ${item.category}</p>
      <button class="btn" data-id="${item.id}">Delete</button>
    `;

    container.appendChild(productCard);
  });

  attachDeleteEvents(); // ✅ Attach delete after rendering
};

// ✅ Add a new product via POST
inputForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const image = document.getElementById("imageUrl").value;
  const price = parseFloat(document.getElementById("price").value);
  const rating = parseFloat(document.getElementById("rate").value);
  const brand = document.getElementById("brand").value;
  const category = document.getElementById("category").value;

  if (
    !title ||
    !description ||
    !image ||
    !price ||
    !rating ||
    !brand ||
    !category
  ) {
    messageContainer.innerHTML = "Please fill in all fields.";
    messageContainer.style.color = "red";
    return;
  }

  

  const newProduct = {
    title,
    description,
    price,
    rating,
    image,
    brand,
    category,
  };

  console.log("Submitting:", newProduct);

  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) throw new Error("Failed to add product");

    const result = await response.json();
    messageContainer.innerHTML = "Product added successfully!";
    messageContainer.style.color = "green";
    // inputForm.reset();
    getProducts(); // ✅ Refresh products after adding
  } catch (error) {
    console.error("Add product error:", error);
    messageContainer.innerHTML = "Error adding product.";
    messageContainer.style.color = "red";
  }

  inputForm.reset();
  getProducts();
});

// ✅ Attach delete event to each button
const attachDeleteEvents = () => {
  const deleteButtons = document.querySelectorAll(".btn");

  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const productId = btn.getAttribute("data-id");

      try {
        const response = await fetch(
          `${baseUrl}/${productId}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok)
          throw new Error(`Delete failed with status ${response.status}`);

        messageContainer.innerHTML = "Product deleted successfully!";
        messageContainer.style.color = "Black";
        getProducts();
      } catch (error) {
        console.error("Delete error:", error);
        messageContainer.innerHTML = "Failed to delete product.";
        messageContainer.style.color = "red";
      }
    });
  });
};

// ✅ Initial load
getProducts();

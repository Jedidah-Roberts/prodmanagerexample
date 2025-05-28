const form = document.getElementById("Form");
const message = document.getElementById("message");
const container = document.getElementById("product-container");

let products = [];

form.addEventListener("submit", submitDocument);

function submitDocument(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const description = document.getElementById("description").value.trim();
  const image = document.getElementById("image-url").value.trim();
  const price = document.getElementById("price").value.trim();
  const brand = document.getElementById("brand").value.trim();

  if (!name || !description || !image || !price || !brand) {
    message.innerText = "Please make sure to input all fields";
    message.style.color = "red";
    return;
  }

  const product = {
    name,
    description,
    image,
    price,
    brand,
  };

  products.push(product);

  displayProduct(product);

  form.reset();
  message.innerText = "Product added successfully!";
  message.style.color = "green";
}

function displayProduct(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
     <p class ="price">Price:</strong> $${product.price}</p>
    <p><strong>Brand ${product.brand}</p>
   
  `;

  container.appendChild(card);
}

const form = document.getElementById("Form");
const message = document.getElementById("message");
const productContainer = document.getElementById("product-container");

const products = [];

form.addEventListener("submit", submitDocuments);

function submitDocuments(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const image = document.getElementById("image-url").value;
  const price = document.getElementById("price").value;
  const brand = document.getElementById("brand").value;

  if (
    name.length === 0 ||
    description.length === 0 ||
    image.length === 0 ||
    price.length === 0 ||
    brand.length === 0
  ) {
    message.innerText = "Please input all fields!";
    message.classList.add("error");
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
  message.className("success");
}

  function displayProduct(products) {
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">Price: &#8373;${product.price.toFixed(2)}</p>
                <p>Brand: ${product.brand}</p>
                `;

      productContainer.appendChild(productCard);
    });
  }


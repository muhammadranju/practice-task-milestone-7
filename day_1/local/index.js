/* eslint-disable no-unused-vars */
function addProduct() {
  const productNameEle = document.getElementById("productName");
  const productQtyEle = document.getElementById("productQty");
  const productImageEle = document.getElementById("productImage");
  const aboutEle = document.getElementById("about");
  const product = productNameEle.value;
  const qty = productQtyEle.value;
  const about = aboutEle.value;
  if (product && qty) {
    if (productImageEle.files && productImageEle.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imageUrl = e.target.result;
        displayData(product, qty, imageUrl, about);

        setLocalStorageData(product, qty, imageUrl, about);
      };
      reader.readAsDataURL(productImageEle.files[0]);
    } else {
      displayData(product, qty, "", about);
      setLocalStorageData(product, qty, "", about);
    }
    productImageEle.value = "";
    productQtyEle.value = "";
    productNameEle.value = "";
    aboutEle.value = "";
  }
}

function displayData(name, qty, image, about) {
  const displayData = document.getElementById("displayData");
  displayData.innerHTML += /*html*/ `
    <div class="card bg-base-100  shadow-xl">
                <figure class="w-full ">
                <img src="${
                  image || "https://via.placeholder.com/150"
                }" alt="Product Image" 
                class="w-full h-full object-cover"
                />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Name: ${name}</h2>
                    <p>${about}</p>
                    <span>Age: ${qty}</span>
            </div>
        </div>
    `;
}
function getLocalStorageData() {
  let cart = {};
  const storedData = localStorage.getItem("cart");

  if (storedData) {
    cart = JSON.parse(storedData);
  }
  return cart;
}

function setLocalStorageData(name, quantity, image, about) {
  const cart = getLocalStorageData();
  cart[name] = { quantity, image, about };

  const cardDataString = JSON.stringify(cart);
  localStorage.setItem("cart", cardDataString);
}

function showProductFromLocalStorage() {
  const savedCart = getLocalStorageData();
  for (let name in savedCart) {
    const { quantity, image, about } = savedCart[name];
    displayData(name, quantity, image, about);
  }
}
showProductFromLocalStorage();

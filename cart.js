function addToCart(product, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name: product, price: price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product} added to cart!`);
}

function displayCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");
  let total = 0;

  if (cartItems.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    document.getElementById("cart-total").textContent = "";
    return;
  }

  cartItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item mb-2";
    div.innerHTML = `
      <strong>${item.name}</strong> - $${item.price}
      <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
    `;
    container.appendChild(div);
    total += item.price;
  });

  document.getElementById("cart-total").textContent = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
document.addEventListener("DOMContentLoaded", function () {
// Subscribe Form
document.getElementById("subscribeForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  if (email.trim() !== "") {
    alert("Thank you for subscribing!");
    document.getElementById("email").value = "";
  } else {
    alert("Please enter a valid email.");
  }
});

// Add to Cart
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    const item = button.getAttribute("data-item");
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cart.push(item);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added.");
  });
});

// View Cart Modal
const cartModal = document.getElementById("cartModal");
const viewCartBtn = document.getElementById("viewCartBtn");
const closeBtn = document.querySelector(".close");

viewCartBtn?.addEventListener("click", () => {
  cartModal.style.display = "block";
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    cartItems.appendChild(li);
  });
});

closeBtn?.addEventListener("click", () => {
  cartModal.style.display = "none";
});

// Clear Cart
document.getElementById("clearCart")?.addEventListener("click", () => {
  sessionStorage.removeItem("cart");
  alert("Cart is cleared!");
  if (document.getElementById("cartItems")) {
    document.getElementById("cartItems").innerHTML = "";
  }
});

// Process Order
document.getElementById("processOrder")?.addEventListener("click", () => {
  if (sessionStorage.getItem("cart")) {
    sessionStorage.removeItem("cart");
    alert("Thank you for your order!");
    if (document.getElementById("cartItems")) {
      document.getElementById("cartItems").innerHTML = "";
    }
  }
});

// Contact Form
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("contactEmail").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;
  const customOrder = document.getElementById("customOrder").checked;

  const contactData = {
    name,
    email,
    phone,
    message,
    customOrder
  };

  localStorage.setItem("contactSubmission", JSON.stringify(contactData));
  alert(`Thank you for your message, ${name}!`);

 document.getElementById("reset")?.addEventListener("click", function (e) {
  e.preventDefault(); 
  document.getElementById("contactForm").reset(); 
});
});
});
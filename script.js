// script.js

// Add to cart functionality
var addToCartButtons = document.getElementsByClassName("add-to-cart");
var cartItems = document.querySelector(".cart-items");

Array.from(addToCartButtons).forEach(function(button) {
    button.addEventListener("click", function() {
        var product = this.parentNode;
        var productName = product.querySelector("h3").textContent;
        var cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = productName;
        cartItems.appendChild(cartItem);
    });
});

// Checkout functionality
var checkoutButton = document.querySelector(".checkout");
checkoutButton.addEventListener("click", function() {
    var cartItems = document.querySelectorAll(".cart-item");
    if (cartItems.length > 0) {
        alert("Thank you for your purchase!");
        cartItems.forEach(function(item) {
            item.remove();
        });
    } else {
        alert("Your cart is empty. Please add items to cart before checking out.");
    }
});


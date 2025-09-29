document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const hamburgerMenu = document.getElementById("hamburger-menu");

  hamburgerIcon.addEventListener("click", () => {
    hamburgerMenu.style.display = (hamburgerMenu.style.display === "block") ? "none" : "block";
  });

  // Optional: close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!hamburgerIcon.contains(event.target) && !hamburgerMenu.contains(event.target)) {
      hamburgerMenu.style.display = "none";
    }
  });
});
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
      return;
    }

    cartItemsContainer.innerHTML = cart.map((item, index) => `
      <div class="cart-item" data-index="${index}">
        <img src="${item.image}" alt="${item.name}" width="300", />
        <p>${item.name}</p>
        <p>Price: ${item.price}</p>
        <button class="remove-item" data-index="${index}">Remove</button>
      </div>
    `).join('');

    // Attach event listeners to all remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        removeItem(index);
      });
    });
  }

  function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove 1 item at position index
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart(); // Re-render the cart after removal
    alert('Are you sure you want to remove the item!');

  }

  // Initial render on page load
  renderCart();
  document.querySelector(".backtocart").addEventListener("click",function(){
  window.location.href="cart.html"
});

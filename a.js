
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

  const slides = document.getElementById("slides");
  const totalSlides = slides.children.length;
  let index = 0;

  setInterval(() => {
    index = (index + 1) % totalSlides; 
    slides.style.transform = `translateX(-${index * 100}%)`;
  }, 3000); 


// Toggle hamburger menu
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

  document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    // Get product info from data attributes
    const name = this.getAttribute('data-name');
    const price = this.getAttribute('data-price');
    const image = this.getAttribute('data-image');

    // Create cart item object
    const cartItem = { name, price, image };

    // Get existing cart from localStorage or empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add new item to cart
    cart.push(cartItem);

    // Save updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to cart page
    window.location.href = '/cart';
    alert("Your item added to cart");
  });
});


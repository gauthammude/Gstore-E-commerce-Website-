const cartCountElement = document.getElementById('cart-count');

function updateCartCount() {
  cartCountElement.innerText = cart.length;
}

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const itemCard = button.parentElement;
    const itemName = itemCard.querySelector('h3').innerText;
    const itemPrice = itemCard.querySelector('p').innerText;

    cart.push({ name: itemName, price: itemPrice });

    alert(`${itemName} has been added to your cart.`);
    updateCartCount(); // update count
  });
});

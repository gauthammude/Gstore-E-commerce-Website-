const allAddToCartButtons = document.querySelectorAll('.grocery-item button, .deal-item button');

allAddToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const itemCard = button.parentElement;
    const itemName = itemCard.querySelector('h3').innerText;
    const itemPrice = itemCard.querySelector('.new-price')?.innerText || itemCard.querySelector('p').innerText;

    cart.push({ name: itemName, price: itemPrice });

    alert(`${itemName} has been added to your cart.`);
    updateCartCount?.(); // if using cart count
  });
});

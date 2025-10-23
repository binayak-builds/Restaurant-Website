const addButtons = document.querySelectorAll('.add-btn');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const cartIcon = document.getElementById('cart-icon');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const placeOrderBtn = document.getElementById('place-order');
let cart = [];

addButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.name;
    const price = parseInt(btn.dataset.price);
    const item = cart.find(i => i.name === name);
    item ? item.qty++ : cart.push({ name, price, qty: 1 });
    updateCart();
  });
});

function updateCart() {
  cartCount.textContent = cart.reduce((sum, i) => sum + i.qty, 0);
  cartItemsContainer.innerHTML = '';
  let total = 0;
  cart.forEach(i => {
    total += i.price * i.qty;
    const li = document.createElement('li');
    li.innerHTML = `${i.name} x${i.qty} <strong>₹${i.price * i.qty}</strong>`;
    cartItemsContainer.appendChild(li);
  });
  cartTotal.textContent = total;
}

cartIcon.addEventListener('click', () => cartModal.classList.remove('hidden'));
closeCart.addEventListener('click', () => cartModal.classList.add('hidden'));
placeOrderBtn.addEventListener('click', () => {
  if (cart.length === 0) return alert('Your cart is empty!');
  localStorage.setItem('cartData', JSON.stringify(cart));
  window.location.href = 'checkout.html';
});

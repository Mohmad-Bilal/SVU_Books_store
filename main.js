let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}
// hide menu and search box on scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}

//header
let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
// adding buy now button 
const buyNowButtons = document.querySelectorAll('.add-to-cart');
buyNowButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// adding checkout button
const checkoutButton = document.querySelector('.checkout');
checkoutButton.addEventListener('click', checkout);

// list contains the books 
const cartItemsList = document.getElementById('cart-items');
// revel the prices 
const totalPriceElement = document.getElementById('total-price');
// the toltal price
let totalPrice = 0;

function addToCart(event) {
  const box = event.target.parentNode;
  const itemName = box.querySelector('h3').innerText;
  const itemPrice = parseInt(box.querySelector('span').innerText.slice(1));

  const cartItem = document.createElement('li');
  cartItem.innerHTML = `
    <span>${itemName}</span>
    <span>$${itemPrice}</span>
  `;

  cartItemsList.appendChild(cartItem);

  totalPrice += itemPrice;
  updateTotalPrice();
}

function checkout() {
  const cartItems = cartItemsList.querySelectorAll('li');
  const fullName = document.getElementById('full-name').value;
  const age = document.getElementById('age').value;
  const address = document.getElementById('address').value;
  const creditCard = document.getElementById('credit-card').value;

  cartItems.forEach(item => {
    const itemName = item.querySelector('span:first-child').innerText;
    const itemPrice = parseInt(item.querySelector('span:last-child').innerText.slice(1));
    console.log(itemName, itemPrice);
  });

  console.log("Shipping Information:");
  console.log("Full Name:", fullName);
  console.log("Age:", age);
  console.log("Address:", address);
  console.log("Credit Card Information:", creditCard);

  cartItemsList.innerHTML = '';
  totalPrice = 0;
  updateTotalPrice();
}

function updateTotalPrice() {
  totalPriceElement.innerText = `$${totalPrice}`;
}

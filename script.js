const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

let carts = document.querySelectorAll('.cart');

let products = [
  {
      name: 'adidas',
      tag: 'T-Shirts',
      price: 78,
      inCart:0
  },
  {
    name: 'adidas',
    tag: 'T-Shirts',
    price: 78,
    inCart:0
},
{
  name: 'adidas',
  tag: 'T-Shirts',
  price: 78,
  inCart:0
},
{
  name: 'adidas',
  tag: 'T-Shirts',
  price: 78,
  inCart:0
}
];

for (let i=0; i< carts.length; i++) {
  carts[i].addEventListener('click', () =>{
    cartNumbers(products[i]);
    totalCost(products[i])
  })
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if(productNumbers){
    document.querySelector('.mcart span').textContent = productNumbers;
  }
}


function cartNumbers(product) {
  let productNumbers = localStorage.getItem('cartNumbers');

  productNumbers = parseInt(productNumbers);

  if(productNumbers) {

    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.mcart span').textContent = productNumbers+1;
} else{
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.mcart span').textContent = 1;
}
  
}

onLoadCartNumbers();




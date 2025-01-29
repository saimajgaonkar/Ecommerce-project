let carts1 = document.querySelectorAll('.cart');
console.log(carts1);
console.log(carts1);
let products1 = [
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

for (let i=0; i< carts1.length; i++) {
  carts1[i].addEventListener('click', () =>{
    
    cartNumbers(products1[i]);
    totalCost(products1[i]);
  })
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
 console.log(productNumbers);
  if(productNumbers){
    document.querySelector('.mcart span').textContent = productNumbers;
  }
}

function cartNumbers() {
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

// write your JS code here
let bookPrice = 5.99 ;
let total = 5.99
let x = 0;

 function bookSale(){
     
     let priceEl = document.querySelector('.text-success').innerHTML=`$${bookPrice}`;
     document.querySelector('.quantity').innerHTML = x ;
     document.querySelector('#cost').innerHTML=`Total Amount:$${total}`;
 }

 function add1(){
    x += 1;
    document.querySelector('#cost').innerHTML=`Total Amount:$${total*x}`;
}
 function less1(){
     x -= 1;
    document.querySelector('.quantity').innerHTML = x;
    document.querySelector('#cost').innerHTML=`Total Amount:$${total*x}`;
    
 }

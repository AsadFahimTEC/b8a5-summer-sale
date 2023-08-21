// get references to the input and apply buttons
const couponInput = document.getElementById('couponInput');
const applyCoupon = document.getElementById('applyCoupon');

// add an eventlistener to input field
couponInput.addEventListener('input', function(){
    const enteredCouponCode = couponInput.value.trim();

    // check the totalprice is greater than or equal to 200 then write the coupon code is 'SELL200' and apply button is enabled

    if(totalPrice >=200.00 || enteredCouponCode === 'SELL200'){
        // enable the apply button
        applyCoupon.disabled = false;
    }
    else{
        // disable the apply button
        applyCoupon.disabled = true;
    }
});

// get references to the output elements
const totalOutput = document.getElementById('totalOutput');
const discountOutput = document.getElementById('discountOutput');
const resultOutput = document.getElementById('resultOutput');
// get reference of make purchase button
const makePurchase = document.getElementById('make-purchase');
// get reference of order list of elements
const orderList = document.getElementById('orderItems');

const names = document.getElementById('name');

// define the prices and discount rate
const prices = [39.00, 25.00, 49.00, 49.00, 69.00, 159.00];
const discountRate = 0.20; // 20% discount

// initialized variables to keep track of selected elements and total price
let selectedElements = [];
let totalPrice = 0.0;

// function to calculate total price and discount
function calculatePriceAndDiscount(cardIndex){
    const price = prices[cardIndex];
    totalPrice += price;
    const discount = totalPrice >= 200.00 ? totalPrice * discountRate: 0.00;
    const total = totalPrice - discount;

    // get the name of selected elements
   const itemName = document.querySelectorAll('.card-title')[cardIndex].textContent.trim();
    
     // added the selected elements to an ordered list
     const listItem = document.createElement('li');
     listItem.textContent = `${itemName} - ${price.toFixed(2)} TK`;
      // increments the counter for each selected items
     orderList.appendChild(listItem);
    

    // display the results
    totalOutput.textContent = `Total Price: ${totalPrice.toFixed(2)} TK`;
    discountOutput.textContent = `Discount: ${discount.toFixed(2)} TK`;
    resultOutput.textContent = `Total: ${total.toFixed(2)} TK`;


    // if total price is greater than 0 then enabled the make purchase button

    if(totalPrice > 0.00 ){
        // enable the make purchase button
        makePurchase.disabled = false;
    }

    else{
        // disable the make purchase button
        makePurchase.disabled = true;
    }

    const enteredCouponCode = couponInput.value.trim();

    // check the totalprice is greater than or equal to 200 then write the coupon code is 'SELL200' and apply button is enabled

    if(totalPrice >=200.00 || enteredCouponCode === 'SELL200'){
        // enable the apply button
        applyCoupon.disabled = false;
    }
    else{
        // disable the apply button
        applyCoupon.disabled = true;
    }
}

// function to clear the previous results and resets variables
function clearResults(){
    selectedElements = [];
    totalPrice = 0.0;
     totalOutput.textContent = '';
     discountOutput.textContent = '';
     resultOutput.textContent = '';
 }

// add click eventlistener to each card
card1.addEventListener('click', function(){
    calculatePriceAndDiscount(0);
});

card2.addEventListener('click', function(){
    calculatePriceAndDiscount(1);
});

card3.addEventListener('click', function(){
    calculatePriceAndDiscount(2);
});

card4.addEventListener('click', function(){
    calculatePriceAndDiscount(3);
});

card5.addEventListener('click', function(){
    calculatePriceAndDiscount(4);
});

card6.addEventListener('click', function(){
    calculatePriceAndDiscount(5);
});

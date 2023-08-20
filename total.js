// calculated the total price


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

// intialized an array to store clicked card names
const clickCards = [];

// get references to the card elements
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');                                            
const card3 = document.getElementById('card3'); 
const card4 = document.getElementById('card4'); 
const card5 = document.getElementById('card5'); 
const card6 = document.getElementById('card6'); 

// get references to the list element
const output = document.getElementById('output'); 

// function to handle card click
function handleCardClick(cardName){
    clickCards.length = 0; // clear the previous array elements name
    clickCards.push(cardName);
    updateOutput();
}

// function to displayed the update output
function updateOutput(){
    output.textContent = '' + clickCards.join(',');
}


// add click eventlistener to each cards
card1.addEventListener('click',function(){
    handleCardClick('1. K. Accessories');
});

card2.addEventListener('click',function(){
    handleCardClick('2. K. Accessories');
});

card3.addEventListener('click',function(){
    handleCardClick('3. Home Cooker');
});

card4.addEventListener('click',function(){
    handleCardClick('4. Sports Back Cap');
});

card5.addEventListener('click',function(){
    handleCardClick('5. Full Jersey Set');
});

card6.addEventListener('click',function(){
    handleCardClick('6. Sports cates');
});

// get references to the output elements
const totalOutput = document.getElementById('totalOutput');
const discountOutput = document.getElementById('discountOutput');
const resultOutput = document.getElementById('resultOutput');

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
    

    // display the results
    totalOutput.textContent = `Total Price: ${totalPrice.toFixed(2)} TK`;
    discountOutput.textContent = `Discount: ${discount.toFixed(2)} TK`;
    resultOutput.textContent = `Total: ${total.toFixed(2)} TK`;

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
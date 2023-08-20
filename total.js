// calculated the total price


// get references to the input and apply buttons
const couponInput = document.getElementById('couponInput');
const applyCoupon = document.getElementById('applyCoupon');

// add an eventlistener to input field
couponInput.addEventListener('input', function(){
    const enteredCouponCode = couponInput.value.trim();

    // check the coupon code is 'SELL200'

    if(enteredCouponCode === 'SELL200'){
        // enable the apply button
        applyCoupon.disabled = false;
    }
    else{
        // disable the apply button
        applyCoupon.disabled = true;
    }
});
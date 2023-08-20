// calculated the total price
const kit = document.getElementById('kit');
const sports = document.getElementById('sports');
const totalPrice = kit + sports;
console.log(totalPrice);

// coupon code applied
function applyCoupon() {
    const couponCode = document.getElementById('couponCode').value;
    if (couponCode === 'SELL200' && totalPrice >= 200) {
        // Apply a 20% discount
        totalPrice *= 0.8;
        document.getElementById('totalPrice').textContent = totalPrice.toFixed(2) + ' TK';
        alert('Coupon applied successfully!');
    } else {
        alert('Invalid coupon code or total price is less than 200 TK.');
    }
}

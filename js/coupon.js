document.getElementById('coupon-field').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const applyButton = document.getElementById('apply-btn')
    if (text === 'SELL200') {
        applyButton.removeAttribute('disabled');
    }
    else {
        applyButton.setAttribute('disabled', true);
    }
});
document.getElementById('apply-btn').addEventListener('click', function () {
    const totalPrice = getTextValueById('total-price');

    if(totalPrice < 200){
        alert('Please Spend 200 TK Or More To Avail Discount');
        document.getElementById('coupon-field').innerText = '';
        return;
    }

    const discountedAmount = (totalPrice * (20 / 100).toFixed(2));
    const currentTotalAmount = (totalPrice - discountedAmount).toFixed(2);


    setElementText('discount', discountedAmount);
    setElementText('total', currentTotalAmount);
});
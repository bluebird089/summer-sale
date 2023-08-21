const totalPrice = getTextValueById('total-price');

const makePurchaseButton = document.getElementById('make-purchase-btn');
if (totalPrice > 0) {
    makePurchaseButton.removeAttribute('disabled');
}
else {
    makePurchaseButton.setAttribute('disabled', true);
}

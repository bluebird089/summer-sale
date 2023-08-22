document.getElementById('product-one').addEventListener('click', function () {
    document.getElementById('nothing-added').style.display = 'none';
    const li = document.createElement('li');
    const productOneName = document.getElementById('product-one-name').innerText;
    li.innerHTML = productOneName;
    document.getElementById('cart-list').appendChild(li);

    const firstProductPrice = getTextValueById('product-one-price');
    const totalPrice = getTextValueById('total-price');

    const makePurchaseButton = document.getElementById('make-purchase-btn');
    const currentTotal = (totalPrice + firstProductPrice).toFixed(2);

    if (currentTotal > 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    else {
        makePurchaseButton.setAttribute('disabled', true);
    };

    setElementText('total-price', currentTotal);
    setElementText('total', currentTotal);
});

document.getElementById('product-two').addEventListener('click', function () {
    document.getElementById('nothing-added').style.display = 'none';
    const li = document.createElement('li');
    const productTwoName = document.getElementById('product-two-name').innerText;
    li.innerHTML = productTwoName;
    document.getElementById('cart-list').appendChild(li);

    const secondProductPrice = getTextValueById('product-two-price');
    const totalPrice = getTextValueById('total-price');

    const currentTotal = (totalPrice + secondProductPrice).toFixed(2);
    const makePurchaseButton = document.getElementById('make-purchase-btn');
    if (currentTotal > 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    else {
        makePurchaseButton.setAttribute('disabled', true);
    };

    setElementText('total-price', currentTotal);
    setElementText('total', currentTotal);
})

document.getElementById('product-three').addEventListener('click', function () {
    document.getElementById('nothing-added').style.display = 'none';
    const li = document.createElement('li');
    const productThreeName = document.getElementById('product-three-name').innerText;
    li.innerHTML = productThreeName;
    document.getElementById('cart-list').appendChild(li);

    const thirdProductPrice = getTextValueById('product-three-price');
    const totalPrice = getTextValueById('total-price');

    const currentTotal = (totalPrice + thirdProductPrice).toFixed(2);
    const makePurchaseButton = document.getElementById('make-purchase-btn');
    if (currentTotal > 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    else {
        makePurchaseButton.setAttribute('disabled', true);
    };

    setElementText('total-price', currentTotal);
    setElementText('total', currentTotal);
})

document.getElementById('product-four').addEventListener('click', function () {
    document.getElementById('nothing-added').style.display = 'none';
    const li = document.createElement('li');
    const productFourName = document.getElementById('product-four-name').innerText;
    li.innerHTML = productFourName;
    document.getElementById('cart-list').appendChild(li);

    const forthProductPrice = getTextValueById('product-four-price');
    const totalPrice = getTextValueById('total-price');

    const currentTotal = (totalPrice + forthProductPrice).toFixed(2);
    const makePurchaseButton = document.getElementById('make-purchase-btn');
    if (currentTotal > 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    else {
        makePurchaseButton.setAttribute('disabled', true);
    };

    setElementText('total-price', currentTotal);
    setElementText('total', currentTotal);
})

document.getElementById('product-five').addEventListener('click', function () {
    document.getElementById('nothing-added').style.display = 'none';
    const li = document.createElement('li');
    const productFiveName = document.getElementById('product-five-name').innerText;
    li.innerHTML = productFiveName;
    document.getElementById('cart-list').appendChild(li);

    const fifthProductPrice = getTextValueById('product-five-price');
    const totalPrice = getTextValueById('total-price');

    const currentTotal = (totalPrice + fifthProductPrice).toFixed(2);
    const makePurchaseButton = document.getElementById('make-purchase-btn');
    if (currentTotal > 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    else {
        makePurchaseButton.setAttribute('disabled', true);
    };

    setElementText('total-price', currentTotal);
    setElementText('total', currentTotal);
})

document.getElementById('product-six').addEventListener('click', function () {
    document.getElementById('nothing-added').style.display = 'none';
    const li = document.createElement('li');
    const productSixName = document.getElementById('product-six-name').innerText;
    li.innerHTML = productSixName;
    document.getElementById('cart-list').appendChild(li);

    const sixProductPrice = getTextValueById('product-six-price');
    const totalPrice = getTextValueById('total-price');

    const currentTotal = (totalPrice + sixProductPrice).toFixed(2);

    const applyButton = document.getElementById('apply-btn');
    if (currentTotal > 200) {
        alert('Please Spend More Than 200 TK To Avail Discount');
        return;
    }
    else {
        applyButton.setAttribute('disabled', true);
    }

    setElementText('total-price', currentTotal);
    setElementText('total', currentTotal);
})
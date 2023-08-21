document.getElementById('product-one').addEventListener('click', function () {
    document.getElementById('nothing-added').style.display = 'none';
    const li = document.createElement('li');
    const productOneName = document.getElementById('product-one-name').innerText;
    li.innerHTML = productOneName;
    document.getElementById('cart-list').appendChild(li);

    
});
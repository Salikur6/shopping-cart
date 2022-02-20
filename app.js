function updateQuantity(product, price, isIncrice) {
    const productQuantity = document.getElementById(product + '-quantity');
    let productQuantityValue = productQuantity.value;

    if (isIncrice) {
        productQuantityValue = parseInt(productQuantityValue) + 1;
    } else if (productQuantityValue > 0) {
        productQuantityValue = parseInt(productQuantityValue) - 1;
    }
    productQuantity.value = productQuantityValue;


    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productQuantityValue * price;

    overallPrice()
};

function productInput(product) {

    const productQuantity = document.getElementById(product + '-quantity')
    const productQuantityValue = parseInt(productQuantity.value);
    return productQuantityValue
}

function overallPrice() {

    const subTotalPhone = productInput('phone') * 1219;
    const subTotalcase = productInput('case') * 59;
    const subTotal = subTotalPhone + subTotalcase;
    const taxAmount = subTotal / 10;
    const totalPrice = subTotal + taxAmount;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalPrice;
}

// Phone price and quantity --------------------------------

document.getElementById('phone-plus').addEventListener('click', function() {
    updateQuantity('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function() {
    updateQuantity('phone', 1219, false);
});

// Phone case price and quantity --------------------------------


document.getElementById('quantity-btn').addEventListener('click', function() {
    updateQuantity('case', 59, true);
});

document.getElementById('input-quantity-minus').addEventListener('click', function() {
    updateQuantity('case', 59, false);
});

//----------------------------------------------------------


  //function for add to cart and update it //
    var cart = [];
    var cartTotal = 0;

    function addToCart(productName, productPrice) {
        cart.push({ name: productName, price: productPrice });
        cartTotal += productPrice;
        updateCartDisplay();
    }

    function updateCartDisplay() {
        var cartList = document.getElementById('cart-list');
        var cartTotalElement = document.getElementById('cart-total');
        cartList.innerHTML = '';
        cart.forEach(function (item) {
            var li = document.createElement('li');
            li.textContent = item.name + ' - $' + item.price.toFixed(2);
            cartList.append(li);
        });
        cartTotalElement.textContent = cartTotal.toFixed(2);
    }
//chekout function for display  your total purchase with a msg //
    function checkout() {
        alert('Thank you for your purchase! Total: $' + cartTotal);
        cart = [];
        cartTotal = 0;
        updateCartDisplay()
    }

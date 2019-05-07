const discounts =
[
    {
        code: '15%',
        value: 0.15,
        function: percentDiscount,
        availableForCart: availableForCart
    },
    {
        code: '25%',
        value: 0.25,
        function: percentDiscount,
        availableForCart: availableForCart
    }
]

function availableForCart(cart, discount) {
    let errorMessage = codeIsUsed(cart, discount);
    return errorMessage;
}

function codeIsUsed(cart, discount) {
  return cart.discount !== null && cart.discount.code === discount.code ? "Code was already used." : "";
}

function percentDiscount(cart, discount){
    cart.cartGuitars.map(product => {
        product.oldGuitarsPrice = product.guitar.price * product.guitarAmount;
        product.guitarsPrice = product.oldGuitarsPrice * (1 - discount.value);
        return product;
    });
    cart.discount = {...cart.discount, code: discount.code};
    return cart;
}

export function codeIsValidForCart(code, cart)
{
    const isDiscount = discounts.find(discount => discount.code === code);
    const errorMessage = isDiscount !== undefined ? isDiscount.availableForCart(cart, isDiscount): "Wrong discount code.";
    cart.discount = {
        isValid: errorMessage.length === 0,
        errorMessage:errorMessage
    }

    return cart;
}

export function addDiscountToCart(code, cart)
{
    const discount = discounts.find(f => f.code === code);
    return discount.function(cart, discount);
}

export function resetDiscountCart(cart)
{
    cart.cartGuitars.map(product => {
        product.oldGuitarsPrice = product.guitar.price * product.guitarAmount;
        product.guitarsPrice = product.oldGuitarsPrice;
        return product;
    });
    cart.discount = null;
    return cart;
}

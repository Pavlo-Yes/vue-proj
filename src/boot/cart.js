import Vue from "vue";

const localstorageGetCart = function () {
  return JSON.parse(localStorage.getItem('cart'));
}
const localstorageAddItem = function (payload) {
  return localStorage.setItem('cart', JSON.stringify(payload));
}
const addToCart = (product) => {
  const cart = localstorageGetCart();
  if (cart) {
    const founded = cart.find(({id}) => id === product.id);
    if (founded) {
      cart.splice(cart.indexOf(founded), 1);
      localstorageAddItem(cart);
    } else {
      cart.push(product);
      localstorageAddItem(cart);
    }
  } else {
    localstorageAddItem([product])
  }
}
const changeBtnOnAddToCart = (product) => {
  const cart = localstorageGetCart();
  if (cart) {
    if (!!cart.find(({id}) => id === product.id)) {
      return {color: 'red', icon: 'remove_shopping_cart', label: 'Remove'};
    } else {
      return {color: 'primary', icon: 'shopping_cart', label: 'Add to cart'}
    }
  } else {
    return {color: 'primary', icon: 'shopping_cart', label: 'Add to cart'}
  }
}

Vue.prototype.$addToCart = addToCart
Vue.prototype.$changeBtnOnAddToCart = changeBtnOnAddToCart
Vue.prototype.$localstorageGetCart = localstorageGetCart

export {addToCart, changeBtnOnAddToCart, localstorageGetCart}

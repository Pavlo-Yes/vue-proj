// import Vue from "vue";
//
// const localstorageGetCart = function () {
//   return JSON.parse(localStorage.getItem('cart'));
// }
// const localstorageAddItem = function (payload) {
//   return localStorage.setItem('cart', JSON.stringify(payload));
// }
// const addToCart = (product) => {
//   const cart = localstorageGetCart();
//   if (cart) {
//     const founded = cart.find(({id}) => id === product.id);
//     if (founded) {
//       cart.splice(cart.indexOf(founded), 1);
//       localstorageAddItem(cart);
//     } else {
//       cart.push(product);
//       localstorageAddItem(cart);
//     }
//   } else {
//     localstorageAddItem([product])
//   }
// //  add item to cart store for changing button
// //   console.log(this.$store.getters.getCart, 'before');
// //   this.$store.commit('addItemToCart', product);
// //   console.log(this.$store.getters.getCart, 'after');
// }
// const changeBtnOnAddToCart = (product) => {
//   console.log(this.$store.getters.getCart);
//   const cart = localstorageGetCart();
//   if (cart) {
//     if (!!cart.find(({id}) => id === product.id)) {
//       return {color: 'red', icon: 'remove_shopping_cart', label: 'Remove'};
//     } else {
//       return {color: 'primary', icon: 'shopping_cart', label: 'Add to cart'}
//     }
//   } else {
//     return {color: 'primary', icon: 'shopping_cart', label: 'Add to cart'}
//   }
// }
//
// const setItemInCartQuantity = () => {
//   return this.localstorageGetCart().length
// }
//
// Vue.prototype.$addToCart = addToCart
// Vue.prototype.$changeBtnOnAddToCart = changeBtnOnAddToCart
// Vue.prototype.$localstorageGetCart = localstorageGetCart
// Vue.prototype.$getItemInCartQuantity = setItemInCartQuantity
//
// export {addToCart, changeBtnOnAddToCart, localstorageGetCart, localstorageAddItem, setItemInCartQuantity}

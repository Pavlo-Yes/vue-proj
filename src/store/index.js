import Vue from 'vue';
import Vuex from 'vuex';

import authorization from './authorization/authorizationModule';
import cart from './cart/cartModule';
import products from './products/productsModule';
import singleProduct from './singleProduct/singleProductModule';

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      authorization,
      cart,
      products,
      singleProduct,
    },

    // state: {
    //   cart: []
    // },
    // mutations: {
    //   addItemToCart: ((state, product) => {
    //     if (state.cart.length > 0) {
    //       if (!!state.cart.find(({id}) => id === product.id)) {
    //         let newProductInCartIndex = state.cart.indexOf(product);
    //         state.cart.splice(newProductInCartIndex, 1);
    //       } else {
    //         state.cart.push(product);
    //       }
    //     } else {
    //       state.cart.push(product)
    //     }
    //   })
    // },
    // getters: {
    //   getCart: state => state.cart
    // },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}

export default {
  state: {
    cart: [],
  },
  mutations: {
    addItemToCart: ((state, product) => {
      if (state.cart.length > 0) {
        if (state.cart.find(({id}) => id === product.id)) {
          const newProductInCartIndex = state.cart.indexOf(product);
          state.cart.splice(newProductInCartIndex, 1);
        } else {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product)
      }
    }),
    initializeCart: ((state, products) => {
      state.cart = products
    })
  },
  getters: {
    getCart: state => state.cart
  },
  actions: {
    addItemToCartAction: ({commit}, payload) => {
      commit('addItemToCart', payload)
    }
  }
}

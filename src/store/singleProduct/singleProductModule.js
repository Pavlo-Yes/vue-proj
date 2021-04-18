export default {
  state: {
    singleProduct: []
  },
  getters: {
    getSingleProduct: state => state.singleProduct
  },
  mutations: {
    setSingleProduct: ((state, productsFromMain) => {
      state.singleProduct = productsFromMain;
    })
  }
}

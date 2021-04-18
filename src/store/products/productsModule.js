import axios from "axios";

export default {
  state: {
    products: []
  },
  getters: {
    getProducts: state => state.products
  },
  mutations: {
    setProducts: ((state, productsFromAPI) => {
      state.products = productsFromAPI;
    })
  },
  actions: {
    setProductsAction: ({commit}) => {
      return  axios.get('products/')
        .then(res => {
          const productsFromAPI = res.data
          commit('setProducts', productsFromAPI)
        }).catch(err => console.log(err, 'error in productModule action'))
    }
  }
}

import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

const setTokens = (access, refresh) => {
  localStorage.setItem('access', access);
  localStorage.setItem('refresh', refresh);
}
const removeTokens = () => {
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
}
let currentUser = null;
const setCurrentUser = user => currentUser = user;
const getCurrentUser = () => currentUser;
const axiosCheckAccessToken = () => axios({
  method: 'get',
  url: 'users/current/',
  headers: {'Authorization': `Bearer ${localStorage.getItem('access')}`}
})
const axiosCheckRefreshToken = () => axios({
  method: 'post',
  url: 'auth/refresh/',
  data: {'refresh': `${localStorage.getItem('refresh')}`}
})
Vue.prototype.$axios = axios;
Vue.prototype.$setCurrentUser = setCurrentUser;
Vue.prototype.$getCurrentUser = getCurrentUser;
Vue.prototype.$setTokens = setTokens;
Vue.prototype.$removeTokens = removeTokens;
Vue.prototype.$axiosCheckAccessToken = axiosCheckAccessToken;
Vue.prototype.$axiosCheckRefreshToken = axiosCheckRefreshToken;

export {
  axios,
  axiosCheckAccessToken,
  axiosCheckRefreshToken,
  setTokens,
  removeTokens,
  setCurrentUser,
  getCurrentUser,
};

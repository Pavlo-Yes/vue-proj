export default {
  state: {
    session: {
      // isAuth: false,
      // accessToken: '',
      // refreshToken: '',
      // isAdmin: false,
      // currentUserId: null
    },
    // currentUser: null
  },
  getters: {
    // getSession: state => state.session,
    // getIsLogged: state => state.session.isAuth,
    // getAccessToken: state => state.session.accessToken,
    // getRefreshToken: state => state.session.refreshToken,
    // getIsAdmin: state => state.session.isAdmin,
    // getCurrentUserId: state => state.session.currentUserId,
    // getCurrentUser: state => state.currentUser
  },
  mutations: {
    login: (state, response) => {
      const {access, refresh} = response;
      // this.$setTokens(access, refresh);
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);
      // state.session.accessToken = access;
      // state.session.refreshToken = refresh;
    },
    logout: (state) => {
      // state.session.accessToken = '';
      // state.session.refreshToken = '';
      // state.session.isAdmin = false;
      // state.session.currentUserId = null;
      // state.currentUser = {};
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },
    // setIsAdmin: state => state.session.isAdmin = true,
    // setCurrentUserId: (state, payload) => state.session.currentUserId = payload,
    // setCurrentUser: (state, payload) => state.currentUser = payload
  }
}

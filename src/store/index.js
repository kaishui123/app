import Vue from 'vue';
import Vuex from 'vuex';
import {
  setCookie,
  getUserCookie,
  removeUserCookie,
} from '@/utils/userCookie';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 用于切换菜单的闭合状态  false 代表不闭合  true代表闭合
    collapsed: false,
    // 存储用户信息
    user: getUserCookie(),
    menuRoutes: [],
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    logout(state) {
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      };
    },
    changeMenuRoutes(state, routes) {
      state.menuRoutes = routes;
    },
  },
  actions: {
    changeCollapsed({
      commit,
    }) {
      commit('changeCollapsed');
    },
    setUserInfo({
      commit,
    }, userInfo) {
      commit('setUserInfo', userInfo);
      setCookie(userInfo);
    },
    logout({
      commit,
    }) {
      commit('logout');
      removeUserCookie();
    },
    changeMenuRoutes({
      commit,
    }, routes) {
      commit('changeMenuRoutes', routes);
    },
  },
  modules: {},
});

window.$store = store;

export default store;

import { createStore } from "vuex";

export default createStore({
  state () {
    return {
      count : 1 ,
      ShowSwitchingAnimation: false,
    }
  },
  getters: {},
  mutations: {
    //PP 1不知為何要特別聲明為any才能使用，官方文件沒有聲明
    PlayingAnimation (state:any , bool) {
      state.ShowSwitchingAnimation = bool
    }
  },
  actions: {},
  modules: {},
});

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
/** 表示するボックス数 */
const numberOfBoxes = 0;
/** ボックスに入力される値 */
const saveNames: string[] = [];
/** シャッフル用配列 */
const shuffleNames: string[] = [];

export default new Vuex.Store({
  state: {
    numberOfBoxes,
    saveNames,
    shuffleNames,
  },
  mutations: {},
  actions: {},
  modules: {},
});

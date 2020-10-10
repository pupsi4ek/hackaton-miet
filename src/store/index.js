import Vue from "vue";
import Vuex from "vuex";
import quests from "./modules/quests";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    quests
  }
});

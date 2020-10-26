import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import createLogger from "vuex/dist/logger";

import app from "./modules/app.store";

const debug = process.env.VUE_APP_DEBUG;
const debugPlugin = debug === "true" ? [createLogger({})] : [];

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer(val) {
    if (val.auth.token === null) {
      return {};
    }
    return val;
  }
});

export default new Vuex.Store({
  modules: {
    app
  },
  strict: debug,
  plugins: [vuexLocal.plugin, ...debugPlugin]
});

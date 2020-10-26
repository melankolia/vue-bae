const initialState = () => ({
    data: null
});
  
const state = initialState();

const getters = {
    getData(state) {
        return state.data;
    }
}

const mutations = {
    setData(state, data) {
        state.data = data;
    }
}

const actions = {}

export default {
    // namespaced: true,
    state,
    getters,
    actions,
    mutations
  };
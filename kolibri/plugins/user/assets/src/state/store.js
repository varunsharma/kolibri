const Vuex = require('kolibri.lib.vuex');
const coreStore = require('kolibri.coreVue.vuex.store');
const constants = require('./constants');

/**
 ** pageState schemas
 **/


const initialState = {
  pageName: constants.PageNames.SCRATCHPAD,
  pageState: {},
  facility: undefined,
};

const mutations = {
  SET_PAGE_NAME(state, name) {
    state.pageName = name;
  },
  SET_PAGE_STATE(state, pageState) {
    state.pageState = pageState;
  },
  // Profile Page Mutations
  SET_PROFILE_BUSY(state, isBusy) {
    state.pageState.busy = isBusy;
  },
  SET_PROFILE_SUCCESS(state, isSuccessful) {
    state.pageState.success = isSuccessful;
  },
  SET_PROFILE_EROR(state, isError, errorMessage) {
    state.pageState.error = isError;
    state.pageState.errorMessage = errorMessage;
  },
  SET_SIGN_UP_ERROR(state, error) {
    state.pageState.signUpError = error;
  },
};


// assigns core state and mutations
Object.assign(initialState, coreStore.initialState);
Object.assign(mutations, coreStore.mutations);


module.exports = new Vuex.Store({
  state: initialState,
  mutations,
});

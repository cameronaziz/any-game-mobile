import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const authenticatedUser = createReducer({}, {
  [types.AUTHENTICATED_USER](state, action) {
    return action.user;
  },
});

export const currentlyLoading = createReducer(false, {
  [types.CURRENTLY_LOADING](state, action) {
    return action.currentlyLoading;
  },
});

export const loginError = createReducer({}, {
  [types.LOGIN_ERROR](state, action) {
    return action.error;
  },
});

export const loginSuccess = createReducer(false, {
  [types.LOGIN_SUCCESS](state, action) {
    return action.success;
  },
});
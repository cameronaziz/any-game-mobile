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
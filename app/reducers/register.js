import createReducer from '../lib/createReducer';
import * as types from '../actions/types';


export const registerError = createReducer({}, {
  [types.REGISTER_ERROR](state, action) {
    return action.error;
  },
});

export const registerSuccess = createReducer(false, {
  [types.REGISTER_SUCCESS](state, action) {
    return action.success;
  },
});

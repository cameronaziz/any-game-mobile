import createReducer from '../lib/createReducer';
import * as types from '../actions/types';


export const currentlyLoading = createReducer(false, {
  [types.CURRENTLY_LOADING](state, action) {
    return action.currentlyLoading;
  },
});
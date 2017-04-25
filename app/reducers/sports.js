import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const sports = createReducer({}, {
  [types.SET_SPORTS](state, action) {
    return action.sports;
  },
});
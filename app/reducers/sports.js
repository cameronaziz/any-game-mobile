import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedSports = createReducer({}, {
  [types.SET_SEARCHED_SPORTS](state, action) {
    return action.sports;
  },
});
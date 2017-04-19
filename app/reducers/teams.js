import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedTeams = createReducer({}, {
  [types.SET_SEARCHED_TEAMS](state, action) {
    return action.teams
  },
});

export const userTeam = createReducer({}, {
  [types.SET_USER_TEAM](state, action) {
    return action.team
  },
});

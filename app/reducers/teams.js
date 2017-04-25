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

export const allUserTeams = createReducer({}, {
  [types.SET_ALL_USER_TEAMS](state, action) {
    return action.userTeams
  },
});

export const teamSlugs = createReducer({}, {
  [types.SET_TEAM_SLUG](state, action) {
    return action.slug
  },
});

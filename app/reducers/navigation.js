import * as types from '../actions/types';
import { NavigationExperimental, StatusBar } from 'react-native';
import createReducer from '../lib/createReducer'
import ApplicationTabs from '../containers/ApplicationTabs/index.ios'

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils
} = NavigationExperimental;

const allTabs = [
  (lastRoute) => lastRoute || {key: 'landingPage', index: 0 },
  (lastRoute) => lastRoute || {key: 'dashboard', index: 1 },
];


export const tabs = createReducer({index: 0, key: 'landingPage', routes: allTabs }, {
  [types.SET_TAB](state, action) {
    return Object.assign({}, state, allTabs[action.index]())
  }
});


export const navigationState = createReducer({ index: 0,
  routes: [
    { key: 'LandingPage' },
    { key: 'Login'},
    { key: 'ApplicationTabs',  },
  ]
}, {

  [types.NAVIGATION_FORWARD](state, action) {
    return NavigationStateUtils.forward(state);
  },

  [types.NAVIGATION_BACK](state, action) {
    return NavigationStateUtils.back(state);
  },

});

export const navigationParams = createReducer({ }, {
  [types.NAVIGATION_FORWARD](state, action) {
    return action.state;
  },

});
import { combineReducers } from 'redux';
import * as loadingReducer from './loading';
import * as teamsReducer from './teams';
import * as sportsReducer from './sports';
import * as navigationReducer from './navigation';
import * as loginReducer from './login';


export default combineReducers(Object.assign(
    loadingReducer,
    teamsReducer,
    sportsReducer,
    navigationReducer,
    loginReducer,
))
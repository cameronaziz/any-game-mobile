//Import AnyGame Settings
import * as types from './types';
import * as firebase from '../lib/firebase';

//Import AnyGame Actions
import * as loading from './loading';
import * as login from './login';

//Import Components
import { AsyncStorage } from 'react-native';

//Actions
export function registerUser(email, password) {
  return (dispatch, getState) => {
    dispatch(loading.setLoading(true));
    firebase.auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
          dispatch(login.setAuthenticatedUser(user));
          dispatch(setRegisterSuccess(true));
          dispatch(loading.setLoading(false));
        }).catch((error) => {
          dispatch(setRegisterError(error));
          dispatch(loading.setLoading(false));
    });
  }
}

//To Reducers
export function setRegisterSuccess( success ){
  return {
    type: types.REGISTER_SUCCESS,
    success
  }
}

export function setRegisterError( error ) {
  return {
    type: types.REGISTER_ERROR,
    error
  }
}
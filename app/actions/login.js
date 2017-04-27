//Settings
import * as types from './types';
import * as firebase from '../lib/firebase';

//Actions
import * as loading from './loading';
import * as users from './users';

//Components
import { AsyncStorage } from 'react-native';

//Actions
export function loginUser(email, password) {
    return (dispatch, getState) => {
        dispatch(loading.setLoading( true ));
        firebase.auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                AsyncStorage.setItem('USER', JSON.stringify(user));
                users.getUserData(user);
                dispatch(setAuthenticatedUser({ user }));
                dispatch(setLoginSuccess( true ));
                dispatch(loading.setLoading( false ));
            })
            .catch((error) => {
                dispatch(setLoginError(error));
                dispatch(loading.setLoading( false ));
            });
    }
}

//To Reducers
export function setAuthenticatedUser({ user }) {
  return {
    type: types.AUTHENTICATED_USER,
    user
  }
}

export function setLoginSuccess( success ){
  return {
    type: types.LOGIN_SUCCESS,
    success
  }
}

export function setLoginError( error ) {
  return {
    type: types.LOGIN_ERROR,
    error
  }
}
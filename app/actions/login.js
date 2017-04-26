import * as types from './types';
import * as firebase from '../lib/firebase';
import * as loading from './loading';
import { AsyncStorage } from 'react-native';

export function loginUser(email, password) {
    return (dispatch, getState) => {
        let currentlyLoading = true;
        dispatch(loading.setLoading({ currentlyLoading }));
        console.log('Logging in user ' + email);
        firebase.auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                dispatch(setAuthenticatedUser({ user }));
                AsyncStorage.setItem('USER', JSON.stringify(user));
                firebase.db.ref('/users/' + user.uid).on('value', function(snapshot) {
                    AsyncStorage.setItem('USER_DATA', JSON.stringify(snapshot.val()));
                }, function(error) {
                    console.log(error)
                });
                let loginSuccess = true;
                dispatch(setLoginSuccess({ loginSuccess }));
                currentlyLoading = false;
                dispatch(loading.setLoading({ currentlyLoading }));
            })
            .catch((error) => {
                dispatch(setLoginError(error));
                currentlyLoading = false;
                dispatch(loading.setLoading({ currentlyLoading }));
            });
    }
}

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
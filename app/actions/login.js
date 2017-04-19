import * as types from './types';
import * as firebase from '../lib/firebase';
import * as loading from './loading';

export function loginUser(email, password) {
  return(dispatch, getState) => {
    let currentlyLoading = true;
    dispatch(loading.setLoading( { currentlyLoading }));
    console.log('Logging in user ' + email);
    firebase.auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
          dispatch(setAuthenticatedUser({ user: user }, true));
          currentlyLoading = false;
          dispatch(loading.setLoading( { currentlyLoading }));
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
    });
  }
}

export function setAuthenticatedUser( { user } ) {
  return {
    type: types.AUTHENTICATED_USER,
    user
  }
}

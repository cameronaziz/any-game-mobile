import { AsyncStorage } from 'react-native';
import * as types from './types'
import * as firebase from '../lib/firebase'

export function getUserData(user) {
    firebase.db.ref('/users/' + user.uid).on('value', function(snapshot) {
        AsyncStorage.setItem('USER_DATA', JSON.stringify(snapshot.val()));
    });
}

export function setUser({ user }) {
    return {
        type: types.AUTHENTICATED_USER,
        user
    }
}
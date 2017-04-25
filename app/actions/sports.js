import { AsyncStorage } from 'react-native';
import * as types from './types'
import * as firebase from '../lib/firebase'

export function fetchSports() {
  return(dispatch, getState) => {
      AsyncStorage.getItem('SPORTS', (err, data) => {
      if (data !== null) {
        data = JSON.parse(data);
        dispatch(setSports({ sports: data }));
      } else {
        firebase.db.ref('/sports').once('value', function (snapshot) {
          let sports = snapshot.val();
          AsyncStorage.setItem('SPORTS', JSON.stringify(sports));
          let time = new Date().getTime();
          AsyncStorage.setItem('UPDATE_DATE', JSON.stringify(time) );
          dispatch(setSports({ sports: sports }));
        }, function (ex) {
          console.log(ex)
        })
      }
    });
  }
}

export function setSports( { sports } ) {
  return {
    type: types.SET_SPORTS,
    sports
  }
}
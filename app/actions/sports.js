import * as types from './types'
import * as firebase from '../lib/firebase'

export function fetchSports() {
  return(dispatch, getState) => {
    console.log('Fetching Sports');
    firebase.db.ref('/sports').on('value', function (snapshot) {
      dispatch(setSearchedSports({sports: snapshot.val() }));
    }, function (ex) {
      console.log(ex)
    })
  }
}

export function setSearchedSports( { sports } ) {
  return {
    type: types.SET_SEARCHED_SPORTS,
    sports
  }
}

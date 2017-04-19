import * as types from './types';
import * as firebase from '../lib/firebase';
import * as loading from './loading';

export function fetchTeams(sport) {
  return(dispatch) => {
    let currentlyLoading = true;
    dispatch(loading.setLoading( { currentlyLoading }));
    firebase.db.ref('/teams').orderByChild('sport').startAt(sport).endAt(sport).on('value', function (snapshot) {
      dispatch(setSearchedTeams({teams: snapshot.val()}));
      currentlyLoading = false;
      dispatch(loading.setLoading( { currentlyLoading }));
    },function (error) {
      console.log(error)
    })
  }
}

export function setTeam(sport, team, user) {
  return(dispatch, getState) => {
    console.log('Setting user\'s ' + sport +  ' team to the ' + team + '.');
    firebase.db.ref('/users/' + user.uid + '/teams/' + sport).set({
      team: team
    })
  }
}

export function getTeam(user, sport) {
  user = user.uid;
  return(dispatch, getState) => {
    firebase.db.ref('/users/' + user + '/teams/' + sport).on('value', function (snapshot) {
      dispatch(setUserTeam({team: snapshot.val()}));
    },function (error) {
      console.log(error)
    })
  }
}

export function getAllUserTeams(user) {
  user = user.uid;
  return(dispatch, getState) => {
    firebase.db.ref('/users/' + user + '/teams/').on('value', function (snapshot) {
      dispatch(setAllUserTeams({userTeams: snapshot.val()}));
    },function (error) {
      console.log(error)
    })
  }
}

export function setSearchedTeams( { teams } ) {
  return {
    type: types.SET_SEARCHED_TEAMS,
    teams
  }
}

export function setUserTeam( { team } ) {
  return {
    type: types.SET_USER_TEAM,
    team
  }
}


export function setAllUserTeams( { userTeams } ) {
  return {
    type: types.SET_ALL_USER_TEAMS,
    userTeams
  }
}

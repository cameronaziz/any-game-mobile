import * as types from './types';
import * as firebase from '../lib/firebase';
import * as loading from './loading';

export function fetchTeams(sport) {
  return(dispatch) => {
    dispatch(loading.setLoading( true ));
    firebase.db.ref('/teams').orderByChild('sport').startAt(sport).endAt(sport).on('value', function (snapshot) {
      dispatch(setSearchedTeams({teams: snapshot.val()}));
      dispatch(loading.setLoading( false ));
    },function (error) {
      console.log(error)
    })
  }
}

export function setTeam(sport, team, user) {
  return(dispatch, getState) => {
    console.log('Setting user\'s ' + sport +  ' team to the ' + team.name + '.');
    firebase.db.ref('/teams').startAt(team).endAt(team).on('value', function (snapshot) {
      firebase.db.ref('/users/' + user.uid + '/teams/' + sport).set({
        team: snapshot.val()
      })
    });
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

      console.log(snapshot.val());
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
export function setSlug(  slug  ) {
  return {
    type: types.SET_TEAM_SLUG,
    slug
  }

}
export function setAllUserTeams( { userTeams } ) {
  return {
    type: types.SET_ALL_USER_TEAMS,
    userTeams
  }
}

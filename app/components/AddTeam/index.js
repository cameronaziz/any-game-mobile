import React, { Component } from 'react'
import { Text, View, Picker, Switch } from 'react-native'
import { Button } from 'native-base'

import * as firebase from '../../utils/Firebase';
const db = firebase.connectDatabase();
const firebaseAuth = firebase.authClient();


import teams from '../../lib/teams.json';

function sortByName(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}
function sortByLocation(a,b) {
  if (a.location < b.location)
    return -1;
  if (a.location > b.location)
    return 1;
  return 0;
}


let sortedTeams = teams.sort(sortByName);

export default class AddTeam extends Component {

  constructor(props) {
    super(props);
    this.state = {
      team: '',
      teams: sortedTeams,
      sortSwitch: false
    };
  };

  resortTeams(){
    if(this.state.sortSwitch){
      var resortedTeams = this.state.teams.sort(sortByName);
    } else {
      var resortedTeams = this.state.teams.sort(sortByLocation);
    }
    this.setState({
      teams: resortedTeams
    })
  }

  setUserTeam(){
    let user = firebaseAuth.currentUser;
    db.ref('users/' + user.uid).set({
      team: this.state.team
    });
    this.props.navigator.push({
      id: 'Dashboard'
    })

  }

  render() {
    return (
        <View style={{margin: 20}}>
          <Text style={{fontSize: 22, justifyContent: 'center'}}>Pick a Team</Text>
          <Picker onValueChange={(team) => this.setState({team: team})}>
            {this.state.teams.map((team, i) => {
              return <Picker.Item key={i} value={team.name} label={team.location + " " + team.name} />
            })}
          </Picker>
          <View style={{flexDirection: 'row', marginBottom: 30}}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 1}}>
              <Text style={{marginLeft: 10}}>Sort by Location</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 1}}>
              <Switch
                  onValueChange={(value) => {
                    this.setState({sortSwitch: value});
                    this.resortTeams();
                  }}
                  style={{ marginRight: 20}}
                  value={this.state.sortSwitch} />
            </View>
          </View>
          <Button block success title="Submit" onPress={()=>this.setUserTeam()}>
            <Text>Save</Text>
          </Button>
        </View>


    )
  }
}

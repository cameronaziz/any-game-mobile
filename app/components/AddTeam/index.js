import React, { Component } from 'react'
import { Picker, Text } from 'react-native'
import { View, Button } from 'native-base'

import * as firebase from '../../utils/Firebase';
const db = firebase.connectDatabase();
const firebaseAuth = firebase.authClient();



export default class AddTeam extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teams: [
        { name: 'Lakers'},
        { name: 'Thunder'}
      ],
      team: ''
    };
  };

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
    console.log(firebaseAuth.currentUser);
    return (
        <View>
          <Picker onValueChange={(team) => this.setState({team: team})}>
            {this.state.teams.map((i) => {
              return <Picker.Item key={i.name} value={i.name} label={i.name} />
            })}
          </Picker>
          <Button block light title="Submit" onPress={()=>this.setUserTeam()}>
            <Text>Submit</Text>
          </Button>
        </View>


    )
  }
}

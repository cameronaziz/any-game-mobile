
import React, { Component } from 'react'
import { Picker, Text, TouchableHighlight, ListView, View } from 'react-native'
import { Left, Container, Header, Body, Title, Right, Icon, Button, ListItem, List} from 'native-base'
import Style from '../../config/styles'

import * as firebase from '../../utils/Firebase';
const db = firebase.connectDatabase();
const firebaseAuth = firebase.authClient();


export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teams: [
        { name: 'Lakers'},
        { name: 'Thunder'}
        ]
    };
  };

  componentDidMount() {
  }


  signOut() {
    firebaseAuth.signOut();
    this.props.navigator.pop()
  }

  clickTeam(team){
    console.log('Clicked ');
  }



  render() {



    return (
        <Container>
          <Header>
            <Left/>
            <Body>
              <Title>Any Game</Title>
            </Body>
            <Right>
              <Button transparent onPress={()=>this.signOut()}>
                <Icon name='menu' />
              </Button>
            </Right>
          </Header>
          <Text>Pick a Team</Text>
          <Picker onValueChange={(team) => this.setState({team: team})}>
            {this.state.teams.map((i) => {
              return <Picker.Item key={i.name} value={i.name} label={i.name} />
            })}
          </Picker>
        </Container>
    )
  }
}
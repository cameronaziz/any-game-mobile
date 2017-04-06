
import React, { Component } from 'react'
import { Picker, Text, TouchableHighlight, ListView, View } from 'react-native'
import { Left, Container, Header, Body, Title, Right, Icon, Button, ListItem, List} from 'native-base'



import * as firebase from '../../utils/Firebase';
import AddTeam from "../AddTeam/index";
const db = firebase.connectDatabase();
const firebaseAuth = firebase.authClient();


export default class Dashboard extends Component {

  constructor(props) {
    super(props);
  };

  componentDidMount() {
  }


  signOut() {
    firebaseAuth.signOut();
    this.props.navigator.pop()
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
          <AddTeam/>
        </Container>
    )
  }
}
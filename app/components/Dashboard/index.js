
import React, { Component } from 'react'
import { Left, Container, Body, Title, Right, Icon, Button, ListItem, List} from 'native-base'
import Header from '../Header'


import * as firebase from '../../utils/Firebase';
import AddTeam from "../AddTeam/index";
import Console from "../Console/index";
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
    let content;
    firebaseAuth.onAuthStateChanged((user) => {
      if (false) {
        content = (<AddTeam/>)
      } else {
        content = (<Console/>)
      }
    });

    return (
        <Container>
          <Header/>
          { content }
        </Container>
    )
  }
}
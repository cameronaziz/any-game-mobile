import React, { Component } from 'react'
import { Text, AsyncStorage } from 'react-native'
import { Container } from 'native-base'
import Header from '../Header'
import * as firebase from '../../utils/firebase';


export default class Dashboard extends Component {

  constructor(props) {
    super(props);
  };

  componentWillMount() {
    AsyncStorage.getItem('userData').then((user) => {
      let userObj = JSON.parse(user);
      this.setState({
        user: userObj
      });
    });
  }


  componentDidMount() {
  }

  signOut(navigator) {
    firebase.auth.signOut();
    AsyncStorage.clear();
    navigator.push({
      id: 'LandingPage'
    });
  }


  render() {
    let content;
    return (
        <Container>
          <Header signOut={this.signOut} navigator={this.props.navigator}/>
          { content }
        </Container>
    )
  }
}
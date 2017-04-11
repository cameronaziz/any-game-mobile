import React, { Component } from 'react'
import { Text, AsyncStorage } from 'react-native'
import { Container, Button } from 'native-base'
import Header from '../Header'



import AddTeam from '../AddTeam';
import Console from '../Console';



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
    let key = 'G1RXZArWf0fcw8xpXz2L8GGePhVAXKqa';
    let url = 'https://app.ticketmaster.com/discovery/v1/events.json?apikey=';
    fetch(url + key)
        .then((data) => {
          console.log('Success');
          console.log(data)
        })
        .catch((error) => {
          console.log('Error');
          console.log(error)
        });

  }

  signOut(navigator) {
    this.props.fbApp.auth().signOut();
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
import React, { Component } from 'react'
import { Image, StatusBar, TouchableOpacity } from 'react-native'
import { Container, Content, View, Button, Text } from 'native-base'
import LandingPageStyle from './style'
import * as firebase from '../../lib/firebase';

export default class LandingPage extends Component {

  constructor(props){
    super(props)
  }


  componentDidMount() {
    firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        this.props.navigator.push({
          id: 'Dashboard',
        });
      }
    });
  }


  render() {
    return (
        <View style={{alignItems: 'stretch', flex: 1}}>
          <StatusBar hidden={true} />
          <Image
              source={require('../../images/splash.png')}
              style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}>
            <View>
              <Text style={LandingPageStyle.header}>Any Game</Text>
            </View>
            <Button style={LandingPageStyle.loginButton} block light title="Login" onPress={()=>this.login()}>
              <Text>Login</Text>
            </Button>
            <TouchableOpacity style={LandingPageStyle.registerButton} title="Register" onPress={()=>this.register()}>
              <Text style={LandingPageStyle.registerText}>Register</Text>
            </TouchableOpacity>
          </Image>
        </View>
    )
  }
}


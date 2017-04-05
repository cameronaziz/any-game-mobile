import React, { Component } from 'react'
import { Image, StatusBar } from 'react-native'
import { Container, Content, View, Button, Text } from 'native-base'

export default class LandingPage extends Component {

  constructor(props){
    super(props)
  }

  login() {
    this.props.navigator.push({
      id: 'Login'
    })
  }

  register() {
    this.props.navigator.push({
      id: 'Registration'
    })
  }




  render() {
    return (
        <View style={{alignItems: 'stretch', flex: 1}}>
          <StatusBar hidden={true} />
          <Image
              source={require('../../images/splash.png')}
              style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
          />
            <Button block light title="Login" onPress={()=>this.login()}>
              <Text>Login</Text>
            </Button>
            <Button block title="Register" onPress={()=>this.register()}>
              <Text>Register</Text>
            </Button>
        </View>
    )
  }
}

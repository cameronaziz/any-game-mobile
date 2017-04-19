import React, { Component } from 'react';
import { Image, StatusBar, TouchableOpacity, Button, View, Text } from 'react-native';

import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LandingPageStyle from './landingStyle'
import globalStyle from './globalStyle'

class LandingPage extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
        <View style={globalStyle.stretchView}>
          <StatusBar hidden={true} />
          <Image
              source={require('../images/splash.png')}
              style={globalStyle.stretchImage} >
            <View>
              <Text style={globalStyle.header}>Any Game</Text>
            </View>
            <Button style={LandingPageStyle.loginButton} title="Login" onPress={ () => this.props.navigate({ key: 'Login'}) }>
              <Text>Login</Text>
            </Button>
            <Button style={LandingPageStyle.registerButton} title="Register" onPress={ () => this.props.navigate({ key: 'Login'}) }>
              <Text style={LandingPageStyle.registerText}>Register</Text>
            </Button>
          </Image>
        </View>
    )
  }
}


function mapStateToProps(state) {
  return {
    navigationParams: state.navigationParams,
  };
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);



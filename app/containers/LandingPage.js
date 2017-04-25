import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { AsyncStorage } from 'react-native';


import LandingPageStyle from './landingStyle'
import globalStyle from './globalStyle';


import { Image, StatusBar, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

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
              <Text style={LandingPageStyle.header}>Any Game</Text>
              <Button style={LandingPageStyle.landingButton} title="Login" backgroundColor="#2a4629" onPress={ () => this.props.navigate({ key: 'Login'}) }>
                <Text>Login</Text>
              </Button>
              <Button style={LandingPageStyle.landingButton} title="Register" backgroundColor="#c3a73d" onPress={ () => this.props.navigate({ key: 'Login'}) }>
                <Text>Register</Text>
              </Button>
            </View>
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



import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

import globalStyle from './globalStyle';
import LoginStyle from './ContainerStyles/LoginStyle';

import { View, Text, ActivityIndicator} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  loginPress(email, password) {
    if (__DEV__) {
      email = 'e@mail.com';
      password = 'password';
    }
    this.props.loginUser(email, password);
  }


  componentDidUpdate() {
    if (this.props.loginSuccess) {
      this.props.navigate({ key: 'dashboard'});
    }
  }

  render() {
    return (
        <View style={ LoginStyle.container }>
          <View style={ LoginStyle.loginTitle}>
            <Text style={[globalStyle.title, globalStyle.margin]}>Login</Text>
            <Text style={globalStyle.error}>{ this.props.loginError.message }</Text>
          </View>
          <View style={ LoginStyle.loginFields }>
            <View style={LoginStyle.formFields}>
              {this.props.loading ? (
                  <ActivityIndicator style={LoginStyle.activity} size='large'/>
              ) : (
                  <View>
                    <FormLabel>Email</FormLabel>
                    <FormInput
                        onChangeText={(email) => this.setState({email})}/>
                    <FormLabel>Password</FormLabel>
                    <FormInput
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password})}/>
                  </View>
              )}
            </View>
            <View style={LoginStyle.submitButton}>
              <Button
                  title='Login'
                  onPress={() => this.loginPress()}/>
            </View>
          </View>
        </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticatedUser: state.authenticatedUser,
    loading: state.currentlyLoading,
    loginError: state.loginError,
    loginSuccess: state.loginSuccess
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

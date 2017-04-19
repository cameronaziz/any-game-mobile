import React, { Component } from 'react';
import { StatusBar, View, Text, ActivityIndicator} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Style from './globalStyle';
import { connect } from 'react-redux';


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      submitted: false
    };

  }

  loginPress(email, password) {
    email = 'e@mail.com';
    password = 'password';
    this.setState({
      submitted: true
    });
    this.props.loginUser(email, password);
  }

  render() {

    if (!this.props.loading && this.state.submitted) {
      console.log('Logged in user:' + this.props.currentUser.uid);
      this.props.navigate({ key: 'Dashboard'})
    }

    return (
        <View>
          <StatusBar hidden={true} />
          <Text style={[Style.title, Style.margin]}>Login</Text>
          <FormLabel>Email</FormLabel>
          <FormInput
              onChangeText={(email) => this.setState({email})}/>
          <FormLabel>Password</FormLabel>
          <FormInput
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}/>
          <Button
              title='Login'
              onPress={() => this.loginPress()}/>
          {this.props.loading ? (
              <ActivityIndicator/>
          ) : (
             null
          )}
        </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.authenticatedUser,
    loading: state.currentlyLoading
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

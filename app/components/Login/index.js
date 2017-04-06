import React, { Component } from 'react';
import { StatusBar, AsyncStorage } from 'react-native';
import { Header, Left, Container, Content, Form, InputGroup, Input, Icon, Text, Button } from 'native-base';
import Style from '../../config/styles';
import * as firebase from '../../utils/Firebase';
const db = firebase.connectDatabase();
const firebaseAuth = firebase.authClient();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'e@mail.com',
      password: 'password',
      errors: ''
    };
  }

  updateEmail(email) {this.setState({email})}
  updatePassword(password) {this.setState({password})}

  login() {
    firebaseAuth.signInWithEmailAndPassword(this.state.email, this.state.password).then(function(user) {
      console.log(user);
      AsyncStorage.setItem('userData', JSON.stringify(user));
      console.log(AsyncStorage.getItem('userData'));

      let loginDate = new Date();
      AsyncStorage.setItem('loginTime', loginDate);

    }).catch((error) => {
      this.setState({
        errors: error.message
      });
    });
  }

  back(){
    this.props.navigator.pop();
    return false;
  }

  render() {
    return (
        <Container style={Style.container}>
          <StatusBar hidden={false} />
          <Header>
            <Left>
              <Button transparent onPress={()=>this.back()}>
                <Icon name='arrow-back'/><Text>Back</Text>
              </Button>
            </Left>
          </Header>
          <Content>
            <Text style={Style.heading}>Login</Text>
            <Text style={Style.error}>{this.state.errors}</Text>
            <Form>
              <InputGroup>
                <Icon name="md-at" style={Style.blueIcon} />
                <Input ref="email" placeholder="EMAIL" onChangeText={(email => this.updateEmail(email))}/>
              </InputGroup>
              <InputGroup>
                <Icon name="md-unlock" style={Style.blueIcon} />
                <Input ref="password" placeholder="PASSWORD" secureTextEntry onChangeText={(password => this.updatePassword(password))} />
              </InputGroup>
              <Button style={Style.blueButton} onPress={()=>this.login()}>
                <Text>Login</Text>
              </Button>
            </Form>
          </Content>
        </Container>
    );
  }
}


export default Login


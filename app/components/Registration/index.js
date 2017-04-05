import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container, Left, Header, Content, Form, InputGroup, Input, Icon, Text, Button } from 'native-base';
import Style from '../../config/styles';
import * as firebase from '../../utils/Firebase';
const firebaseApp = firebase.initFirebase();
const db = firebase.connectDatabase();
const firebaseAuth = firebase.authClient();

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      errors: ''
    };
  }

  updateFirstName(firstName) {this.setState({firstName})}
  updateLastName(lastName) {this.setState({lastName})}
  updateEmail(email) {this.setState({email})}
  updatePassword(password) {this.setState({password})}

  register(){
    firebaseAuth.createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
      db.ref('users/' + user.uid).set({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
      });
      this.props.navigator.push({
        id: 'Dashboard'
      });
    }).catch(function(error) {
      this.setState({
        errors: error.message
      });
    }.bind(this));
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
          <Content style={Style.content}>
            <Text style={Style.heading}>Registration</Text>
            <Text style={Style.error}>{this.state.errors}</Text>
            <Form>
              <InputGroup>
                <Icon name="md-person-add" style={Style.blueIcon} />
                <Input ref="firstName" placeholder="FIRST NAME" onChangeText={(firstName => this.updateFirstName(firstName))} />
                <Input ref="lastName" placeholder="LAST NAME" onChangeText={(lastName => this.updateLastName(lastName))} />
              </InputGroup>
              <InputGroup>
                <Icon name="md-at" style={Style.blueIcon} />
                <Input ref="email" placeholder="EMAIL" onChangeText={(email => this.updateEmail(email))}/>
              </InputGroup>
              <InputGroup>
                <Icon name="md-unlock" style={Style.blueIcon} />
                <Input ref="password" placeholder="PASSWORD" secureTextEntry onChangeText={(password => this.updatePassword(password))} />
              </InputGroup>
              <Button style={Style.blueButton} onPress={()=>this.register()}>
                <Text>Create Account</Text>
              </Button>
            </Form>
          </Content>
        </Container>
    );
  }
}


export default Registration

import React, { Component } from 'react';
import { StatusBar, View, Switch } from 'react-native';
import { Container, Left, Header, Content, Form, InputGroup, Input, Icon, Text, Button } from 'native-base';
import Style from '../../config/styles';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      errors: '',
      agreed: false
    };
  }

  updateFirstName(firstName) {this.setState({firstName})}
  updateLastName(lastName) {this.setState({lastName})}
  updateEmail(email) {this.setState({email})}
  updatePassword(password) {this.setState({password})}

  pressRegister(){
    if(this.state.firstName.length < 1) {
      this.setState({
        errors: 'First Name is required.'
      });
    } else if(this.state.lastName.length < 1) {
      this.setState({
        errors: 'Last Name is required.'
      })
    } else if(!this.state.agreed){
      this.setState({
        errors: 'Please agree to Terms'
      })
    } else {
      this.register()
    }
  }

  register(){
    this.state.fbApp.createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
      this.state.fbApp.database.ref('users/' + user.uid).set({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
      });
      this.props.navigator.push({
        id: 'Dashboard',
        userId: user.uid
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
          <Content>
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
              <InputGroup>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 1}}>
                  <Text style={{marginLeft: 10}}>I agree to Terms</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 1}}>
                  <Switch
                      onValueChange={(value) => {
                        this.setState({agreed: value});
                      }}
                      style={{ marginRight: 20}}
                      value={this.state.agreed} />
                </View>
              </InputGroup>
              <Button style={Style.blueButton} onPress={()=>this.pressRegister()}>
                <Text>Create Account</Text>
              </Button>
            </Form>
          </Content>
        </Container>
    );
  }
}


export default Registration

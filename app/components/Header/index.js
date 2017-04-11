
import React, { Component } from 'react'
import { Picker, Text, TouchableHighlight, ListView, View, AsyncStorage } from 'react-native'
import { Left, Container, Header, Body, Title, Right, Icon, Button, ListItem, List} from 'native-base'




export default class AppHeader extends Component {

  constructor(props) {
    super(props);
  };

  componentDidMount() {
  }

  signOut() {
    this.props.signOut(this.props.navigator);
  }



  render() {
    return (
        <Header>
          <Left/>
          <Body>
          <Title>Any Game</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.signOut.bind(this)} >
              <Text>Logout</Text>
            </Button>
          </Right>
        </Header>
    )
  }
}

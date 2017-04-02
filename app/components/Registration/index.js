import React, { Component } from 'react';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button, Item, Label, Left, Body, Right } from 'native-base';

const PickerItem = Picker.Item;

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selected1: 'key0',
      results: {
        items: [],
      },
    };
  }

  onValueChange(value: string) {
    this.setState({
      selected1: value,
    });
  }

  render() {
    return (
        <Container>
          <Content>
            <Item>
              <Label>First Name</Label>
              <Input />
            </Item>
            <Item inlineLabel>
              <Label>Last Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Floating Label</Label>
              <Input />
            </Item>
            <InputGroup>
              <Icon name="ios-person" style={{ color: '#0A69FE' }} />
              <Input placeholder="EMAIL" />
            </InputGroup>
            <InputGroup>
              <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
              <Input placeholder="PASSWORD" secureTextEntry />
            </InputGroup>
            <InputGroup>
              <Icon name="ios-call" style={{ color: '#0A69FE' }} />
              <Input placeholder="PHONE" keyboardType="numeric" />
            </InputGroup>
            <Item stackedLabel>
              <Label>Permanent Address</Label>
              <Input placeholder="Address" />
            </Item>
            <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
              <Text>Create Accont</Text>
            </Button>
          </Content>
        </Container>
    );
  }
}


export default Registration

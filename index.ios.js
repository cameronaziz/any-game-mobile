import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './app/index'

export default class anyGame extends Component {
  render() {
    return (
        <App/>
    );
  }
}

AppRegistry.registerComponent('anyGame', () => anyGame);

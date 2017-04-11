import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Registration from './components/Registration';
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import * as firebase from 'firebase';
import firebaseConfig from './utils/Firebase';

const fbApp = firebase.initializeApp(firebaseConfig);


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fbApp: fbApp
    }
  }

  componentWillMount() {
    fbApp.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigator.push({
          id: 'Dashboard',
          fbApp: this.state.fbApp
        });
      }
    });
  }

  renderScene(route, navigator) {
    switch(route.id) {
      case 'LandingPage':
        return(<LandingPage navigator={navigator} fbApp={fbApp} />);
      case 'Registration':
        return(<Registration navigator={navigator} fbApp={fbApp} />);
      case 'Login':
        return(<Login navigator={navigator} fbApp={fbApp} />);
      case 'Dashboard':
        return(<Dashboard navigator={navigator} fbApp={fbApp} />);
    }
  }

  render() {
    return(
        <Navigator
            initialRoute={{id: 'LandingPage'}}
            renderScene={this.renderScene}
            configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
        />
    )
  }
}


export default App
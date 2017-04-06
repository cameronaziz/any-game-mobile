import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Registration from './components/Registration';
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard/index";

class App extends Component {

  renderScene(route, navigator) {
    switch(route.id) {
      case 'LandingPage':
        return(<LandingPage navigator={navigator} />);
      case 'Registration':
        return(<Registration navigator={navigator} />);
      case 'Login':
        return(<Login navigator={navigator} />);
      case 'Dashboard':
        return(<Dashboard navigator={navigator} />)
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
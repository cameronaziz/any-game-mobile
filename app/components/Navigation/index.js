class RouteApp extends Component {

  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    switch(route.id) {
      case 'LandingPage':
        return(<LandingPage navigator={navigator} />);
      case 'Registration':
        return(<Registration navigator={navigator} />);
      case 'Login':
        return(<Login navigator={navigator} />);
      case 'Dashboard':
        return(<Dashboard navigator={navigator} />);
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

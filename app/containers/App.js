import { StackNavigator } from 'react-navigation';

import LandingPage from './LandingPage';
import Login from './Login';

const App = StackNavigator({
  LandingPage: {screen: LandingPage},
  Login: {screen: Login},
});
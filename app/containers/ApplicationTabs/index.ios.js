import React, {Component} from 'react';
import { View, TabBarIOS } from 'react-native';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';
import { bindActionCreators } from 'redux';
import Dashboard from './../Dashboard';
import style from '../globalStyle';

class ApplicationTabs extends Component {

  constructor(props) {
    super(props);
    this.state = { index: 0 }
  }

  onPress(index) {
    this.props.setTab(index);
  }

  renderScene(component) {
    return (
        <View style={style.container}>
          { React.createElement(component, this.props) }
        </View>
    )
  }

  render() {
    return(
        <TabBarIOS style={{flex: 1, height: '100%'}}>
          <TabBarIOS.Item
              systemIcon="favorites"
              selectedIconName="favorites"
              iconSize={25}
              onPress={() => { return this.onPress(0) } }
              selected={this.props.tabs.index === 0}>
          { this.renderScene(Dashboard) }
          </TabBarIOS.Item>
          <TabBarIOS.Item
              systemIcon="favorites"
              iconSize={25}
              onPress={() => { return this.onPress(1) } }
              selectedIconName="favorites"
              selected={this.props.tabs.index === 1}>
            { this.renderScene(Dashboard) }
          </TabBarIOS.Item>
        </TabBarIOS>
    )
  }
}

function mapStateToProps(state) {
  return {
    tabs: state.tabs
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationTabs);
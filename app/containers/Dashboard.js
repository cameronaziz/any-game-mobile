import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

import globalStyle from './globalStyle';

import { AsyncStorage } from 'react-native';

import { TouchableHighlight, StatusBar, View, Text } from 'react-native';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  clearAsync() {
    AsyncStorage.clear();
  }

  render() {
    return (
        <View>
          <StatusBar hidden={true} />
          <TouchableHighlight
              onPress={ () => {this.clearAsync()} } >
            <Text style={[globalStyle.title, globalStyle.margin]}>The Dashboard</Text>
          </TouchableHighlight>
            <Text>User ID: {this.props.authenticatedUser.uid}</Text>
          </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticatedUser: state.authenticatedUser,
    loading: state.currentlyLoading,
    allUserTeams: state.allUserTeams
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
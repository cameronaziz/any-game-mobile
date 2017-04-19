import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

import globalStyle from './globalStyle';

import { TouchableHighlight, StatusBar, View, Text } from 'react-native';

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }


  getData() {
    console.log(this.props.authenticatedUser);
    console.log(this.props.allUserTeams);
  }

  getGames() {
    this.props.fetchGames();
  }

  componentWillMount() {
    this.props.getAllUserTeams(this.props.authenticatedUser);
    console.log('In Will Mount' + this.props.allUserTeams);
  }

  render() {
    return (
        <View>
          <StatusBar hidden={true} />
          <TouchableHighlight
              onPress={ () => {this.getData()} } >
            <Text style={[globalStyle.title, globalStyle.margin]}>The Dashboard</Text>
          </TouchableHighlight>
          <TouchableHighlight
              onPress={ () => {this.getGames()} } >
            <Text>User ID: {this.props.authenticatedUser.uid}</Text>
          </TouchableHighlight>
          {this.props.allUserTeams.football ? (
              <Text>Football Team: {this.props.allUserTeams.football.team}</Text>
          ) : (null)}
          {this.props.allUserTeams.basketball ? (
              <Text>Basketball Team: {this.props.allUserTeams.basketball.team}</Text>
          ) : (null)}
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
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

import globalStyle from './globalStyle';

import { TouchableHighlight, StatusBar, View, Text } from 'react-native';


class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      basketballTeam: '',
      footballTeam: ''
    };

  }

  getData() {
      this.props.getAllUserTeams(this.props.user);
      console.log(this.props.UserTeams);
      if (this.props.UserTeams) {
      this.setState({
        basketballTeam: this.props.UserTeams.basketball,
        footballTeam: this.props.UserTeams.football
      })
    }
  }

  render() {
    return (
        <View>
          <StatusBar hidden={true} />
          <TouchableHighlight
              onPress={ () => {this.getData()} } >
            <Text style={[globalStyle.title, globalStyle.margin]}>The Dashboard</Text>
          </TouchableHighlight>
          <Text>Football Team: {this.state.footballTeam.team}</Text>
          <Text>Basketball Team: {this.state.basketballTeam.team}</Text>

        </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.authenticatedUser,
    loading: state.currentlyLoading,
    UserTeams: state.allUserTeams
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
import React, { Component } from 'react';
import { StatusBar, Picker, View, Text, Button, ActivityIndicator } from 'react-native';
import globalStyle from './globalStyle';
import { connect } from 'react-redux';
import { jsUcFirst } from '../utils/helpful';

let defaultSport = 'basketball';

class PickTeam extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sportInput: defaultSport,
      teamInput: '',
    }
  }

  sportPicked(sport) {
    this.setState({
      sportInput: sport,
      teamInput: ''
    });
    this.props.fetchTeams(sport)
  }

  teamPicked() {
    switch (this.state.teamInput) {
      case '':
        return;
      case '0':
        return;
      default:
        this.props.setTeam(this.state.sportInput, this.state.teamInput, this.props.user)
    }
  }

  sports() {
    return Object.keys(this.props.searchedSports)
  }

  teams() {
    return Object.keys(this.props.searchedTeams).map( key => this.props.searchedTeams[key])
  }

  componentWillMount() {
    this.props.fetchSports();
    this.props.fetchTeams(defaultSport);
  }

  render() {
    return (
        <View>
          <StatusBar hidden={true} />
          <Text style={[globalStyle.title, globalStyle.margin]}>Pick a Sport</Text>
          <Picker selectedValue={this.state.sportInput} onValueChange={(sportInput)=>this.sportPicked(sportInput)}>
            {this.sports().map((sport, i) => {
              return <Picker.Item key={i} value={sport} label={jsUcFirst(sport)} />
            })}
          </Picker>
          <Text style={globalStyle.title}>Pick a Team</Text>
          {!this.props.loading ?
              <Picker style={globalStyle.picker} selectedValue={this.state.teamInput} onValueChange={(teamInput) => this.setState({teamInput})}>
                <Picker.Item label='Please select an team...' value='0' />
                {this.teams().map((team, i) => {
                  return <Picker.Item key={i} value={team.name} label={team.location + " " + team.name} />
                })}
              </Picker>
              :
              <View style={globalStyle.loadingContainer}>
                <ActivityIndicator/>
                <Text>Loading</Text>
              </View>
          }
          <View style={globalStyle.buttonContainer}>
            <Button style={globalStyle.button} title="Set Team" color="#FFF" onPress={() => this.teamPicked()}/>
          </View>
        </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.authenticatedUser,
    searchedTeams: state.searchedTeams,
    searchedSports: state.searchedSports,
    loading: state.currentlyLoading

  }
}

export default connect(mapStateToProps)(PickTeam)

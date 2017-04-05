import React, { Component } from 'react'
import { Picker } from 'react-native'

export default class AddTeam extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teams: ['Lakers', 'Thunder'],
      team: ''
    };
  };


  render() {
    return (
        <Picker onValueChange={(team) => this.setState({team: team})}>
          {this.state.teams.map((k,v) => {
            return <Picker.Item key={k} value={v} label={v} />
          })}
        </Picker>

    )
  }
}

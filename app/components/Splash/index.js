import React, { Component } from 'react'
import { Image } from 'react-native'
import { View } from 'native-base'

export default class Splash extends Component {

  render() {
    return (
        <View style={{alignItems: 'stretch', flex: 1}}>
          <Image
              source={require('../../images/splash.png')}
              style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
          />
        </View>
    )
  }
}

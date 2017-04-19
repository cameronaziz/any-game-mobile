import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { Animated, View, NavigationExperimental, StyleSheet } from 'react-native';

const { PropTypes: NavigationPropTypes, StateUtils: NavigationStateUtils, Card: NavigationCard, Transitioner: NavigationTransitioner } = NavigationExperimental;
const { PagerStyleInterpolator: NavigationPagerStyleInterpolator } = NavigationCard;

import ApplicationTabs from "./ApplicationTabs/index.ios";
import LandingPage from './LandingPage';
import Login from './Login';

class AppContainer extends Component {

  constructor(props: any, context: any) {
    super(props, context);
    this._render = this._render.bind(this);
    this._renderScene = this._renderScene.bind(this);
  }

  render() {
    return (
        <NavigationTransitioner
            navigationState={this.props.navigationState}
            render={this._render}
        />
    )
  }

  _render(transitionProps) {
    const scenes = transitionProps.scenes.map((scene) => {
      const sceneProps = {
        ...transitionProps,
        scene,
      };
      return this._renderScene(sceneProps);
    });
    return (
        <View style={ { flex: 1} }>
          {scenes}
        </View>
    );
  }

  _renderScene(sceneProps) {
    return (
        <SceneContainer
            {...sceneProps}
            key={sceneProps.scene.key}
        />
    )
  }

}

class SceneContainer extends Component {

  render() {
    const style = [
      styles.scene,
      NavigationPagerStyleInterpolator.forHorizontal(this.props)
    ];
    let Scene = null;
    if (this.props.scene.route.key === 'ApplicationTabs') { Scene = ApplicationTabs }
    if (this.props.scene.route.key === 'LandingPage') { Scene = LandingPage }
    if (this.props.scene.route.key === 'Login') { Scene = Login }
    return  (
        <Animated.View style={style}>
          <Scene {...this.props} style={style} />
        </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    navigationState: state.navigationState,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
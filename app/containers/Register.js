import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

import GlobalStyle from './ContainerStyles/GlobalStyle';
import RegisterStyle from './ContainerStyles/RegisterStyle'

import { View, Text, ActivityIndicator} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

class Register extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={ RegisterStyle.container }>
                <View style={ RegisterStyle.loginTitle}>
                    <Text style={[GlobalStyle.title, GlobalStyle.margin]}>Register</Text>
                    <Text style={GlobalStyle.error}>{ this.props.loginError.message }</Text>
                </View>
                <View style={ RegisterStyle.loginFields }>
                    <View style={RegisterStyle.formFields}>
                        {this.props.loading ? (
                            <ActivityIndicator style={RegisterStyle.activity} size='large'/>
                        ) : (
                            <View>
                                <FormLabel>Email</FormLabel>
                                <FormInput
                                    onChangeText={(email) => this.setState({email})}/>
                                <FormLabel>Password</FormLabel>
                                <FormInput
                                    secureTextEntry={true}
                                    onChangeText={(password) => this.setState({password})}/>
                            </View>
                        )}
                    </View>
                    <View style={RegisterStyle.submitButton}>
                        <Button
                            title='Register'
                            onPress={() => this.loginPress()}/>
                    </View>
                </View>
            </View>
        )
    }

}
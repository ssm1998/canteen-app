import React,  { Component } from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Start from './src/Start';
import Login from './src/Login';
import SignUp1 from './src/SignUp1';

const RootStack = StackNavigator(
  {
    Start: {
      screen: Start,
      navigationOptions: {
            title: 'Home',
        }
    },
    Login: {
      screen: Login,
      navigationOptions: {
            title: 'Login',
        }
    },
    SignUp1: {
      screen: SignUp1,
      navigationOptions: {
            title: 'Sign Up',
        }
    },
  },
  {
    initialRouteName: 'Start',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

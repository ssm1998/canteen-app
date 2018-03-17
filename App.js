import React,  { Component } from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Start from './src/Start';
import Login from './src/Login';

const RootStack = StackNavigator(
  {
    Start: {
      screen: Start,
    },
    Login: {
      screen: Login,
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

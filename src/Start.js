import React,  { Component } from 'react';
import { Alert, StyleSheet, View, ImageBackground, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './Login';

export default class Start extends React.Component {

    render() {
        return (
          <View style = {styles.container}>
            <ImageBackground style = {styles.background} source = {require('../StartPageImgFade.jpg')}>
              <View style = {styles.buttonContainer}>
                <Button
                  onPress = {() => this.props.navigation.navigate('Login')}
                  containerStyle = {{padding:10, height:45, overflow:'hidden', borderRadius:100, backgroundColor: 'rgba(234, 202, 251, 0.8)'}}
                  disabledContainerStyle = {{backgroundColor: 'grey'}}
                  style = {{fontSize: 20, color: 'white', backgroundColor: 'rgba(233, 47, 109, 0.8)'}}
                  title = "LOGIN">
                  
                </Button>
              </View>
              <View style = {styles.buttonContainer}>
                <Button
                    onPress = {() => this.props.navigation.navigate('Login')}
                    containerStyle = {{padding:10, height:45, overflow:'hidden', borderRadius:100, backgroundColor: 'rgba(234, 202, 251, 0.8)'}}
                    disabledContainerStyle = {{backgroundColor: 'grey'}}
                    style = {{fontSize: 20, color: 'white', backgroundColor: 'rgba(233, 47, 109, 0.8)'}}
                    title = "SIGN UP">
              
                </Button>
              </View>
          </ImageBackground>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   },
   background: {
    flex: 1,
    justifyContent: 'center',
   },
   buttonContainer: {
     margin: 20,
     borderRadius:100,
     backgroundColor: 'rgba(233, 47, 109, 0.8)',
   },

});

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

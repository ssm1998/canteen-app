import React,  { Component } from 'react';
import { Alert, StyleSheet, View, ImageBackground, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './Login';
import SignUp1 from './SignUp1';

export default class Start extends React.Component {

    render() {
        return (
          <View style = {styles.container}>
            <ImageBackground style = {styles.background} source = {require('../StartPageImgFade.jpg')}>
              <View style = {styles.buttonContainer}>
                <Button
                  onPress = {() => this.props.navigation.navigate('Login')}
                  containerStyle = {{padding:10, height:45, overflow:'hidden'}}
                  buttonStyle = {{borderRadius:25}}
                  disabledContainerStyle = {{backgroundColor: 'grey'}}
                  style = {{fontSize: 20, color: 'white'}}
                  color = 'rgba(233, 47, 109, 1)'
                  title = "LOGIN">
                  
                </Button>
              </View>
              <View style = {styles.buttonContainer}>
                <Button
                    onPress = {() => this.props.navigation.navigate('SignUp1')}
                    containerStyle = {{padding:10, height:45, overflow:'hidden'}}
		    buttonStyle = {{borderRadius:25}}
                    disabledContainerStyle = {{backgroundColor: 'grey'}}
                    style = {{fontSize: 20, color: 'white'}}
                    color = 'rgba(233, 47, 109, 1)'
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
   },

});
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

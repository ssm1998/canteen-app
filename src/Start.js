import React,  { Component } from 'react';
import { Alert, StyleSheet, View, ImageBackground, Text, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './Login';
import SignUp1 from './SignUp1';

export default class Start extends React.Component {

    render() {
        return (
          <View style = {styles.container}>
            <ImageBackground style = {styles.background} source = {require('../StartPageImgFade.jpg')}>
              <View style = {styles.buttonContainer}>
		<TouchableHighlight onPress = {() => this.props.navigation.navigate('Login')}>
		      <View style = {styles.buttonContainer}>
			      <Text style = {styles.textContainer}>
				      LOGIN
		              </Text>
		      </View>
		</TouchableHighlight>
		<TouchableHighlight onPress = {() => this.props.navigation.navigate('SignUp1')}>
		      <View style = {styles.buttonContainer}>
			      <Text style = {styles.textContainer}>
				      SIGN UP
			      </Text>
		      </View>
		</TouchableHighlight>
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
     color: 'rgba(233, 47, 109, 1)',  
     borderRadius: 100,	   
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

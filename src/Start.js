import React,  { Component } from 'react';
import { Alert, StyleSheet, View, ImageBackground, Text, Button } from 'react-native';

export default class Login extends Component {
  _onPressButton() {
    Alert.alert('Navigate to next page!')
  }

    render() {
        return (
          <View style = {styles.container}>
            <ImageBackground style = {styles.background} source = {require('./StartPageImgFade.jpg')}>
              <View style = {styles.buttonContainer}>
                <Button
                  onPress = {this._onPressButton}
                  containerStyle = {{padding:10, height:45, overflow:'hidden', borderRadius:100, backgroundColor: 'rgba(234, 202, 251, 0.8)'}}
                  disabledContainerStyle = {{backgroundColor: 'grey'}}
                  style = {{fontSize: 20, color: 'white', backgroundColor: 'rgba(233, 47, 109, 0.8)'}}
                  title = "LOGIN">
                  
                </Button>
              </View>
              <View style = {styles.buttonContainer}>
                <Button
                    onPress = {this._onPressButton}
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

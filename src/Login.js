import React,  { Component } from 'react';
import { StyleSheet, View, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';

export default class Login extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <ImageBackground style = {styles.background} source={require('../StartPageImg.jpg')}>
                  <TextInput
                    placeholder = "email"
                    style = {styles.input}
                  />
                  <TextInput 
                    placeholder = "password"
                    style = {styles.input}
                  />

                  <TouchableOpacity style = {styles.buttonContainer}>
                    <Text style = {styles.buttonText}> LOGIN </Text>
                  </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(255,255,255,1)',
    },
    form: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
    },
    input: {
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.7)',
      paddingHorizontal: 10

    },
    buttonContainer: {
      backgroundColor: 'rgba(255,251,255,0.8)',
      padding: 10
    },
    buttonText: {
      textAlign: 'center',
      fontWeight: '700'
    }

});

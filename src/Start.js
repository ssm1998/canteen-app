import React,  { Component } from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Image style = {styles.background} source={require('./StartPageImg.jpg')}/>
                <View style = {styles.buttons}>
                  <TouchableOpacity style = {styles.buttonContainer}>
                    <Text style = {styles.buttonText}> LOGIN </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style = {styles.buttonContainer}>
                    <Text style = {styles.buttonText}> SIGN UP </Text>
                  </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
        flex: 1
    },
    buttons: {
      padding: 20,
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
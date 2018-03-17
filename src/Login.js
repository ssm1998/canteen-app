import React,  { Component } from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

export default class Login extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Image style = {styles.background} source={require('../StartPageImg.jpg')}/>
                <View style = {styles.form}>
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
    form: {
      padding: 20,
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

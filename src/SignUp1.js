import React from 'react';
//import FitImage from 'react-native-fit-image';
import { StyleSheet, Text,TextInput, Image, View,TouchableOpacity,ImageBackground } from 'react-native';
//const remote = "https://www.nautilusplus.com/healthy-alternatives-junk-food/"
//const width = Dimensions.get('window').width
export default class App extends React.Component {
  render() {
    return (
   
    
      <ImageBackground style = {{flex:1, backgroundColor: 'rgba(0, 0, 0,0.2 )'
}} source={require('../StartPageImgFade.jpg')}>
     
	  <Image
	  	style={{width:400, height: 100,resizeMode:'center',marginTop:50,
	
		justifyContent: 'center', alignSelf:'center'}}
		//alignItems: 'center',
		
		source={require('./are3.png')}
	
		/>
	

	<View style={{flexDirection:'row'}}>

     <TouchableOpacity activeOpacity = { .5} onEnter={()=>console.log("onEnter!")}>
	  <Image
	   style={{width:240, height: 320,alignSelf:'flex-start',flexWrap:'wrap',marginTop:80,}}
	  source={require('./vendor-clipart-1.jpg')}
	  
	  />
    </TouchableOpacity>	 

   
	  

	 
      <TouchableOpacity activeOpacity = { .5 } onEnter={()=>console.log("onEnter!")}>
	  <Image
	  style={{width:200, height: 320,alignSelf:'flex-end',flexWrap:'wrap',marginLeft:0,marginTop:50}}
	  source={require('./consumer.png')}
	  />
          </TouchableOpacity>

      <TextInput style={{height:100}} value={'hello'}/>
      
      	 
	  </View>
      
      </ImageBackground>
	  
	  
    
    );
  }
}


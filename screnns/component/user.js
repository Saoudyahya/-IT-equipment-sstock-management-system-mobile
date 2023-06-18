import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";
import Topbar from "./topbar";
import Box from "./box";

function User({navigation}) {
    return (
    
     <View style={styles.container1} >
       <ImageBackground source={require('../../assets/img/back.png')} resizeMode="cover" style={styles.image}></ImageBackground>
      <View style={styles.container}>
        <Topbar user="active"  ></Topbar>
       </View>
       <Text  style={styles.titre}>USER</Text>
   <Box  >    </Box>
     
      </View>
     
     

    );
  }
  const styles = StyleSheet.create({
    container1: {
   height : '100%',
     
    },  container: {
      flexDirection: 'row',
     marginTop : 40,
    
    },
  
      
    titre:{
        width:300,
     height:50,
     marginTop:40,
     marginLeft:160,
     fontWeight: "bold",
     fontSize:30,
    alignContent: "center",
    
    
       },
    Button:{
      width: 100,
      height:40,
      color:"gray",
      fontSize:15,
    },
    Text:{
      
      color:"grey",
      fontSize:15,
      fontWeight:"bold",
      backgroundColor:"white",
      borderColor: "black",
      borderRadius: 5,
      paddingHorizontal: 8,
      paddingVertical: 6,
        width: 120,
      height: 40,
      alignContent:"center",
      textAlign: 'center',
    },
   
  
      image: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
     
     
        opacity: 0.4,
        width : 500,
        height:  850,
        flex: 1,
       position: 'absolute',
      
    
      },
  
    
    back:{
       
      opacity: 0.6,
      width : 370,
      height: 830,
      flex: 1, 
    alignItems: "center",
    },
 
   
  });
export default User;
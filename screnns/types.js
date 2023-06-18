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
  TouchableOpacity,
  Heading,
  ScrollView,
  
  
} from "react-native";


import Topbar from "./component/topbar";
import Box from "./component/box";

function Types({navigation}) {
    return (
    
     <View style={styles.container1} >
       <ImageBackground source={require('../assets/img/types.png')} resizeMode="cover" style={styles.image}></ImageBackground>
      <View style={styles.container}>
        <Topbar types="active"  ></Topbar>
       </View>
       <Text  style={styles.titre}>Types</Text>
       <Box title="types"></Box>
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
    box:{},
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
      justifyContent:'center',
      textAlign: 'center',
    },
   
  
      image: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
     
     
        opacity: 0.6,
        width : 600,
        height:  950,
        flex: 1,
       position: 'absolute',
      
    
      },
  
    
   
   
   titre:{
    width:300,
 height:50,
 marginTop:40,
 marginLeft:150,
 fontWeight: "bold",
 fontSize:30,
alignContent: "center",
justifyContent: "center",
marginBottom:0

   },

   loginText:{
     color: "black",
     fontSize: 20,
        },
        label:{
           fontSize:16,
           fontWeight: "bold",
           marginBottom: 10,
           marginTop:0,
          padding:5
        },
   
  });
export default Types;
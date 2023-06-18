
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
import DarkTable from "./component/Dhead";

function AffichageM({navigation}) {
    return (
    
     <View style={styles.container1} >
       <ImageBackground source={require('../assets/img/5.png')} resizeMode="cover" style={styles.image}></ImageBackground>
      <View style={styles.container}>
        <Topbar Materiel="active"  ></Topbar>
       </View>
       <Text  style={styles.titre}>affichage Materiel</Text>
       <View style={styles.container7}>
    <DarkTable></DarkTable>
    </View>
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
    container7: {
      flex: 1,
        
      
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
   
   titre:{
    width:300,
 height:50,
 marginTop:40,
 marginLeft:80,
 fontWeight: "bold",
 fontSize:30,
alignContent: "center",
marginBottom:0

   },
   loginBtn: {
     width: "30%",
     borderRadius: 6,
     height: 40,
     alignItems: "center",
     justifyContent: "center",
    marginTop:15,
     backgroundColor: "#2E86C1",
    marginLeft:140,
    marginBottom:10
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
export default AffichageM;
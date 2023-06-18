import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { BASE_url } from "../URL";
import { useNavigation } from '@react-navigation/native';
function FormT({}) {  
    const [type, setType] = useState("");
    const navigation = useNavigation();
       
    const handleSubmit = () => {
      fetch(`${BASE_url}/api/registerTYPES`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: type,
        })
      })
      .then(response => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigation.navigate('Affichage-types') 
      })
      .catch(error => console.error("api not working", error));
    };
    return (
      
     <ScrollView>  
      <Text  style={styles.titre}>types</Text>
          <View style={styles.container}>
         
               
      
      <View  style={styles.Icon}>
               <Icon name="user" size={30} color="black"/>
        <Text  style={styles.label}>type</Text>
        </View>
         <View style={styles.inputView}>
         <TextInput
            style={styles.TextInput}
            placeholder="new type"
            placeholderTextColor="#003f5c"
            onChangeText={(type) => setType(type)}
          /> 
        </View> 
        <View style={styles.loginBtn} >
          <TouchableOpacity  onPress={handleSubmit} ><Text style={styles.loginText}>submit</Text></TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    );
  }
  


  const styles = StyleSheet.create({
    container: {
      flex: 1,
    marginLeft:20,
      alignItems: "center",
     marginTop:50,
   
    },
     
   titre:{
    width:500,
 height:70,
 marginTop:40,
 marginLeft:150,
 fontWeight: "bold",
 fontSize:30,
alignContent: "center",
marginBottom:0

   },
    inputView: {
      backgroundColor: "white",
      width: "80%",
      height: 45,
     
      flexDirection:"row"
    
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },

    loginBtn: {
      width: "30%",
      borderRadius: 6,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
     marginTop:15,
     marginBottom:40,
      backgroundColor: "#2E86C1",
    },
    Text:{
      color: "red",
      fontSize: 16,
      marginTop: 25,
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
         Icon:{
      flexDirection:"row"

         }
       
  });
export default FormT;
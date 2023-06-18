import React, { useState,useEffect } from "react";
import { BASE_url } from "../URL";
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
import { useNavigation } from '@react-navigation/native';

function RecherheUname({setDataN}) {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    
    const RechercheUname = () => {
      fetch(`${BASE_url}/api/affichageUser-name/${name}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
        })
      })
      .then(response => {
        return response.json();
      })
      .then((data) => {
        console.log(`${BASE_url}/apiRechercheUSER-name`);
        setDataN(data);
      })
      .catch(error => console.error("api not working", error));
    };
  
       

    return (
      
      
      <View style={styles.all}>
        
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="name"
            placeholderTextColor="#003f5c"
            onChangeText={(name) => setName(name)}
          /> 
        </View>
     <TouchableOpacity onPress={RechercheUname} style={styles.loginBtn}><Text>recherche</Text></TouchableOpacity>
        </View>
 
    );
  }
  


  const styles = StyleSheet.create({
    container: {
      flex: 1,
    marginLeft:20,
      alignItems: "center",
     marginTop:50,
   
    },
     all:{
   
flexDirection:"row",
marginTop:12,
marginBottom:10,
     },
   
     
    inputView: {
      backgroundColor: "white",
      width: "75%",
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
      
      height: 44,
      alignItems: "center",
      justifyContent: "center",
     
      backgroundColor: "green",
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

         },
         button: {
          backgroundColor: 'white',
          borderRadius: 5,
          padding: 10,
          width: "80%",
        },
        buttonText: {
          color: 'grey',
          fontSize: 16,
        },
        dropdown: {
          backgroundColor: 'white',
          borderRadius: 5,
        },
        dropdownText: {
          fontSize: 16,
          padding: 10,
        },
        dropdownTextHighlight: {
          fontWeight: 'bold',
          
        },
       
  });
export default RecherheUname;
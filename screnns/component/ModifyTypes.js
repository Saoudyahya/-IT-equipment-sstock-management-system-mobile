import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";

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
  Alert
} from "react-native";
import { BASE_url } from "../URL";
import { useNavigation } from '@react-navigation/native';
function ModifyT({name}) {  
    const [type, setType] = useState("");
    const navigation = useNavigation();
    useEffect(() => {
      fetchdepartementByname()
    }, []);
    const handleSubmit = () => {
      fetch(`${BASE_url}/api/UpdateTYPES/${name}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: type,
        })
      })
      .then(response => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigation.navigate('types') 
      })
      .catch(error => console.error("api not working", error));
    };
    //---------------------------------------------------------------------------------------------------
    const DeleteUSER = () => {
      fetch(`${BASE_url}/api/DeleteTYPES/${name}`, {
        method: 'POST',
      })
      .then(response => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigation.navigate('departement'); 
      })
      .catch(error => console.error("api not working", error));
    };
    //---------------------------------------------------------------------------------------------------
    const showAlert = () => {
      Alert.alert(
        'Are u sure you want to delete this materiel?',
        'if u delete this type then it would be deleted from the database',
        [
          {
            text: 'OK',
            onPress: () => DeleteUSER()
          },
          {
            text: 'cancel',
          
          }
        ]
      );
      }
    const fetchdepartementByname = async () => {
      try {
        const response = await fetch(`${BASE_url}/api/ModificationTYPES/${name}`,{
            method: 'POST'  });
        const data = await response.json(); 
        console.log(data);
        setType(data.name); 
      } catch (error) {
        console.error(error);
      }
    }
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
            value={type}
            onChangeText={(type) => setType(type)}
          /> 
        </View> 
        <View style={styles.allB}>
        <View style={styles.loginBtn} >
          <TouchableOpacity  onPress={handleSubmit} ><Text style={styles.loginText}>update</Text></TouchableOpacity>
        </View>
        
        <View style={styles.loginBtn1} >
          <TouchableOpacity  onPress={showAlert} ><Text style={styles.loginText}>delete</Text></TouchableOpacity>
        </View>
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
      backgroundColor: "green",
      margin:12
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

         },allB:{
          flexDirection:"row",
          
          
               },
              loginBtn1: {
                width: "30%",
                borderRadius: 6,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
               marginTop:15,
                backgroundColor: "red",
              },
       
  });
export default ModifyT;
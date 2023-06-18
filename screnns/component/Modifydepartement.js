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
  Alert,
} from "react-native";
import { BASE_url } from "../URL";
import { useNavigation } from '@react-navigation/native';
function ModifyD({name1}) {  
    const [name, setName] = useState("");
    const navigation = useNavigation();
    useEffect(() => {
      fetchdepartementByname()
    }, []);
    const handleSubmitd = () => {
      fetch(`${BASE_url}/api/UpdateDEPARTEMENT/${name1}`, {
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
        console.log(data);
        navigation.navigate('departement') 
      })
      .catch(error => console.error("api not working", error));
    };
    //-----------------------------------------------------------------------------------------------------------------------//
    const fetchdepartementByname = async () => {
      try {
        const response = await fetch(`${BASE_url}/api/ModificationDEPARTEMENT/${name1}`,{
            method: 'POST'  });
        const data = await response.json(); 
        console.log(data);
        setName(data.name); 
      } catch (error) {
        console.error(error);
      }
    }
    //---------------------------------------------------------------------------------------------------
    const DeleteDEPARTEMENT = () => {
      fetch(`${BASE_url}/api/DeleteDEPARTEMENT/${name1}`, {
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
        'if u delete this departement then it would be deleted from the database',
        [
          {
            text: 'OK',
            onPress: () => DeleteDEPARTEMENT()
          },
          {
            text: 'cancel',
          
          }
        ]
      );
      }
    return (
      
     <ScrollView>  
      <Text  style={styles.titre}>departement</Text>
          <View style={styles.container}>
         
               
      
      <View  style={styles.Icon}>
               <Icon name="building" size={30} color="black"/>
        <Text  style={styles.label}>departement</Text>
        </View>
         <View style={styles.inputView}>
         <TextInput
            style={styles.TextInput}
            placeholder="new departement"
            placeholderTextColor="#003f5c"
            value={name}
            onChangeText={(name) => setName(name)}
          /> 
        </View> 
       
      
        <View style={styles.allB}>
        <View style={styles.loginBtn} >
          <TouchableOpacity  onPress={handleSubmitd} ><Text style={styles.loginText}>update</Text></TouchableOpacity>
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
 marginLeft:120,
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

         }, allB:{
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
export default ModifyD;
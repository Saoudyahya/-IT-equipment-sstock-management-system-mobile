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
} from "react-native";
import { BASE_url } from "../URL";
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
function FormU({}) {  
  const navigation = useNavigation();
    const [name, setName] = useState("");
    const [name1, setName1] = useState("");
    const [departement, setDepartement] = useState("");
    const [data, setData] = useState([]);
    const handleSubmit = () => {
      fetch(`${BASE_url}/api/registerUSER`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          departement: departement,
    

        })
      })
      .then(response => {
        return response.json();
      })
      .then((data) => {
        console.log(`${BASE_url}/api/registerUSER`);
        console.log(data);
        navigation.navigate('Affichage-user') // Log the response data
      })
      .catch(error => console.error("api not working", error));
    };
  
    useEffect(() => {
      console.log(departement);
    }, [departement]);

   
    const handleSubmitd = () => {
      fetch(`${BASE_url}/api/registerDEPARTEMENT`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name1,
        })
      })
      .then(response => {
        return response.json();
      })
      .then((data) => {
        console.log(data); 
        navigation.navigate('Affichage-departement')
      })
      .catch(error => console.error("api not working", error));
    };
    //------------------------------------------------------------------------------------------------
    useEffect(() => {
      fetchTableData();
    }, []);
  
    const fetchTableData = async (D) => {
      try {
        const response = await fetch(`${BASE_url}/api/affichageDEPARTEMENT`,{
            method: 'POST'  });
       
        console.log(`${BASE_url}/api/affichageDEPARTEMENT`);
      
        const jsonData = await response.json();
      setData(jsonData);
      } catch (error) {
        console.error(error);
      }
      
    
      if (data.length === 0) {
        return (
          <View style={styles.container}>
            <Text>No data available</Text>
          </View>
        );
        }
    };
    //-----------------------------------------------------------------------------------
    return (
      
     <ScrollView>  
      <Text  style={styles.titre}>Insertion User/departement</Text>
          <View style={styles.container}>
         
               <StatusBar style="auto" />
               <View  style={styles.Icon}>
               <Icon name="mobile" size={30} color="black"/>
        <Text  style={styles.label}>name</Text>
        </View>
        <View style={styles.inputView}>
      
         <TextInput
            style={styles.TextInput}
            placeholder="name"
            placeholderTextColor="#003f5c"
            onChangeText={(name) => setName(name)}
          /> 
        </View>
        <View  style={styles.Icon}>
               <Icon name="building" size={30} color="black"/>
        <Text  style={styles.label}>departement</Text>
        </View>
        <SelectDropdown
        data={data.map(item => item.name)}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
            setDepartement(selectedItem);
           
        }
        
        } 
        defaultButtonText="Select the type"
        buttonTextAfterSelection={(selectedItem) => selectedItem}
        rowTextForSelection={(item) => item}
        buttonStyle={styles.button}
        buttonTextStyle={styles.buttonText}
        dropdownStyle={styles.dropdown}
        dropdownTextStyle={styles.dropdownText}
        dropdownTextHighlightStyle={styles.dropdownTextHighlight}
      
      />
       
      
        <View style={styles.loginBtn} >
          <TouchableOpacity  onPress={handleSubmit} ><Text style={styles.loginText}>submit</Text></TouchableOpacity>
        </View>
        
      
      <View  style={styles.Icon}>
               <Icon name="building" size={30} color="black"/>
        <Text  style={styles.label}>departement</Text>
        </View>
         <View style={styles.inputView}>
         <TextInput
            style={styles.TextInput}
            placeholder="new departement"
            placeholderTextColor="#003f5c"
            onChangeText={(name1) => setName1(name1)}
          /> 
        </View> 
       
      
        <View style={styles.loginBtn} >
          <TouchableOpacity  onPress={handleSubmitd} ><Text style={styles.loginText}>submit</Text></TouchableOpacity>
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
 marginLeft:20,
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

         },   button: {
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
export default FormU;
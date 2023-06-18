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
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
function ModifyU({id}) {  
  const navigation = useNavigation();
    const [name, setName] = useState("");
   
    const [departement, setDepartement] = useState("");
    const [data, setData] = useState([]);
    const handleSubmit = () => {
      fetch(`${BASE_url}/api/UpdateUSER/${id}`, {
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
        console.log(`${BASE_url}/api/UpdateUSER`);
        console.log(data);
        navigation.navigate('User') 
      })
      .catch(error => console.error("api not working", error));
    };
  
    useEffect(() => {
      console.log(departement);
    }, [departement]);

  
    //------------------------------------------------------------------------------------------------
    useEffect(() => {
      fetchTableData();
      fetchUserById();
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
    const fetchUserById = async () => {
      try {
        const response = await fetch(`${BASE_url}/api/ModificationUSER/${id}`,{
            method: 'POST'  });
        const data = await response.json(); 
        console.log(data);
        setName(data.name);
        setDepartement(data.departement);
       
      } catch (error) {
        console.error(error);
      }
    }
    //----------------------------------------------------------------------------------
    const DeleteUSER = () => {
      fetch(`${BASE_url}/api/DeleteUSER/${id}`, {
        method: 'POST',
      })
      .then(response => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigation.navigate('User') 
      })
      .catch(error => console.error("api not working", error));
    };
    //---------------------------------------------------------------------------------------------------
    const showAlert = () => {
      Alert.alert(
        'Are u sure you want to delete this materiel?',
        'if u delete this user then it would be deleted from the database',
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
            value={name}
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
        value={departement}
      />
       
      
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
      backgroundColor: "green",
      margin:12,
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
        allB:{
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
export default ModifyU;
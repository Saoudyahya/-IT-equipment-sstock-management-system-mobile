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
import SelectDropdown from 'react-native-select-dropdown';
function RecherheTy({setDataTY}) {
    const navigation = useNavigation();
    const [type, setType] = useState("");
    const [dataT,setDataT] = useState([])
    const Recherchetype = () => {
      fetch(`${BASE_url}/api/affichageMATERIEL-type/${type}`, {
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
        console.log(`${BASE_url}/api/affichageMATERIEL-type77`);
        setDataTY(data);
      })
      .catch(error => console.error("api not working", error));
    };
    //-------------------------------------------------------
    useEffect(() => {
      fetchTableDataT();
    }, []);
    const fetchTableDataT = async () => {
      try {
        const response = await fetch(`${BASE_url}/api/affichageTYPES`,{
            method: 'POST'  });
       
        console.log(`${BASE_url}/api/affichageTYPES`);
      
        const jsonData = await response.json();
      setDataT(jsonData);
      } catch (error) {
        console.error(error);
      }
      
      if (dataT.length === 0) {
        return (
          <View style={styles.container}>
            <Text>No data available</Text>
          </View>
        );
        }}
    
       
  
       

    return (
      
      
      <View style={styles.all}>
        
        <SelectDropdown
data={dataT.map(item => item.name)}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index);
      setType(selectedItem);
     
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
     <TouchableOpacity onPress={Recherchetype} style={styles.loginBtn}><Text>recherche</Text></TouchableOpacity>
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
          
          padding: 8,
          width: "75%",
          height:43,
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
export default RecherheTy;
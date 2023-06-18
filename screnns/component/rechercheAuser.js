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
function RechercheAuser({setDataUser}) {
    const navigation = useNavigation();
    const [user, setUser] = useState("");
    const [data,setData] = useState([]);
    const Rechercheuser = () => {
      fetch(`${BASE_url}/api/affichageAFFECTATION-user/${user}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: user,
        })
      })
      .then(response => {
        return response.json();
      })
      .then((data) => {
        console.log(`${BASE_url}/affichageAFFECTATION-user`);
        console.log(data)
        setDataUser(data);
      })
      .catch(error => console.error("api not working", error));
    };
  //--------------------------------------------------------------------------
  useEffect(() => {
    fetchTableData();
  }, []);

  const fetchTableData = async (D) => {
    try {
      const response = await fetch(`${BASE_url}/api/affichageUSER`,{
          method: 'POST'  });
     
      console.log(`${BASE_url}/api/affichageUSER`);
    
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

    return (
      
      
      <View style={styles.all}>
        
        <SelectDropdown
data={data.map(item => item.name)}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index);
      setUser(selectedItem);
     
	}
  
  } 
  defaultButtonText="Select the user"
  buttonTextAfterSelection={(selectedItem) => selectedItem}
  rowTextForSelection={(item) => item}
  buttonStyle={styles.button}
  buttonTextStyle={styles.buttonText}
  dropdownStyle={styles.dropdown}
  dropdownTextStyle={styles.dropdownText}
  dropdownTextHighlightStyle={styles.dropdownTextHighlight}

/>
     <TouchableOpacity onPress={Rechercheuser} style={styles.loginBtn}><Text>recherche</Text></TouchableOpacity>
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
export default RechercheAuser;
import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import { BASE_url } from "../URL";
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
import { useNavigation } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
function FormM({}) {
  const [dataT, setDataT] = useState([]);
    const [type, setType] = useState("");
    const navigation = useNavigation();
    const [model, setModel] = useState("");
    const [mark, setMark] = useState("");
    const [ser, setSer] = useState("");
    const [code_2m, setCode_2m] = useState("");
    useEffect(() => {
      
      fetchTableDataT();
    }, []);
    useEffect(() => {
      console.log(type);
    }, [type]);
    const handleSubmit = () => {
      fetch(`${BASE_url}/api/registerMATERIEL`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ser: ser,
          mark: mark,
          model:model,
          type:type,
          code_2m:code_2m,

        })
      })
      .then(response => {
        return response.json();
      })
      .then((data) => {
        console.log(`${BASE_url}/api/registerMATERIEL`);
        console.log(data); 
        navigation.navigate('Affichage-materiel')
      })
      .catch(error => console.error("api not working", error));
    };
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
      
     <ScrollView>  
      <Text  style={styles.titre}>Insertion Materiel</Text>
          <View style={styles.container}>
         
               <StatusBar style="auto" />
               <View  style={styles.Icon}>
               <Icon name="mobile" size={30} color="black"/>
        <Text  style={styles.label}>type</Text>
        </View>
        
      
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
       
        <View  style={styles.Icon}>
               <Icon name="user" size={30} color="black"/>
        <Text  style={styles.label}>mark</Text>
        </View>
         <View style={styles.inputView}>
         <TextInput
            style={styles.TextInput}
            placeholder="Dell"
            placeholderTextColor="#003f5c"

            onChangeText={(mark) => setMark(mark)}
          /> 
        </View> 
        <View  style={styles.Icon}>
               <Icon name="search-plus" size={30} color="black"/>
        <Text  style={styles.label}>model</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Dell-15"
            placeholderTextColor="#003f5c"
            onChangeText={(model) => setModel(model)}
          /> 
        </View> 
       
        <View  style={styles.Icon}>
               <Icon name="laptop" size={30} color="black"/>
        <Text  style={styles.label}>ser</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="ser"
            placeholderTextColor="#003f5c"
            onChangeText={(ser) => setSer(ser)}
          /> 
        </View>
        <View  style={styles.Icon}>
               <Icon name="building" size={30} color="black"/>
        <Text  style={styles.label}>code_2m</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="code_2m"
            placeholderTextColor="#003f5c"
            onChangeText={(code_2m) => setCode_2m(code_2m)}
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
     select:{
   

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
export default FormM;
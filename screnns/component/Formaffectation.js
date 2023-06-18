import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import { BASE_url } from "../URL";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
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

function FormA({}) {
  const [data, setData] = useState([]);
  const [dataU, setDataU] = useState([]);
  const [dataM, setDataM] = useState([]);
  const navigation = useNavigation();
    const [departement,setDepartement]=useState("")
    const [localisation,setLocalisation]=useState("")
    const [date,setDate]=useState("")
    const [batiment,setBatiment]=useState("")
    const [etage,setEtage]=useState(0)
    const [user, setuser] = useState("");
    const [materiel, setMateriel] = useState("");
    const [readOnly, setReadOnly] = useState(true);
//-----------------------------------------------------------------

useEffect(() => {
  setReadOnly(!departement);
  console.log(departement);
  if(departement!="") fetchTableDataUser();
 
}, [departement]);
useEffect(() => {
  setMateriel(materiel);
}, [materiel]);
useEffect(() => {
  setuser(user);
}, [user]);
    //--------------------------------------------------------------
    const handleSubmit = () => {
      fetch(`${BASE_url}/api/registerAFFECTATION`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          departement: departement,
          localisation: localisation,
          date:date,
          batiment:batiment,
          etage:etage,
          user:user,
          materiel:materiel,

        })
      })
      .then(response => {
        return response.json();
      })
      .then((data) => {
        navigation.navigate('Affichage-affectation') 
        console.log(data); 
      })
      .catch(error => console.error("api not working", error));
    };
  //----------------------------------------------------------------------------
  useEffect(() => {
    fetchTableData();
    fetchTableDataM();
    
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
  //--------------------------------------------------------------------
  const fetchTableDataUser = async (D) => {
    try {
      const response = await fetch(`${BASE_url}/api/affichageUSER-departement/${departement}`,{
          method: 'POST'  });
     
      console.log(`${BASE_url}/api/affichageDEPARTEMENT`);
    
      const jsonData = await response.json();
    setDataU(jsonData);
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
  //----------------------------------------------------------------------------------------------
  const fetchTableDataM = async () => {
    try {
      const response = await fetch(`${BASE_url}/api/affichageMATERIEL`,{
          method: 'POST'  });
     
      console.log(`${BASE_url}/api/affichageMATERIEL`);
    
      const jsonData = await response.json();
    setDataM(jsonData);
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
      
     <ScrollView>  
      <Text  style={styles.titre}>Insertion affectation</Text>
          <View style={styles.container}>
         
               <StatusBar style="auto" />
               <View  style={styles.Icon}>
               <Icon name="mobile" size={30} color="black"/>
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
        <View  style={styles.Icon}>
               <Icon name="user" size={30} color="black"/>
        <Text  style={styles.label}>date</Text>
        </View>
         <View style={styles.inputView}>
         <TextInput
            style={styles.TextInput}
            placeholder="date"
            placeholderTextColor="#003f5c"
            type="date"
            onChangeText={(date) => setDate(date)}
            editable={!readOnly}
          /> 
        </View> 
        <View  style={styles.Icon}>
               <Icon name="search-plus" size={30} color="black"/>
        <Text  style={styles.label}>localisation</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="casablanca"
            placeholderTextColor="#003f5c"
            editable={!readOnly}
            onChangeText={(localisation) => setLocalisation(localisation)}
          /> 
        </View> 
       
        <View  style={styles.Icon}>
               <Icon name="laptop" size={30} color="black"/>
        <Text  style={styles.label}>batiment</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="IT"
            placeholderTextColor="#003f5c"
            editable={!readOnly}
            onChangeText={(batiment) => setBatiment(batiment)}
          /> 
        </View>
        <View  style={styles.Icon}>
               <Icon name="building" size={30} color="black"/>
        <Text  style={styles.label}>etage</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="1-0"
            keyboardType="numeric"
            placeholderTextColor="#003f5c"
            editable={!readOnly}
            onChangeText={(etage) => setEtage(etage)}
          /> 
        </View>
        <View  style={styles.Icon}>
               <Icon name="user" size={30} color="black"/>
        <Text  style={styles.label}>user</Text>
        </View>
        <SelectDropdown
        data={dataU.map(item => item.name)}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
            setuser(selectedItem);
            console.log(user);
           
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

        <View  style={styles.Icon}>
               <Icon name="building" size={30} color="black"/>
        <Text  style={styles.label}>materiel</Text>
        </View>
        <SelectDropdown
        data={dataM.map(item => item.ser)}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
            setMateriel(selectedItem);
           
        }
        
        } 
        defaultButtonText="Select the materile"
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
    width:300,
 height:50,
 marginTop:40,
 marginLeft:60,
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
export default FormA;
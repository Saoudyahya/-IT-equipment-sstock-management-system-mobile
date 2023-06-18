import React from 'react';
import { View, StyleSheet, ActivityIndicator, Text,TouchableOpacity } from 'react-native';
import  { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, DataTable } from 'react-native-paper';
import { BASE_url } from "../URL";
import SelectDropdown from 'react-native-select-dropdown';
import RecherheLocalisation from './recherchelocalisation';
import RecherheEtage from './rechercheEtage';
import RechercheBatiment from './rechercheBatiment';
import RecherheDate from './rechercheDate';
import RechercheAuser from './rechercheAuser';
import RechercheAmateriel from './rechercheAmateriel';
import RechercheAdepartement from './rechercheAdepartement';
function RtableA() {
  const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [dataLocation, setDataLocation] = useState([]);
    const [dataUser, setDataUser] = useState([]);
    const [dataMateriel, setDataMateriel] = useState([]);
    const [dataDate, setDataDate] = useState([]);
    const [dataDepartement, setDataDepartement] = useState([]);
    const [dataBatiment, setDataBatiment] = useState([]);
    const [dataEtage, setDataEtage] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories,setCategories]=useState("");
       useEffect(() => {
      fetchTableData();
    }, []);
    useEffect(() => {
      setData(dataLocation);
    }, [dataLocation]);
    useEffect(() => {
      setData(dataEtage);
    }, [dataEtage]);
    useEffect(() => {
      setData(dataBatiment);
    }, [dataBatiment]);
    useEffect(() => {
      setData(dataDate);
    }, [dataDate]);
    useEffect(() => {
      setData(dataUser);
    }, [dataUser]);
    useEffect(() => {
      setData(dataMateriel);
    }, [dataMateriel]);
    useEffect(() => {
      setData(dataDepartement);
    }, [dataDepartement]);
    const fetchTableData = async (D) => {
      try {
        const response = await fetch(`${BASE_url}/api/affichageAFFECTATION`,{
            method: 'POST'  });
       
        console.log(`${BASE_url}/api/affichageMATERIEL`);
      
        const jsonData = await response.json();
      setData(jsonData);
      } catch (error) {
        console.error(error);
      }
      if (loading) {
        return (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
          </View>
        );
      }
    
      if (data.length === 0) {
        return (
          <View style={styles.container}>
            <Text>No data available</Text>
          </View>
        );
        }
    };
    const handleCellPress = (item) => {
      
      console.log('Cell pressed:', item.id_affectation);
      navigation.navigate('Modification-affectation', { id_affectation: item.id_affectation });
    };
    
    
    return (
        <View style={styles.container}>
          <View  style={styles.bar}>
            <Text  style={styles.Stitre}>recherhe avec :</Text>
          <View  style={styles.drop}>
           <SelectDropdown
data={["localitation","date","user","materiel","departement","batiment","etage"]}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index);
    setCategories(selectedItem);
     
	}
  
  } 
  defaultButtonText="recherche avec"
  buttonTextAfterSelection={(selectedItem) => selectedItem}
  rowTextForSelection={(item) => item}
  buttonStyle={styles.button}
  buttonTextStyle={styles.buttonText}
  dropdownStyle={styles.dropdown}
  dropdownTextStyle={styles.dropdownText}
  dropdownTextHighlightStyle={styles.dropdownTextHighlight}

/>
</View>
</View>
{categories === "localitation" && (
  <RecherheLocalisation setDataLocation={setDataLocation} />
  
)}
{categories === "etage" && (
  <RecherheEtage setDataEtage={setDataEtage} />
  
)}
{categories === "batiment" && (
  <RechercheBatiment setDataBatiment={setDataBatiment} />
  
)}
{categories === "date" && (
  <RecherheDate setDataDate={setDataDate} />
  
)}
{categories === "user" && (
  <RechercheAuser setDataUser={setDataUser} />
  
)}
{categories === "materiel" && (
  <RechercheAmateriel setDataMateriel={setDataMateriel} />
  
)}
{categories === "departement" && (
  <RechercheAdepartement setDataDepartement={setDataDepartement} />
  
)}
            <DataTable>
                <DataTable.Header style={styles.header}>
                    <DataTable.Title>location</DataTable.Title>
                    <DataTable.Title >date</DataTable.Title>
                    <DataTable.Title >departement</DataTable.Title>
                    <DataTable.Title >batiment</DataTable.Title>
                    <DataTable.Title >etage</DataTable.Title>
                    <DataTable.Title >user</DataTable.Title>
                    <DataTable.Title >materiel</DataTable.Title>
                   
                    
                </DataTable.Header>

                {data.map((item, index) => (
                  <TouchableOpacity key={index} onPress={() => handleCellPress(item)}>
       <DataTable.Row style={styles.Row} key={index}>
              <DataTable.Cell >{item.localisation}</DataTable.Cell>
            <DataTable.Cell>{item.date}</DataTable.Cell>
            <DataTable.Cell>{item.departement}</DataTable.Cell>
            <DataTable.Cell>{item.batiment}</DataTable.Cell>
            <DataTable.Cell>{item.etage}</DataTable.Cell>
            <DataTable.Cell>{item.user}</DataTable.Cell>
            <DataTable.Cell>{item.materiel}</DataTable.Cell>
          </DataTable.Row> 
          </TouchableOpacity>
        ))}

                
            </DataTable>
        </View>
    );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      
    },
    header: {
      backgroundColor: '#424242', 
    },
    Row:{
  
      backgroundColor:"white",
    },
    Row1:{
      paddingRight:50,
    },
    button: {
     backgroundColor: 'white',
     borderRadius: 5,
     padding: 10,
    
     width: "100%",
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
   drop:{
    
    width: "70%",
    alignItems: 'center',
  marginLeft:35
   },bar:{
    flexDirection:'row',
    width:"100%"
   },
   Stitre:{
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    marginLeft: 10
  }
  });
  

export default RtableA;
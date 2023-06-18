import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { View, StyleSheet, ActivityIndicator, Text,TouchableOpacity } from 'react-native';
import  { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, DataTable } from 'react-native-paper';
import { BASE_url } from "../URL";
import RecherheUname from './rechercheUname';
import RecherheUdepartement from './rechercheUdepartement';
function RtableU() {
  const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [dataN, setDataN] = useState([]);
    const [dataD, setDataD] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState("")
       useEffect(() => {
      fetchTableData();
    }, []);
    useEffect(() => {
      if (categories === "name") {
        setData(dataN);
      }
    }, [dataN]);
    useEffect(() => {
      if (categories === "departement") {
        setData(dataD);
      }
    }, [dataD]);
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
      
      console.log('Cell pressed:', item.name);
      navigation.navigate('Modifiation-user', { id_user: item.id_user });
    };
    
    
    return (
        <View style={styles.container}>
            <View  style={styles.bar}>
            <Text  style={styles.Stitre}>recherhe avec :</Text>
          <View  style={styles.drop}>
           <SelectDropdown
data={["name","departement"]}
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
{categories === "name" && (
  <RecherheUname setDataN={setDataN} />
  
)}
{categories === "departement" && (
  <RecherheUdepartement setDataD={setDataD} />
  
)}
            <DataTable>
                <DataTable.Header style={styles.header}>
                    <DataTable.Title>name</DataTable.Title>
                    <DataTable.Title >departement</DataTable.Title>
                   
                    
                </DataTable.Header>

                {data.map((item, index) => (
                   <TouchableOpacity key={index} onPress={() => handleCellPress(item)}>
       <DataTable.Row style={styles.Row} key={index}>
     
              <DataTable.Cell >{item.name}</DataTable.Cell>
          
            <DataTable.Cell>{item.departement}</DataTable.Cell>
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
   
 },drop:{
  
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

export default RtableU;
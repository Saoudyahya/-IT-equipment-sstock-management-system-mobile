import React from 'react';
import RecherheS from './rechercheSer';
import RecherheMo from './rechercheModle';
import RecherheMa from './rechercheMark';
import RecherheCode from './rechercheCode_2m';
import RecherheTy from './rechercheType';
import { View, StyleSheet, ActivityIndicator, Text,TouchableOpacity } from 'react-native';
import  { useEffect, useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { Button, DataTable } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { BASE_url } from '../URL';
function RtableM() {
  const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [dataS, setDataS] = useState([]);
    const [dataMo, setDataMO] = useState([]);
    const [dataMa, setDataMA] = useState([]);
    const [dataTy, setDataTy] = useState([]);
    const [dataCode_2m, setDataCode_2m] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState("")
       useEffect(() => {
      fetchTableData();
    }, []);
    useEffect(() => {
      if (categories === "ser") {
        setData(dataS);
      }
    }, [dataS]);
    useEffect(() => {
      if (categories === "mark") {
        setData(dataMa);
      }
    }, [dataMa]);
    useEffect(() => {
      if (categories === "model") {
        setData(dataMo);
      }
    }, [dataS]);
    useEffect(() => {
      if (categories === "type") {
        setData(dataTy);
      }
    }, [dataTy]);
    useEffect(() => {
      if (categories === "code_2m") {
        setData(dataCode_2m);
      }
    }, [dataCode_2m]);
    const fetchTableData = async () => {
      try {
        const response = await fetch(`${BASE_url}/api/affichageMATERIEL`,{
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
      
      console.log('Cell pressed:', item.ser);
      navigation.navigate('Modifiation-materiel', { id: item.ser });
    };
    
  
    return (
        <View style={styles.container}>
          <View  style={styles.bar}>
            <Text  style={styles.Stitre}>recherche avec :</Text>
          <View  style={styles.drop}>
           <SelectDropdown
data={["ser","type","mark","model","code_2m"]}
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
{categories === "ser" && (
  <RecherheS setDataS={setDataS} />
  
)}

{categories === "model" && (
  <RecherheMo setDataMO={setDataMO} />
)}

{categories === "mark" && (
  <RecherheMa setDataMA={setDataMA} />
)}

{categories === "code_2m" && (
  <RecherheCode setDataCode_2m={setDataCode_2m} />
)}

{categories === "type" && (
  <RecherheTy setDataTY={setDataTy} />
)}
            <DataTable>
                <DataTable.Header style={styles.header}>
                    <DataTable.Title>ser</DataTable.Title>
                    <DataTable.Title >type</DataTable.Title>
                    <DataTable.Title >mark</DataTable.Title>
                    <DataTable.Title >model</DataTable.Title>
                    <DataTable.Title >code_2m</DataTable.Title>
                    
                </DataTable.Header>

                {data.map((item, index) => (
                  <TouchableOpacity key={index} onPress={() => handleCellPress(item)}>
       <DataTable.Row style={styles.Row} key={index}>
          
              <DataTable.Cell >{item.ser}</DataTable.Cell>
           
            <DataTable.Cell>{item.type}</DataTable.Cell>
            <DataTable.Cell>{item.mark}</DataTable.Cell>
            <DataTable.Cell>{item.model}</DataTable.Cell>
            <DataTable.Cell>{item.code_2m}</DataTable.Cell>
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

export default RtableM;
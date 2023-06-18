import React from 'react';
import { View, StyleSheet, ActivityIndicator, Text,TouchableOpacity } from 'react-native';
import  { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, DataTable } from 'react-native-paper';
import { BASE_url } from "../URL";
import RecherheDdepartement from './rechercheDdepartement';
function RtableD() {
  const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [dataD, setDataD] = useState([]);
    const [loading, setLoading] = useState(true);
       useEffect(() => {
      fetchTableData();
    }, []);
    useEffect(() => {
      setData(dataD);
    }, [dataD]);
    const fetchTableData = async () => {
      try {
        const response = await fetch(`${BASE_url}/api/affichageDEPARTEMENT`,{
            method: 'POST'  });
       
        console.log(`${BASE_url}/api/affichageDEPARTEMENT`);
      
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
      navigation.navigate('Modification-departement', { name: item.name });
    };
    
    
    return (
        <View style={styles.container}>
     
     <RecherheDdepartement setDataD={setDataD}></RecherheDdepartement>
            <DataTable>
                <DataTable.Header style={styles.header}>
                    <DataTable.Title>name</DataTable.Title>
                </DataTable.Header>

                {data.map((item, index) => (
                          <TouchableOpacity key={index} onPress={() => handleCellPress(item)}>
       <DataTable.Row style={styles.Row} key={index}>
     
              <DataTable.Cell >{item.name}</DataTable.Cell>
          

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
  }
});

export default RtableD;
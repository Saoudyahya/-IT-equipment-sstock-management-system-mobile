import React from 'react';

import { View, StyleSheet, ActivityIndicator, Text,TouchableOpacity } from 'react-native';
import  { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, DataTable } from 'react-native-paper';
import { BASE_url } from "../URL";
function TableU() {
  const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
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
            <DataTable>
                <DataTable.Header style={styles.header}>
                    <DataTable.Title>name</DataTable.Title>
                    <DataTable.Title >departement</DataTable.Title>
                   
                    
                </DataTable.Header>

                {data.map((item, index) => (
                   <TouchableOpacity  key={index} onPress={() => handleCellPress(item)}>
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
  }
});

export default TableU;
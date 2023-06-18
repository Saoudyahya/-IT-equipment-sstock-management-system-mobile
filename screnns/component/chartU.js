import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { PieChart } from 'react-native-chart-kit';
import { BASE_url } from "../URL";

const ChartU = () => {
  const [allmateriel, setAllmateriel] = useState([1]);
  const [notIn, setUnotIn] = useState(1);
  const [allUser, setUsers] = useState(1);
  const [alldepartement, setdepartement] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTableData();
    fetchTableDataNotin();
    fetchTableDatadepartement();
 
    }, []);

 
  const fetchTableData = async () => {
    try {
      const response = await fetch(`${BASE_url}/api/statisticUser`, {
        method: 'POST'
      });
      const jsonData = await response.json();
      setUsers(jsonData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
 
  const fetchTableDataNotin = async () => {
    try {
      const response = await fetch(`${BASE_url}/api/statisticUser-inaffectation`, {
        method: 'POST'
      });
      const jsonData = await response.json();
      setUnotIn(jsonData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchTableDatadepartement = async () => {
    try {
      const response = await fetch(`${BASE_url}/api/statisticUser-departement`, {
        method: 'POST'
      });
      const jsonData = await response.json();
      setdepartement(jsonData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const chartData = [
    {
      name: 'affected',
      population:  allUser-notIn,
      color: '#2E86C1',
      legendFontColor: 'black',
      legendFontSize: 15,
    },
    {
      name: 'not affected',
      population: notIn,
      color: '#FF7F50',
      legendFontColor: 'black',
      legendFontSize: 15,
      
    },
  ];

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (allmateriel.length === 0 && MnotIn.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No data available</Text>
      </View>
    );
  }
  const all = [...new Set(alldepartement.map(item => item.departement))];
  console.log(all);
  return (
    <View>
    <View style={styles.container}>
      <PieChart
        data={chartData}
        width={400}
        height={200}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
      
    </View>
    <View style={styles.container1}>
    <Text style={styles.Text}>nombre total de utilisateur :{allUser}</Text>
    <Text style={styles.Text}>percentage de utilisateur affecte :{((allUser-notIn) * 100 / allUser).toFixed(2)} % </Text>
    <Text style={styles.Text}>percentage de Materiel non affecte :{( notIn * 100 / allUser).toFixed(2)} % </Text>
    <Text style={styles.Text}>nombre total de departement : {all.length}</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 40,
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  Text:{
   fontSize: 17,
   fontWeight: 'bold',
   margin:15,

  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default ChartU;
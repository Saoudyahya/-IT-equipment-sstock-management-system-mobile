import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { PieChart } from 'react-native-chart-kit';
import { BASE_url } from "../URL";

const ChartD = () => {
  const [notIn, setDnotIn] = useState(1);
  const [alldepartement, setdepartement] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTableData();
    fetchTableDataNotin();
    }, []);

 
  const fetchTableData = async () => {
    try {
      const response = await fetch(`${BASE_url}/api/statisticDepartement`, {
        method: 'POST'
      });
      const jsonData = await response.json();
      setdepartement(jsonData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
 
  const fetchTableDataNotin = async () => {
    try {
      const response = await fetch(`${BASE_url}/api/statisticDepartement-inaffectation`, {
        method: 'POST'
      });
      const jsonData = await response.json();
      setDnotIn(jsonData);
      setLoading(false);
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
  
    if (alldepartement.length === 0) {
      return (
        <View style={styles.container}>
          <Text>No data available</Text>
        </View>
      );
  };
  

  

  }
  const chartData = [
    {
      name: 'affected',
      population:  alldepartement-notIn,
      color: '#79D800',
      legendFontColor: 'black',
      legendFontSize: 15,
    },
    {
      name: 'not affected',
      population: notIn,
      color: '#2E86C1',
      legendFontColor: 'black',
      legendFontSize: 15,
      
    },
  ];
  
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
    <Text style={styles.Text}>nombre total de departement :{alldepartement}</Text>
    <Text style={styles.Text}>percentage de departement affecte :{((alldepartement-notIn) * 100 / alldepartement).toFixed(2)} % </Text>
    <Text style={styles.Text}>percentage de departement non affecte :{( notIn * 100 / alldepartement).toFixed(2)} % </Text>

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
   fontSize: 16,
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

export default ChartD;
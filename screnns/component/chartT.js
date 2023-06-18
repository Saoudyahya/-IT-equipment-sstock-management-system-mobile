import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { PieChart } from 'react-native-chart-kit';
import { BASE_url } from "../URL";

const ChartT = () => {
  const [notIn, setTnotIn] = useState(1);
  const [alltypes, setallTypes] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTableData();
    fetchTableDataNotin();
    }, []);

 
  const fetchTableData = async () => {
    try {
      const response = await fetch(`${BASE_url}/api/statisticTYPES`, {
        method: 'POST'
      });
      const jsonData = await response.json();
      setallTypes(jsonData);
      console.log(alltypes);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
 
  const fetchTableDataNotin = async () => {
    try {
      const response = await fetch(`${BASE_url}/api/statisticTYPES-inmateriel`, {
        method: 'POST'
      });
      const jsonData = await response.json();
      setTnotIn(jsonData);
      setLoading(false);
      console.log(notIn);
    } catch (error) {
      console.error(error);
    }
  };
  

  const chartData = [
    {
      name: 'affected',
      population:  alltypes-notIn,
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

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (alltypes.length === 0 ) {
    return (
      <View style={styles.container}>
        <Text>No data available</Text>
      </View>
    );
  }

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
    <Text style={styles.Text}>nombre total de types :{alltypes}</Text>
    <Text style={styles.Text}>percentage des types affecte a un materiel :{((alltypes-notIn) * 100 / alltypes).toFixed(2)} % </Text>
    <Text style={styles.Text}>percentage des types non affecte a un materiel :{( notIn * 100 / alltypes).toFixed(2)} % </Text>

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
   fontSize: 14,
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

export default ChartT;
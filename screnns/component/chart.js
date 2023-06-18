import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { PieChart } from 'react-native-chart-kit';
import { BASE_url } from "../URL";

const Chart = () => {
  const [allmateriel, setAllmateriel] = useState([1]);
  const [MnotIn, setMnotIn] = useState([1]);
  const [alltypes, setallTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTableData();
    fetchTableDataNotin();
    fetchTableDataTypes();
    }, []);
    const affected=allmateriel[0]-MnotIn[0]
 
  const fetchTableData = async () => {
    try {
      const response = await fetch(`${BASE_url}/api/statisticMATERIEL`, {
        method: 'POST'
      });
      const jsonData = await response.json();
      setAllmateriel(jsonData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchTableDataTypes = async () => {
    try {
      const response = await fetch(`${BASE_url}/api/statisticMATERIEL-types`, {
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
      const response = await fetch(`${BASE_url}/api/statisticMATERIEL-inaffectation`, {
        method: 'POST'
      });
      const jsonData = await response.json();
      setMnotIn(jsonData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const chartData = [
    {
      name: 'affected',
      population: affected,
      color: '#FF7F00',
      legendFontColor: 'black',
      legendFontSize: 15,
    },
    {
      name: 'not affected',
      population: MnotIn[0],
      color: '#FFFF00',
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
  const all = [...new Set(alltypes.map(item => item.Type))];
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
    <Text style={styles.Text}>nombre total de Materiel :{allmateriel[0]}</Text>
    <Text style={styles.Text}>percentage de Materiel affecte :{(affected * 100 / allmateriel[0]).toFixed(2)} % </Text>
    <Text style={styles.Text}>percentage de Materiel non affecte :{(MnotIn[0] * 100 / allmateriel[0]).toFixed(2)} % </Text>
    <Text style={styles.Text}>nombre total de types :{all.length}</Text>
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

export default Chart;
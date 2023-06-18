import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { PieChart } from 'react-native-chart-kit';
import { BASE_url } from "../URL";

const ChartA = () => {
  const [allAffectation, setallAffectation] = useState([]);
  const [alllocalisation, setalllocalisation] = useState([]);
  const [allBatiment, setallBatiment] = useState([]);
  const [allDate, setALLdate] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTableData();
    fetchTableDatalocalisation();
    fetchTableDatabatiment();
    fetchTableDatadate();
    }, []);

 
  const fetchTableData = async () => {
    try {
      const response = await fetch(`${BASE_url}/api/statisticAFFECTATION`, {
        method: 'POST'
      });
      const jsonData = await response.json();
      setallAffectation(jsonData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  
 
  const fetchTableDatalocalisation = async () => {
    try {
      const response = await fetch(`${BASE_url}/api/statisticAFFECTATION-localisation`, {
        method: 'POST'
      });
      const jsonData = await response.json();
      setalllocalisation(jsonData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchTableDatabatiment = async () => {
    try {
      const response = await fetch(`${BASE_url}/api/statisticAFFECTATION-batiment`, {
        method: 'POST'
      });
      const jsonData = await response.json();
      setallBatiment(jsonData);
      setLoading(false);
      console.log(allBatiment);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchTableDatadate = async () => {
    try {
      const response = await fetch(`${BASE_url}/api/statisticAFFECTATION-date`, {
        method: 'POST'
      });
      const jsonData = await response.json();
      setALLdate(jsonData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
 
  const allL = [...new Set(alllocalisation.map(item => item.localisation))];
 
  const allB = [...new Set(allBatiment.map(item => item.batiment))];
 
  const allD = [...new Set(allDate.map(item => item.date))];
  
  const chartData = [
    {
      name: 'loalisation',
      population:  allL.length,
      color: '#2E86C1',
      legendFontColor: 'black',
      legendFontSize: 15,
    },
    {
      name: 'batiment',
      population: allB.length,
      color: '#FF7F50',
      legendFontColor: 'black',
      legendFontSize: 15,
      
    },
    {
      name: 'date',
      population: allD.length,
      color: '#34495E',
      legendFontColor: 'black',
      legendFontSize: 15,
      
    },
  ];

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={80}  />
      </View>
    );
  }

  if (allAffectation.length === 0 && allAffectation.length === 0) {
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
    <Text style={styles.Text}>nombre total de affectation :{allAffectation}</Text>
    <Text style={styles.Text}>percentage d'affectation en meme date :{((allAffectation- allD.length)^2)*100/allAffectation}%</Text>
    <Text style={styles.Text}>percentage d'affectation en meme batiment :{((allAffectation- allB.length)*2)*100/allAffectation}%</Text>
    <Text style={styles.Text}>percentage d'affectation en meme localisation :{((allAffectation- allL.length)*2)*100/allAffectation}%</Text>
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
   fontSize: 15,
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

export default ChartA;
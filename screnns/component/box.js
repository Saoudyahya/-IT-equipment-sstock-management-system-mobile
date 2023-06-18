import React, { useState } from 'react';
import { View, TextInput, Button,StyleSheet,TouchableOpacity,Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const Box = (props) => {
  const navigation = useNavigation();
  
  return (
    <View  style={styles.all}>
        <View style={styles.part}>
    <TouchableOpacity style={styles.container}  onPress={() => navigation.navigate("Insertion-"+props.title)}>
    <View >
    <Text  style={styles.textbox}>Insertion</Text>
        <Icon name="pencil" size={95}></Icon>
       
    </View>

    </TouchableOpacity>
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Recherche-"+props.title)} >
    <View >
       <Text  style={styles.textbox}>Recherche</Text>
       <Icon name="edit" size={95} ></Icon>
    </View>
    </TouchableOpacity>
    </View>
    <View style={styles.part}>
    <TouchableOpacity style={styles.container} onPress={() =>  navigation.navigate("Affichage-"+props.title)} >
    <View >
       <Text style={styles.textbox}>affichage</Text>
       <Icon name="list-ol" size={95}></Icon>
    </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.container}  onPress={() => navigation.navigate("Statistic-"+props.title)}>
    <View >

       <Text  style={styles.textbox}>statistic</Text>
       <Icon name="bar-chart-o" size={95}></Icon>
    </View>
    </TouchableOpacity>
    </View>

    
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 0,
      backgroundColor: "white",
      borderColor: "black",
      borderWidth:2,
      alignItems: "center",
      justifyContent: "center",
      alignContent: "center",
      width:"80%",
      height:"30%",
      margin:50,
      marginLeft:35,
   borderRadius:10,
    },
    
    all:{
        flexDirection:"row",
    width:"100%",
    },
    part:{
        flexDirection:"column",
    },
    textbox: {
        fontWeight: "bold",
      fontSize:15,
      paddingBottom:10
        },  
    

  
})
export default Box;
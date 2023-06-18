import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ImageBackground,
  TouchableOpacity,
  Heading,
  ScrollView,
  
  
} from "react-native";

import { useNavigation } from '@react-navigation/native';
const Topbar=(props)=>{
  const navigation = useNavigation();
    return  <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} persistentScrollbar>
    <TouchableOpacity  style={styles.Button}><Text   style={this.jewelStyle(props.Materiel)} onPress={() => navigation.navigate('main')}>Materiel</Text></TouchableOpacity>
    <TouchableOpacity style={styles.Button}><Text style={this.jewelStyle(props.user)} onPress={() => navigation.navigate('User')}>user</Text></TouchableOpacity>
    <TouchableOpacity  style={styles.Button}><Text style={this.jewelStyle(props.departement)} onPress={() => navigation.navigate('departement')}>departement</Text></TouchableOpacity>
    <TouchableOpacity style={styles.Button}><Text style={this.jewelStyle(props.types)} onPress={() => navigation.navigate('types')}>types</Text></TouchableOpacity>
    <TouchableOpacity style={styles.Button}><Text style={this.jewelStyle(props.affectation)} onPress={() => navigation.navigate('affectation')}>affectation</Text></TouchableOpacity>
    </ScrollView>
 
}
jewelStyle = function(color) {
    if(color=="active"){
    return {
        color:"white",
        fontSize:15,
        fontWeight:"bold",
        backgroundColor:"orange",
        borderRadius: 10,
      paddingTop: 8,
        width: 120,
        height: 40, 
        textAlign: 'center',
    }
}else{
    return{
        color:"grey",
        fontSize:15,
        fontWeight:"bold",
        backgroundColor:"white",
        borderColor: "black",
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 6,
          width: 120,
        height: 40,
        alignContent:"center",
        textAlign: 'center',
    }

    }
  }
const styles = StyleSheet.create({
    container1: {
   height : '100%',
     
    },  container: {
      flexDirection: 'row',
     marginTop : 40,
    
    },
    box:{},
    Button:{
      width: 120,
      height:40,
      color:"gray",
      fontSize:15,
      
    },
  
 
  
    


    

   
  });
export  default Topbar;
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { BASE_url } from "./URL";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator
} from "react-native";
function Login({navigation}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false)
    const handleSubmit = () => {
      setLoading(true);
  
      fetch(`${BASE_url}/api/signIn`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password
        }),
      })
        .then(response => response.json())
        .then(data => {
          setLoading(false);
          if (data.success) {
            navigation.navigate("main");
          } else {
            navigation.navigate("Login");
          }
        })
        .catch(error => {
          console.error("API error:", error);
          setLoading(false);
        });
    };
  
   
    
    
    return (
      <View style={styles.container}>
         <ImageBackground source={require('../assets/img/back.png')} resizeMode="cover" style={styles.image2}></ImageBackground>
  
           <Image  style={styles.image} source={require("../assets/img/1.png")}></Image>
        <StatusBar style="auto" />
        <View style={styles.inputView}>
         <TextInput
            style={styles.TextInput}
            placeholder="username"
            placeholderTextColor="#003f5c"
            onChangeText={(username) => setUsername(username)}
          /> 
        </View> 
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          /> 
        </View>        
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text> 
        </TouchableOpacity> 
        <View style={styles.loginBtn}>
      
          <TouchableOpacity    onPress={handleSubmit}><Text style={styles.loginText}>welcome</Text></TouchableOpacity>
        </View>
       
      </View> 
        
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      justifyContent: "center",
   
    },
    image: {
      marginBottom: 40,
      width : 300,
      height: 170,
  
    
    },
    image2: {
      
      opacity: 0.4,
      width : 900,
      height:  '100%',
      flex: 1,
     position: 'absolute',
    
  
    },
    inputView: {
      backgroundColor: "grey",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    loginBtn: {
      width: "70%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      backgroundColor: "#DE7421",
    },
    Text:{
      color: "red",
      fontSize: 16,
      marginTop: 25,
    },
    loginText:{
      color: "black",
      fontSize: 20,
      

         }
  });
export default Login;
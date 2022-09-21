//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core'
import { auth } from './firebaseConfig';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// create a component
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }
 
    return (
        <SafeAreaView>
           <Text style={{fontWeight: "300", fontSize: 34, marginBottom:-150, marginTop: 50,  textAlignVertical: "center",textAlign: "center"}}>Welcome {"\n"} to the {"\n"} LAB SAFETY APP</Text>
            
            <View style = {styles.form}>
            <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text=> setEmail(text)}
        
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text=> setPassword(text)}
      />
      <Text style={{fontWeight:"300", fontSize:15, textAlignVertical: "center",textAlign: "center"}}>
        Don' have an account? Click Sign Up below
      </Text>
      <TouchableOpacity
       
        style={{margin:10}}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={{fontWeight:"500", fontSize:15,textAlignVertical: "center",textAlign: "center"}}>Sign Up</Text>
      
      </TouchableOpacity>

            </View>
      
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style = {{color:"white"}}>Login</Text>
      
      </TouchableOpacity>
      <Image source={require('../assets/chemicals.jpg')}
          style={{marginBottom: 50, marginTop:50, marginLeft:50, height: 200,width:300}}/>
    </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    input:{
        height: 40,
        margin: 12,
       
        borderBottomWidth:1,
        padding: 10,
        

    },
    button:{
        alignItems: "center",
        backgroundColor: "#64dd17",
        padding: 10,
        margin:10,
        borderRadius:10,
    },
    form:{
        margin:16,
        paddingTop: windowHeight/5

    },
});

//make this component available to the app
export default Login;

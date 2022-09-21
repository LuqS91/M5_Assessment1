//import liraries
import React, { useState, useEffect } from 'react';
import { View, Dimensions, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core'
import { auth } from './firebaseConfig';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// create a component
const Register = () => {
  const [name, setName] = useState('')
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

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontWeight: "100", fontSize: 34, marginBottom:-20, marginTop: 20,  textAlignVertical: "center",textAlign: "center"}}>Sign Up {'\n'} to {'\n'} continue</Text>
            <View style = {styles.form}>
            <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text=> setName(text)}
       
      />
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
            </View>
      
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignUp}
      >
        <Text style = {{color:"white"}}>Sign Up</Text>
      
      </TouchableOpacity>
      <Image source={require('../assets/chemicals.jpg')}
          style={{marginBottom: 50, marginTop:30, marginLeft:50, height: 200,width:300}}/>
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
     // borderWidth: 1,
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
      paddingTop: windowHeight/50

  },

});

//make this component available to the app

export default Register;


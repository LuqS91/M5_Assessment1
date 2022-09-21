import React from 'react';
import { Button, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';

const Methanol = () => {

  return (
    <SafeAreaView>
    <ScrollView style={styles.scrollView}>   
        <Image 
        source={require('../assets/methanol/1.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/methanol/2.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/methanol/3.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/methanol/4.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/methanol/5.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/methanol/6.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/methanol/7.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/methanol/8.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/methanol/9.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/methanol/10.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/methanol/11.jpg')}
        style={{height:630, width:400}}>
        </Image>
      </ScrollView>
    </SafeAreaView>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
    scrollView: {
      backgroundColor: 'white',
     
    },
    text: {
      fontSize: 42,
    },
    
  });
  
  export default Methanol;

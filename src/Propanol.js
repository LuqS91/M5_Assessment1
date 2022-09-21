import React, { useState } from 'react';
import { Button, StyleSheet, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';

const Propanol = () => {
  return (
    <SafeAreaView>
    <ScrollView style={styles.scrollView}>   
        <Image 
        source={require('../assets/propanol/1.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/propanol/2.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/propanol/3.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/propanol/4.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/propanol/5.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/propanol/6.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/propanol/7.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/propanol/8.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/propanol/9.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/propanol/10.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/propanol/11.jpg')}
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
  export default Propanol;

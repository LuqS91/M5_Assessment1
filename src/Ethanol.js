import React, { useState } from 'react';
import { Button, StyleSheet, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';

const Ethanol = () => {

  return (
    <SafeAreaView>
    <ScrollView style={styles.scrollView}>   
        <Image 
        source={require('../assets/ethanol/1.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/ethanol/2.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/ethanol/3.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/ethanol/4.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/ethanol/5.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/ethanol/6.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/ethanol/7.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/ethanol/8.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/ethanol/9.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/ethanol/10.jpg')}
        style={{height:630, width:400}}>
        </Image>
        <Image 
        source={require('../assets/ethanol/11.jpg')}
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
  export default Ethanol;
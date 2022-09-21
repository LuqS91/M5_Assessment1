//import liraries
import React, { useState, Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import { WebView } from 'react-native-webview';

// create a component
const PropanolWebsite = () => {
      return (
        <WebView 
      style={styles.container}
      source={{ uri: 'https://www.sigmaaldrich.com/ZA/en/search/1-propanol?focus=products&page=1&perpage=30&sort=relevance&term=1-propanol&type=product' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
        

//make this component available to the app
export default PropanolWebsite;
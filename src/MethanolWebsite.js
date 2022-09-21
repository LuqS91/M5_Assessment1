//import liraries
import React from 'react';
import Constants from 'expo-constants';
import { WebView } from 'react-native-webview';
import { Button, Text, View, StyleSheet } from 'react-native';

// create a component
const MethanolWebsite = () => {
      return (
        <WebView 
      style={styles.container}
      source={{ uri: 'https://www.sigmaaldrich.com/ZA/en/search/methanol?focus=products&page=1&perpage=30&sort=relevance&term=methanol&type=product' }}
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
export default MethanolWebsite;

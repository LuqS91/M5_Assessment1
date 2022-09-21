//import liraries
import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { WebView } from 'react-native-webview';

// create a component
const EthanolWebsite = () => {
      return (
        <WebView 
      style={styles.container}
      source={{ uri: 'https://www.sigmaaldrich.com/ZA/en/search/ethanol?focus=products&page=1&perpage=30&sort=relevance&term=ethanol&type=product' }}
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
export default EthanolWebsite;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Register from './src/Register';
import Ethanol from './src/Ethanol';
import Methanol from './src/Methanol';
import Propanol from './src/Propanol';
import EthanolWebsite from './src/EthanolWebsite';
import MethanolWebsite from './src/MethanolWebsite';
import PropanolWebsite from './src/PropanolWebsite';
import YourLocation from './src/YourLocation';
import * as firebase from 'firebase'
import firebaseConfig from './src/firebaseConfig';
import Inventory from './src/Inventory';
import AddInventory from './src/AddInventory';

const Stack = createNativeStackNavigator();

export default function App() {
  if (!firebase.apps.length){
    console.log('Connected with Firebase')
    firebase.initializeApp(firebaseConfig)
  } 
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{title:"Sign Up"}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Ethanol" component={Ethanol} options={{title:"Ethanol"}}/>
        <Stack.Screen name="Methanol" component={Methanol} options={{title:"Methanol"}}/>
        <Stack.Screen name="Propanol" component={Propanol} options={{title:"Propanol"}}/>
        <Stack.Screen name="EthanolWebsite" component={EthanolWebsite} options={{title:"Purchase Chemical"}}/>
        <Stack.Screen name="MethanolWebsite" component={MethanolWebsite} options={{title:"Purchase Chemical"}}/>
        <Stack.Screen name="PropanolWebsite" component={PropanolWebsite} options={{title:"Purchase Chemical"}}/>
        <Stack.Screen name="YourLocation" component={YourLocation} options={{title:"Location"}}/>
        <Stack.Screen name="Inventory" component={Inventory} options={{title:"Inventory"}}/>
        <Stack.Screen name="AddInventory" component={AddInventory} options={{title:"Add to Inventory"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

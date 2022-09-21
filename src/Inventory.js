//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList,KeyboardAvoidingView, Button,  TextInput, TouchableOpacity, Keyboard, Dimensions, ScrollView } from 'react-native';
import { db } from './firebaseConfig';
import { useNavigation } from '@react-navigation/core'




// create a component
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Inventory = () => {
  const navigation = useNavigation()
const [inventorys, setInventorys] = useState([])

const ref = db.collection("Inventory")

useEffect(() => {
    ref.onSnapshot({
      next: querySnapshot => {
        const inventorys = querySnapshot.docs.map(docSnapshot => ({
          id: docSnapshot.id,
          Chemical: docSnapshot.data().Chemical,
          Date: docSnapshot.data().Date,
          Volume: docSnapshot.data().Volume,
        }))
        setInventorys(inventorys)
      },
      error: (error) => console.log(error)
    })
}, [setInventorys])

    return (
      <ScrollView>
        <View style = {{borderBottomWidth: 5}}>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AddInventory")}
     >
       <Text style={{fontWeight:"500", fontSize:15,textAlignVertical: "center",textAlign: "center", color: "white"}}>Add to Inventory</Text>
     
     </TouchableOpacity>
     </View>
        {
        inventorys?.map(inventory => <View key={inventory.id}>
        <Text style ={{fontSize: 20, marginLeft: 15, marginTop:15}}> Date: {inventory.Date}</Text>
        <Text style ={{fontSize: 20, marginLeft: 15}}> Chemical: {inventory.Chemical}</Text>
        <Text style ={{marginBottom:5, fontSize: 20, marginLeft: 15,}}> Volume: {inventory.Volume}</Text>
        <TouchableOpacity
        style={{backgroundColor: "#64dd17", width: 100, marginLeft: 140, marginTop:15, borderRadius:10}}
        onPress={() => {
          ref.doc(inventory.id)
          .delete()
        }}
     >
       <Text style={{fontWeight:"500", fontSize:15,textAlignVertical: "center",textAlign: "center", color: "white"}}>Delete</Text>
     
     </TouchableOpacity>
     <View style = {{borderBottomWidth: 2, marginTop:10}}></View>
        
      </View>)
    }
   
    
    </ScrollView>
    
    
    );

      }


// define your styles
const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  button:{
    
    backgroundColor: "#64dd17",
    padding: 10,
    marginLeft: 100,
    marginTop: 20,
    marginBottom: 20,
    borderRadius:10,
    width: 200,
    justifyContent: "center",
    
    
    
    
  }

  
  });


//make this component available to the app
export default Inventory;

import { View, Text, StyleSheet, TextInput, SafeAreaView, Dimensions, TouchableOpacity, FlatList} from 'react-native';
import React, { useState } from 'react';
import { db } from './firebaseConfig'
import { Formik } from 'formik'
import { useNavigation } from '@react-navigation/core'


//import firestore from '@firebase/firestore';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// create a component
const AddInventory = () => {
  const navigation = useNavigation()
  const [inventorys, setInventorys] = useState([])
    

return (
        

<View>
      <FlatList
      data ={inventorys}
      renderItem = {({ item }) => (
        <View style={{height:50, flex:1, alignItems: "center", justifyContent:"center"}}>
          <Text>Chemical: {item.Chemical}</Text>
          <Text>Date: {item.Date}</Text>
          <Text>Volume: {item.Volume}</Text>
        </View>
      )}
      > 
      </FlatList>

        <Formik
      initialValues={{
        Chemical: "",
        Date: "",
        Volume: ""
      }}
      onSubmit={(values) => {
        db.collection("Inventory").add({
          Chemical: values.Chemical,
          Date: values.Date,
          Volume: values.Volume
        }).then(() => navigation.navigate("Inventory"))
      }}

      >
        {({
          values,
          handleChange,
          errors,
          handleSubmit
        }) => (
          <SafeAreaView style={styles.container}>

            <View style = {styles.form}>
            <TextInput
        style={styles.input1}
        placeholder="Chemical"
        onChangeText={handleChange("Chemical")}
        value={values.Chemical}
      />
      {errors["Chemical"]? <Text>{errors['Chemical']}</Text> : null}
            <TextInput
        style={styles.input}
        placeholder="Date"
        onChangeText={handleChange("Date")}
        value={values.Date}
      />
      {errors["Date"]? <Text>{errors['Date']}</Text> : null}
      <TextInput
        style={styles.input2}
        placeholder="Volume"
        onChangeText={handleChange("Volume")}
        value={values.Volume}
      />
      {errors["Volume"]? <Text>{errors['Volume']}</Text> : null}
            </View>
            
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSubmit()}
        
      >
        <Text style = {{color:"white"}}> Add to Inventory</Text>
      
      </TouchableOpacity>
    </SafeAreaView>

        )
        
        }

      </Formik>
     
   

    </View>
    
    );

      }

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
        marginTop: 20
        
  
    },
    input1:{
      height: 40,
      margin: 12,
     // borderWidth: 1,
      borderBottomWidth:1,
      padding: 10,
      marginTop: 5
      

  },
    input2:{
      height: 40,
      margin: 12,
     // borderWidth: 1,
      borderBottomWidth:1,
      padding: 10,
      marginTop: 20
      

  },
    button:{
        alignItems: "center",
        backgroundColor: "#64dd17",
        padding: 10,
        margin:10,
        borderRadius:10,
        marginTop: 200,
        height: 40
        
  
    },
    form:{
        margin:16,
        paddingTop: windowHeight/50
  
    },
  
  });



//make this component available to the app
export default AddInventory;

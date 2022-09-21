//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList, Image,  TouchableOpacity, Dimensions } from 'react-native';
import chemicalData from './Chemicals';
import { useNavigation } from '@react-navigation/core'
import { auth } from './firebaseConfig';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// create a component
const Home = () => {
    const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }
    return (
        <View>
        <View>
            <View style={{ marginBottom: 1, alignContent: "center"}}> 
            
            <Text style={{fontWeight: "300", fontSize: 34, marginBottom:10, marginTop: 40,  textAlignVertical: "center",textAlign: "center", color: "black", marginLeft: 20}}
            >Chemicals
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Inventory")} style={{ height:40, width: 140, backgroundColor:"black", borderRadius:10, marginLeft: 140, marginTop: 0}}>
                             <Text style={{color: "white", textAlign: "center", marginTop:10, fontSize:15}}> Inventory</Text>
                             </TouchableOpacity>
            <TouchableOpacity onPress={handleSignOut} style={{ marginBottom:10, marginTop: 0, height:40, width: 40, backgroundColor: "black", borderRadius:10, marginLeft:20}}>
            <Text style={{color: "white", textAlign: "center"}}>Sign {"\n"}Out</Text>
            </TouchableOpacity> 
            
            </View>
            <FlatList 
                 data={chemicalData}
                 contentInset={{padding: 12}}
                 renderItem={({item}) =>{
                    return(
                            <View style={{backgroundColor: "white", borderBottomWidth: 1, borderBottomColor: "black", marginTop: -10}}>
                            <Text style={styles.name}>
                                {item.name}
                            </Text>
                            <Text style={styles.mass}>
                                Mass: {item.mass}
                            </Text>
                            <Text style={styles.density}>
                                Density: {item.density}
                            </Text>
                             <Image style={{
                                  height:170, width: 150,position: "absolute" ,right:0, margin:0,bottom:0, top:0, resizeMode:"center"
                             }} source={item.image}>
                             </Image>
                             <View style={{flexDirection: "row", marginBottom: 1}}>
                             <TouchableOpacity onPress={() => navigation.navigate(item.navigate)} style={{margin:10, marginLeft:15, height:40, width: 100, backgroundColor:item.bgColor, borderRadius:10, }}>
                             <Text style={{color: "white", textAlign: "center"}}>Safety Data {"\n"} Sheet </Text>
                             </TouchableOpacity>

    
                             <TouchableOpacity onPress={() => navigation.navigate("YourLocation")} style={{margin:10, height:40, width: 120, backgroundColor:item.bgColor, borderRadius:10}}>
                             <Text style={{color: "white", textAlign:"center"}}>  Science World{"\n"} Location</Text>
                             </TouchableOpacity>
                             
                             <TouchableOpacity onPress={() => navigation.navigate(item.website)} style={{margin:10, height:40, width: 100, backgroundColor:item.bgColor, borderRadius:10}}>
                             <Text style={{color: "white", textAlign: "center"}}> Purchase{"\n"} from Merck</Text>
                             </TouchableOpacity>
                             
                             </View>
                            
    
                            </View>
                    )
                 }
                 }>

            </FlatList>
            
            
        </View>
        </View>
    );
};


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color:'white'
        
    },
    name:{
        fontSize:30,
        fontWeight: "400",
        color:"black",
        marginVertical: 40,
        marginHorizontal: 80,

    },
    mass:{
        color:"black",
        marginHorizontal: 80,
        marginVertical: -30,
        marginBottom:-10
    },
    density:{
        color:"black",
        marginHorizontal: 80,
        marginVertical: 10,
    },
});

//make this component available to the app
export default Home;

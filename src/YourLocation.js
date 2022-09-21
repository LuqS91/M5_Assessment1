import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import CompanyList from './companylist';
import Loader from './Loader';

// create a component
const YourLocation = () => {
    const companies = CompanyList
    const [currentLocation, setCurrentLocation] = useState(null);
    
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setCurrentLocation(location);
        })();
    }, []);

    const RenderMarker = () => {
        return (
            <View>
                {
                    companies.map((maker, index) => {
                        return (
                            <Marker
                                key={index}
                                coordinate={{ latitude: maker.coord['latitude'], longitude: maker.coord['longitude'] }}
                                title={maker.name}
                                image={maker.avatar}
                            />
                        )

                    })
                }
            </View>

        )
    }

    

    return (

        <View style={styles.container}>
            {companies != null

                ? <View>
                    <MapView style={styles.map}
                        initialRegion={{
                            latitude: -33.933190,
                            longitude: 18.626520,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        showsUserLocation={true}
                    >
                        <RenderMarker />
                    </MapView>
                </View>
                : <Loader />
            }

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
        height: '100%',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    
});

//make this component available to the app
export default YourLocation;


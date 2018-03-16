import {createStore} from 'redux'
import { View, Text, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 21.04203584;
const LONGITUDE = 105.79428884;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const defaultState={
    region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
}
const reducer = (state = defaultState,action)=>{
    if (action.type==="GetCurrentGPS") {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let currentRegion={
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }
                return {region:currentRegion}
            },
            (error) => console.log(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
          );
    }
    return state;
  }
export default store=createStore(reducer)
//import liraries
import React, { Component } from 'react';
import {Provider } from 'react-redux'
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import store from './store/createStore'
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 21.04203584;
const LONGITUDE = 105.79428884;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// create a component
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          region: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
          markers: [],
        };
    }
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let currentRegion={
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }
              this.setState({
                region:currentRegion
              });
            },
            (error) => console.log(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
          );
    }
    render() {
        return (
            <Provider store={store} >
                <View style={styles.container}>
                    <MapView
                        provider={this.props.provider}
                        style={styles.map}
                        initialRegion={this.state.region}
                    >
                    <MapView.Marker
                        coordinate={this.state.region}
                        pinColor="green"
                    />
                    </MapView>
                </View>
            </Provider>
        );
    }
}
App.propTypes = {
    provider: ProviderPropType,
  };
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
      },
});

//make this component available to the app
export default App;

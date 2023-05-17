import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  PermissionsAndroid,
  Dimensions,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

// navigator.geolocation = require('@react-native-community/geolocation');

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitudeX: 37.4226711,
      longitudeY: -122.0849872,
    };
  }
  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Grocery store',
          message: ' Grocery store wants access to your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  componentDidMount() {
    this.requestLocationPermission();
    Geolocation.getCurrentPosition(info => console.log(info));
  }

  render() {
    return (
      <View style={{flex: 1,paddingTop:40}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around',marginTop:30,height:45}}>
          <TouchableOpacity style={{backgroundColor:'white',width:'14%',justifyContent:'center',borderRadius:55}} onPress={()=>this.props.navigation.goBack()}>
            <Icon name="arrow-back-outline" size={25} type="ionicon" />
          </TouchableOpacity>

          <View style={{width:'75%'}}>
            <GooglePlacesAutocomplete
              placeholder="Search"
              // fetchDetails={true}
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
                // this.setState({
                //   latitudeX: details.geometry.location.lat,
                //   latitudeY: details.geometry.location.lng,
                // });
              }}
              query={{
                key: 'AIzaSyAb52gzLmGK62in6hPYwulzvjK6xho5sk8',
                language: 'en',
              }}
              style={{
                position: 'absolute',
                zIndex: 1,
                top: 50,

              }}
            />
          </View>
        </View>

        <MapView
          region={{
            latitude: this.state.latitudeX,
            longitude: this.state.longitudeY,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'green',
            position:'absolute',
            zIndex:-1
          }}
        />
      </View>
    );
  }
}
export default GoogleMap;

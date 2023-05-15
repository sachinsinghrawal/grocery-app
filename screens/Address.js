import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Icon, Header, CheckBox} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
const DATA1 = [
  {
    id: '1',
    title: 'Name*',
  },
  {
    id: '2',
    title: 'Mobile No.*',
  },
];

const DATA2 = [
  {
    id: '1',
    title: 'House No.*',
  },
  {
    id: '2',
    title: 'landmark',
  },
  {
    id: '3',
    title: 'street name',
  },
  {
    id: '4',
    title: '',
  },
  {
    id: '5',
    title: 'locality',
  },
];

export default class Address extends Component {
  renderLeftComponent = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', width: 200}}>
        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
          <Icon
            name="chevron-back-outline"
            type="ionicon"
            size={25}
            color="white"
          />
        </TouchableOpacity>

        <Text
          style={{
            paddingLeft: 10,
            fontSize: RFValue(14, 580),
            fontWeight: '700',
            color: 'white',
          }}>
          My Address
        </Text>
      </View>
    );
  };

  renderItem = ({item}) => {
    return (
      <TextInput
        placeholder={item.title}
        style={{
          height: 50,
          shadowColor: 'black',
          elevation: 5,
          backgroundColor: 'white',
          borderWidth: 0.5,
          borderRadius: 10,
          marginVertical: 5,
        }}
      />
    );
  };

  render() {
    return (
      <View>
        <Header
          leftComponent={this.renderLeftComponent}
          containerStyle={{backgroundColor: '#faab5c'}}
        />

        <View style={{padding: 10}}>
          <Text style={{color: 'black', fontSize: RFValue(13, 580)}}>
            Contact details
          </Text>

          <FlatList
            data={DATA1}
            numColumns={1}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            // horizontal={true}
            // showsVeticalScrollIndicator={false}
          />

          <Text style={{color: 'black', fontSize: RFValue(13, 580),marginTop:5}}>
            Address
          </Text>

          <FlatList
            data={DATA2}
            numColumns={1}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            // horizontal={true}
            // showsVeticalScrollIndicator={false}
          />

          <TouchableOpacity
            style={{
              borderRadius: 50,
              backgroundColor: 'orange',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',marginTop:30
            }}>
            <Text style={{color:'white', fontSize: RFValue(13, 580)}}>Add Address</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

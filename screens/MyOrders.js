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
import { MyTab } from '../App';

export default class MyOrders extends Component
{
    renderLeftComponent = () => {
        return (
          <View style={{flexDirection: 'row', alignItems: 'center', width: 200}}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
              <Icon name="chevron-back-outline" type="ionicon" size={25} color='white'/>
            </TouchableOpacity>
    
            <Text
              style={{
                paddingLeft: 10,
                fontSize: RFValue(14, 580),
                fontWeight: '700',
                color:'white'
              }}>
              My Orders
            </Text>
          </View>
        );
      };
    render(){
        return (
            <View style={{flex:1}}>

                <Header
                leftComponent={this.renderLeftComponent}
                containerStyle={{backgroundColor:'#faab5c'}}
               />
               <MyTab/>

            </View>
        )
    }
}
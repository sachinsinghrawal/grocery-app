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
} from 'react-native';
import {Icon, Header, CheckBox} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';

export default class OrderTrack extends Component {
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
          Order Track
        </Text>
      </View>
    );
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          leftComponent={this.renderLeftComponent}
          containerStyle={{backgroundColor: 'orange'}}
        />
        <View style={{paddingHorizontal:10,paddingVertical:10,height:'60%',justifyContent:'space-between'}}>
        <Text style={Styler.txt}>Estimated Delivery</Text>
        <View style={{flexDirection:'row'}}>
            <Icon name='calendar-outline' type='ionicon' size={40}/>
            <Text style={Styler.txt2}> May 5, 2023</Text>
        </View>

        <TouchableOpacity style={{height:50,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'orange',marginTop:10}} onPress={()=>{this.props.navigation.navigate('deliveryDetails')}}>
            <Text style={Styler.txt1}>Show Delivery Details</Text>
        </TouchableOpacity>

        <Text style={Styler.txt}>Delivery Location</Text>
        <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:1,paddingVertical:10}}>
        <View
            style={{
              backgroundColor: 'orange',
              height: 50,
              width: 50,
              justifyContent: 'center',
              borderRadius: 25,marginRight:10
            }}>
            <Icon name="location-outline" type="ionicon" size={30} />
          </View >
          <View style={{width:'70%'}}>
           <Text style={Styler.txt}>97,Rajpur Road, Dehradun Uttarakhand</Text>
          </View>
            
        </View>

        <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 15,
            //   borderWidth: 1,
              borderRadius: 15,
              marginTop:16,
              backgroundColor:'#f58e20'
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 5,
              }}>
              <Text style={Styler.txt3}>Sub Total</Text>
              <Text style={Styler.txt3}>₹8890</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 5,
              }}>
              <Text style={Styler.txt3}>Delivery Charges</Text>
              <Text style={Styler.txt3}>₹80</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 5,
              }}>
              <Text style={Styler.txt3}>Total</Text>
              <Text style={Styler.txt3}>₹8990</Text>
            </View>
          </View>

          <TouchableOpacity style={{height:50,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'orange',marginTop:40}} onPress={()=>this.props.navigation.navigate('Home')}>
            <Text style={Styler.txt1}>Continue Shopping</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const Styler = StyleSheet.create({
    txt: {
      fontSize: RFValue(15, 580),
      color:'black'
    },
    txt1:{
        fontSize:RFValue(14,580),
        color:'white',

    },
    txt2: {
        fontSize: RFValue(20, 580),
        alignSelf:'center',
        color:'black'
      },
    txt3: {
        fontSize: RFValue(15, 580),
        // alignSelf:'center',
        color:'white'
      },
  });
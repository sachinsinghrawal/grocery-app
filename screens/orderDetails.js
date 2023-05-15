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

export default class OrderDetails extends Component {
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
          OrderDetails
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

        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 25,
            paddingHorizontal:10,
            borderBottomWidth: 1,
          }}>
          <View
            style={{
              backgroundColor: 'orange',
              height: 50,
              width: 50,
              justifyContent: 'center',
              borderRadius: 25,marginRight:10
            }}>
            <Icon name="gift-outline" type="ionicon" size={30} />
          </View>
          <View style={{width: '50%'}}>
            <Text style={Styler.txt}>
              order #2670 4 april 2016 9:05 pm ₹580
            </Text>
          </View>
        </View>

        <View style={{paddingHorizontal: 10}}>

          <Text style={[Styler.txt,{paddingVertical:10}]}>Items</Text>

          <View
            style={{
              flexDirection: 'row',
              padding: 5,
              borderWidth: 1,
              justifyContent: 'space-between',
              borderRadius: 15,
              marginBottom: 8,
              
            }}>
            <View style={{}}>
              <Image
                source={require('../imgs/thanks.png')}
                style={{height: 100, width: 100,borderRadius:15}}
              />
            </View>
            <View style={{width:'67%'}}>
              <Text style={Styler.txt}>India's great Mongo Basmati wheat</Text>
              <Text style={Styler.txt}>20kg</Text>
              <Text style={Styler.txt}>₹890</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              padding: 5,
              borderWidth: 1,
              justifyContent: 'space-between',
              borderRadius: 15,
              marginBottom: 8,
            }}>
            <View style={{}}>
              <Image
                source={require('../imgs/thanks.png')}
                style={{height: 100, width: 100,borderRadius:15}}
              />
            </View>
            <View style={{width: '67%'}}>
              <Text style={Styler.txt}>India's great Mongo Basmati wheat</Text>
              <Text style={Styler.txt}>20kg</Text>
              <Text style={Styler.txt}>₹890</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              padding: 5,
              borderWidth: 1,
              justifyContent: 'space-between',
              borderRadius: 15,
              marginBottom: 8,
            }}>
            <View style={{}}>
              <Image
                source={require('../imgs/thanks.png')}
                style={{height: 100, width: 100,borderRadius:15}}
              />
            </View>
            <View style={{width: '67%'}}>
              <Text style={Styler.txt}>India's great Mongo Basmati wheat</Text>
              <Text style={Styler.txt}>20kg</Text>
              <Text style={Styler.txt}>₹890</Text>
            </View>
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 15,
              // borderWidth: 0.5,
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
              <Text style={Styler.txt1}>Sub Total</Text>
              <Text style={Styler.txt1}>₹8890</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 5,
              }}>
              <Text style={Styler.txt1}>Delivery Charges</Text>
              <Text style={Styler.txt1}>₹80</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 5,
              }}>
              <Text style={Styler.txt1}>Total</Text>
              <Text style={Styler.txt1}>₹8990</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const Styler = StyleSheet.create({
  txt: {
    fontSize: RFValue(15, 580),
  },
  txt1: {
    fontSize: RFValue(15, 580),
    color:'white'
  },
});

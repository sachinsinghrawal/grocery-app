import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';

export default class SignUp extends Component {
  state = {
    number: '',
  };

  validateNumber = () => {
    var regex = /^[0]?[6789]\d{9}$/;
    return regex.test(this.state.number);
  };

  mobileVerification = () => {
    if (!this.validateNumber()) {
      alert('wrong number');
    }
  };

  mobile_registration = () => {
    // console.warn('fetching data',e)
    fetch( global.api2 + 'staff-mobile-verification', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
       contact: this.state.number,
       verification_type: 'vendor'
      }),
    })
      .then(response => response.json())
      .then(json => {
        // console.warn('productlist',json.data.data)
        if (json.msg=='ok') {
          // alert(json.data.current_page)
          
          alert('registered');
          this.props.navigation.navigate('otp',{number:this.state.number})
        } else {
          alert('retry')
        }
      })
      .catch(error => {
        console.warn(error);
      })
      .finally(() => {
        this.setState({isLoading: false});
      });
  };
  


  render() {
    return (
      <View style={{flex: 1, paddingTop: 10}}>
        <ScrollView>
          <TouchableOpacity style={{width: '10%'}} onPress={()=>this.props.navigation.goBack()}>
            <Icon name="chevron-back-outline" type="ionicon" size={35} />
          </TouchableOpacity>
          <View
            style={{
              width: '95%',
              alignSelf: 'center',
              marginVertical: '5%',
              height: '40%',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: RFValue(18, 580),
                fontWeight: '800',
                color: 'black',
              }}>
              Your Mobile Number
            </Text>
            <Text style={{fontSize: RFValue(13, 580), fontWeight: '400'}}>
              we will send an SMS with a confirmation code to this number.
            </Text>
            <Text style={{color:'black',fontWeight:'500'}}>Phone Number:</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '95%',
              alignSelf: 'center',
            }}>
            <Image
              source={require('../imgs/Flag.jpg')}
              style={{height: 20, width: 20}}>
            </Image>
            <View style={{ borderWidth: 1,borderRadius: 10,width:'90%',flexDirection:'row',alignItems:'center',paddingHorizontal:8,height:45}}>
             <Text style={{fontSize: 16, color: 'black'}}>+91</Text>
             <TextInput
              keyboardType="numeric"
              placeholder=" your number"
              style={{
                height: 45,
                width: '85%',
                fontSize:16,
                // justifyContent:'center',
                // backgroundColor:'red'
               
              }}
              onChangeText={value => this.setState({number: value})}
              onBlur={() => this.mobileVerification()}>
             </TextInput>
            </View>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: 'orange',
              width: '95%',
              marginTop: '10%',
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
              alignSelf: 'center',
              borderRadius: 10,
              marginBottom: '30%',
            }}
            onPress={() => {
              if (this.validateNumber()) 
               this.mobile_registration();
              else 
               alert('valid number Required');
            }}>
            <Text
              style={{
                fontSize: RFValue(16, 580),
                color: 'black',
                fontWeight: '500',
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

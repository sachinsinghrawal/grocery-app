import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  ToastAndroid,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
// import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Profile extends Component {
  state = {
    username: '',
    email: '',
    warn:false,
    warn2:false,
  };
  validateName = () => {
    var regex = /^[a-zA-Z ]{2,30}$/;
    return regex.test(this.state.username);
  };
  validateEmail = () => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.state.email);
  };

  setData=async(name,email)=>{
    try {
        await AsyncStorage.setItem('username', name);
        await AsyncStorage.setItem('email',email)
      } 
    catch (e) {
      console.warn(e);
  }}

  // showToastWithGravityAndOffset = () => {
  //   ToastAndroid.showWithGravityAndOffset(
  //     'PLEASE ENTER VALID NAME',
  //     ToastAndroid.LONG,
  //     // ToastAndroid.TOP,
  //     25,
  //     50,
  //   );
  // };

  //   showToast = () => {
  //     ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
  //   };

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <TouchableOpacity
            style={{width: '10%', marginTop: 10}}
            onPress={() => this.props.navigation.goBack()}>
            <Icon name="chevron-back-outline" type="ionicon" size={35} />
          </TouchableOpacity>

          <View
            style={{
              width: '95%',
              alignSelf: 'center',
              marginTop: 5,
              height: '15%',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: RFValue(18, 580),
                fontWeight: '800',
                color: 'black',
              }}>
              Create New Account
            </Text>
            <Text style={{fontSize: RFValue(12, 580), fontWeight: '400'}}>
              Enter Your details to create account.
            </Text>
          </View>

          <View
            style={{
              height: '40%',
              width: '95%',
              alignSelf: 'center',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <View>
              <Text style={{fontWeight:'600',color:'black'}}>Name</Text>
              <TextInput
                style={{height: 50, borderWidth: 0.5, borderRadius: 5}}
                placeholder=" eg..sam  {only_letters  min-2 max-30}"
                onChangeText={value => this.setState({username: value})}
                onBlur={() => {
                  this.setState({warn:true})
                }}
              ></TextInput>
            </View>

            {!this.validateName(this.state.username) && this.state.warn ? (
              <View style={{height:25,width:'50%',backgroundColor:'red',alignItems:'center',borderRadius:10,alignSelf:'flex-end',marginTop:5}}><Text style={{color:'white'}}>enter valid name</Text></View>
            ) : (<View></View>)}

            <View>
              <Text style={{fontWeight:'600',color:'black'}}>Email Address</Text>
              <TextInput
                style={{height: 50, borderWidth: 0.5, borderRadius: 5}}
                placeholder=" eg.. abc@123"
                onChangeText={value => this.setState({email: value})}
                onBlur={() => {
                  this.setState({warn2:true})
                }}
              />
            </View>

            {!this.validateEmail(this.state.email) && this.state.warn2  ? (
              <View style={{height:25,width:'50%',backgroundColor:'red',alignItems:'center',borderRadius:10,alignSelf:'flex-end',marginTop:5}}><Text style={{color:'white'}}>enter valid email</Text></View>
            ) : (<View></View>)}
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
              marginBottom: 50,
            }}
            onPress={() => {
              if (this.validateEmail() && this.validateName()) {
                this.setData(this.state.username,this.state.email);
                this.props.navigation.navigate('drawer');
                // alert('Welcome'+' '+ this.state.username +'!');
              } else alert('must register to proceed');
             
            }}>
            <Text
              style={{
                fontSize: RFValue(14, 580),
                color: 'black',
                fontWeight: '500',
              }}>
              {' '}
              Create Profile{' '}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

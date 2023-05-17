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

export default class Profile extends Component {
  state = {
    username: '',
    email: '',
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

  showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'INVALID NAME',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  //   showToast = () => {
  //     ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
  //   };

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <TouchableOpacity style={{width: '10%', marginTop: 10}} onPress={()=>this.props.navigation.goBack()}>
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
              <Text>Name</Text>
              <TextInput
                style={{height: 50, borderWidth: 0.5, borderRadius: 5}}
                placeholder=" eg..sam  {only_letters  min-2 max-30}"
                onChangeText={value => this.setState({username: value})}
                onBlur={() => {
                  if (!this.validateName(this.state.username)) {
                    this.showToastWithGravityAndOffset();
                  }
                }}></TextInput>
            </View>
            {/* {alert(this.state.username)} */}
            <View>
              <Text>Email Address</Text>
              <TextInput
                style={{height: 50, borderWidth: 0.5, borderRadius: 5}}
                placeholder=" eg.. abc@123"
                onChangeText={value => this.setState({email: value})}
                onBlur={() => {
                  if (!this.validateEmail(this.state.email)) {
                    alert('invalid email');
                  }
                }}
              />
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
              marginBottom: 50,
            }}
            onPress={() => {
              if (this.validateEmail() && this.validateName()) 
              { this.props.navigation.navigate('drawer');
                alert('Welcome'+' '+ this.state.username +'!');
              }
              else
                alert('must register to proceed')
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

import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import {Icon} from 'react-native-elements';
import OTPTextInput from 'react-native-otp-textinput';
import {RFValue} from 'react-native-responsive-fontsize';
import CountDown from 'react-native-countdown-component';

export default class Otp extends Component {
  // clearText = () => {
  //     this.otpInput.clear();
  // }1

  // setText = () => {
  //     this.otpInput.setValue("1234");
  // }
  constructor(props) {
    super(props);
    console.warn(this.props);
    this.state = {
      status: false,
      stat: '',
      isLoading:true
    };
  }

  otp_verification = () => {
    // console.warn('fetching data',e)
    fetch( global.api2 + 'staff-otp-verification', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
       contact: this.props.route.params.number,
       otp: this.state.stat
      }),
    })
      .then(response => response.json())
      .then(json => {
        // console.warn(json.data.contact);
        if (json.msg=='ok') {
          // alert(json.data.current_page)
          this.props.navigation.navigate('Profile')
        } else {
          alert('invalid otp')
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
      <ScrollView>
        <TouchableOpacity
          style={{width: '10%', marginTop: 10}}
          onPress={() => this.props.navigation.goBack()}>
          <Icon name="chevron-back-outline" type="ionicon" size={35} />
        </TouchableOpacity>

        <View
          style={{
            width: '93%',
            alignSelf: 'center',
            marginVertical: '5%',
            height: '20%',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: RFValue(20, 580),
              fontWeight: '800',
              color: 'black',
            }}>
            Verification Code
          </Text>
          <Text style={{fontSize: RFValue(12, 580), fontWeight: '400'}}>
            we just sent you a verification code via a phone XXXXXXX478.
          </Text>
        </View>

        <OTPTextInput
          // ref={e => (this.otpInput = e)}
          textInputStyle={{borderWidth: 3, borderRadius: 5,width:45}}
          handleTextChange={value => {
            this.setState({stat: value});
          }}
          defaultValue={this.state.stat}
          inputCount={6}
          containerStyle={{width: '92%', alignSelf: 'center'}}
        />
        {/* <Button title="clear" onClick={this.clearText}/> */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '93%',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          {this.state.status ? (
            <TouchableOpacity
              onPress={() => {
                this.setState({status: false});
              }}>
              <Text style={{color: 'grey', fontSize: 14}}>Resend Code</Text>
            </TouchableOpacity>
          ) : (
            <CountDown
              size={15}
              until={60}
              onFinish={() => this.setState({status: true})}
              digitStyle={
                {
                  //   backgroundColor: '#FFF',
                  //   borderWidth: 2,
                  //   borderColor: '#1CC625',
                }
              }
              digitTxtStyle={{color: '#1CC625'}}
              timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
              separatorStyle={{color: '#1CC625'}}
              timeToShow={['H', 'M', 'S']}
              timeLabels={{m: null, s: null}}
              showSeparator
            />
          )}
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
             this.otp_verification();
             
          }}>
          <Text
            style={{
              fontSize: RFValue(14, 580),
              color: 'black',
              fontWeight: '500',
            }}>
            Verify Account
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

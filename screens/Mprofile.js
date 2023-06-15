import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
// import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Mprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
    };
  }
  componentDidMount() {
    this.read_user();
  }

  read_user = async () => {
    try {
      const name = await AsyncStorage.getItem('username');
      const email = await AsyncStorage.getItem('email');
      this.setState({username: name, email: email});
    } catch (e) {
      console.warn(e);
    }
  };

  renderLeftComponent = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', width: 200}}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Icon
            name="chevron-back-outline"
            type="ionicon"
            size={25}
            color="black"
          />
        </TouchableOpacity>

        <Text
          style={{
            paddingLeft: 10,
            fontSize: RFValue(14, 580),
            fontWeight: '700',
            color: 'black',
          }}>
          My Profile
        </Text>
      </View>
    );
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Header
          leftComponent={this.renderLeftComponent()}
          containerStyle={{backgroundColor: 'orange'}}
        />
        <ScrollView style={{width: '90%', alignSelf: 'center'}}>
          <Image
            source={require('../imgs/profile.png')}
            style={{height: 400, width: 370}}
          />
          <TextInput
            placeholder={this.state.username}
            style={Styler.textInput}
          />
          <TextInput placeholder={this.state.email} style={Styler.textInput} />
          <TouchableOpacity style={Styler.btn}>
            <Text
              style={{
                paddingLeft: 10,
                fontSize: RFValue(14, 580),
                fontWeight: '700',
                color: 'black',
              }}>
              LogOut
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const Styler = StyleSheet.create({
  textInput: {
    borderRadius: 30,
    backgroundColor: '#dedcd7',
    height: 55,
    marginBottom: 10,
    paddingHorizontal: 17,
  },
  btn: {
    height: 50,
    backgroundColor: 'orange',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// function abc()
// {
//     console.log('hello');
// }

// abc();

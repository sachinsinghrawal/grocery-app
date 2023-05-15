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

class CheckOut extends Component {

  state={
    selectedIndex:0
    }
  
  renderLeftComponent = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', width: 200}}>
        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
          <Icon name="chevron-back-outline" type="ionicon" size={25} color='white' />
        </TouchableOpacity>

        <Text
          style={{
            paddingLeft: 10,
            fontSize: RFValue(14, 580),
            fontWeight: '700',
            color:'white'
          }}>
          Checkout
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
        <View style={{width:'95%',alignSelf:'center',paddingTop:30}}>
          <Text style={[Styler.txt,{marginBottom:10}]}>Selected Type-Delivery</Text>
          <Text style={Styler.txt}>Delivery to :Sunaina</Text>
          <Text>17/1 lakhi bhag, dehradun, uttarakhand</Text>
          <Text >id:2248007</Text>

          <Text style={[Styler.txt,{marginTop:15}]}>Payment Options</Text>
          <View style={Styler.pay}>
            <Text>Debit Card</Text>
            <CheckBox
              checked={this.state.selectedIndex == 0}
              onPress={() =>this.setState({selectedIndex:0})}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
          <View style={Styler.pay}>
            <Text>Net Banking</Text>
            <CheckBox
              checked={this.state.selectedIndex == 1}
              onPress={() =>this.setState({selectedIndex:1})}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
          <View style={Styler.pay}>
            <Text>UPI {'(Gpay, PhonePe)'}</Text>
            <CheckBox
              checked={this.state.selectedIndex == 2}
              onPress={() => this.setState({selectedIndex:2})}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
          <View style={Styler.pay}>
            <Text>Cash on Delivery</Text>
            <CheckBox
              checked={this.state.selectedIndex == 3}
              onPress={() => this.setState({selectedIndex:3})}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
          <Text style={[Styler.txt]}>Price Details</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10}}>
            <View>
             <Text style={[Styler.txt]}>Total MRP</Text>
             <Text>{'(inclusive of all Taxes)'}</Text>
            </View>           
            <Text style={[Styler.txt]}>₹778</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View>
             <Text style={[Styler.txt]}>Total </Text>
             {/* <Text>{'(inclusive of all Taxes)'}</Text> */}
            </View>           
            <Text style={[Styler.txt]}>₹778</Text>
          </View>

          <TouchableOpacity style={{height:50,backgroundColor:'orange',justifyContent:'center',alignItems:'center',borderRadius:30,marginTop:50}} onPress={()=>this.props.navigation.navigate('thanks')}>
            <Text style={{color:'white',fontSize:RFValue(16,580)}}>
                PLACE ORDER
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}
export default CheckOut;

const Styler = StyleSheet.create({
  pay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 55,
    borderRadius: 15,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    paddingLeft:20,
    marginTop:5
  },
  txt:{
    fontWeight:'600',
    color:'black',
    fontSize:RFValue(12,580)
  }
});

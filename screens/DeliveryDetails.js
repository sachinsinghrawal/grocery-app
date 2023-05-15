import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  StyleSheet,FlatList
} from 'react-native';
import {Icon, Header, CheckBox} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';

const DATA = [
    {id: '1',txt:'waiting for the confirmation',date:'4 april 2021',color:'skyblue'},
    {id: '2',txt:'delivery to home',date:'4 april 2021',color:'pink' },
    {id: '3',txt:'We are packaging your item',date:'5 april 2021',color:'gold'  },
    {id: '4',txt:'Your order is confirmed',date:'5 april 2021',color:'#ffd3a3'  },
    {id: '5',txt:'Your order is received',date:'6 april 2021',color:'pink'  },
    
  ];

export default class DeliveryDetails extends Component {
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
          Delivery Details
        </Text>
      </View>
    );
  };

  renderItem=({item})=>{
    return(
        <View style={{flexDirection:'row',alignItems:'center',marginBottom:10,justifyContent:'space-around'}}>
            <Icon name='chevron-down-circle' type='ionicon' size={30} color='blue'/>
            <View style={{height:100,width:'85%',borderRadius:15,backgroundColor:item.color,justifyContent:'center',paddingHorizontal:8}}>
                <Text style={Styler.txt}>
                    {item.txt}
                </Text>
                <Text style={Styler.txt}>
                    {item.date}
                </Text>
                
            </View>
        </View>
    )
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          leftComponent={this.renderLeftComponent}
          containerStyle={{backgroundColor: 'orange'}}
        />
        <View style={{flexDirection: 'row',padding:10}}>
          <Icon name="calendar-outline" type="ionicon" size={35} />
          <Text style={Styler.txt2}> May 5, 2023</Text>
        </View>

        <FlatList
                    data={DATA}
                    numColumns={1}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                    />
      </View>
    );
  }
}


const Styler = StyleSheet.create({
    txt2: {
        fontSize: RFValue(14, 580),
        fontWeight:'600',
        alignSelf:'center',
        color:'black',
        paddingLeft:5
      },
    txt:{
        fontSize: RFValue(16, 580),
        color:'black'
    }
  });

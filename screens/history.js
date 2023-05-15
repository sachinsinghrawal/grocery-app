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
    {id: '1', img: require('../imgs/a1.png'), title: 'Apple',color:'pink' },
    {id: '2', img: require('../imgs/a2.png'), title: 'Orange',color:'skyblue'},
    {id: '3', img: require('../imgs/a3.png'), title: 'Banana',color:'gold'},
    {id: '4', img: require('../imgs/a4.png'), title: 'Water M.',color:'lightgreen'},
    {id: '5', img: require('../imgs/a5.png'), title: 'Grapes',color:'pink'},
    {id: '6', img: require('../imgs/a6.png'), title: 'Avacado',color:'orange'},
    {id: '7', img: require('../imgs/a1.png'), title: 'Pineapple',color:'skyblue'},
    {id: '8', img: require('../imgs/a7.png'), title: 'more',color:'#d1eba2'},
  ];


export default class History extends Component
{

    renderItem=()=>
    {
        return(
            <View style={{paddingHorizontal:5,paddingVertical:10,borderBottomWidth:0.5,height:110,justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                    <View style={{backgroundColor:'orange',height:50,width:50,justifyContent:'center',borderRadius:25}}>
                     <Icon name='gift-outline' type='ionicon' size={30}/>
                    </View>                   
                    <View style={{width:'55%'}}>
                     <Text style={Styler.txt}>Hi your order has been delivered.</Text>
                    </View>
                    <Text style={Styler.txt}>₹280.89</Text>
                </View>
                <TouchableOpacity style={{flexDirection:'row',justifyContent:'flex-end'}} onPress={()=>this.props.navigation.navigate('orderDetails')}>
                    <View style={{width:110,borderRadius:10,backgroundColor:'orange',marginHorizontal:5,padding:3,alignItems:'center'}}>
                        <Text style={Styler.txt2}>View Details</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    render()
    {
        return(
            <View>

                 <FlatList
                    data={DATA}
                    numColumns={1}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                    />

            </View>
        )
    }
}

const Styler=StyleSheet.create({
    txt:{
        fontSize:RFValue(13,580),
        color:'black',

    },
    txt2:{
        fontSize:RFValue(13,580),
        color:'white',

    }
})
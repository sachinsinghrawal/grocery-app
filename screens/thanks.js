import React,{Component} from "react";
import { Text, View,Image, StyleSheet} from "react-native";
import {Icon, Header, CheckBox} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';

export default class Thanks extends Component
{
    render(){
        return(
            <View style={{flex:1}}>
                <Image source={require('../imgs/thanks.png')} style={{height:'65%',width:'100%',marginBottom:30}}/>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                 <Icon name="checkmark-circle" size={80} type="ionicon" color="green"/>
                 <Text style={Styler.txt}>THANK YOU</Text>
                 <Text style={Styler.txt1}>FOR SHOPPING</Text>
                </View>
                

            </View>
        )
    }
} 

const Styler=StyleSheet.create({
    txt:{
        fontSize:RFValue(35,580),
        fontWeight:'800'
    },
    txt1:{
        fontSize:RFValue(16,580),
        fontWeight:'800'
    }
})
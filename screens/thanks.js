import React,{Component} from "react";
import { Text, View,Image, StyleSheet,TouchableOpacity} from "react-native";
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
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:'55%',alignSelf:'center',backgroundColor:'orange',height:50,borderRadius:20,marginTop:10,marginBottom:10}} onPress={()=>this.props.navigation.navigate('Home')}>
                    <Text style={{color:'white',fontSize:RFValue(15,580)}}>continue shopping {'>>'}</Text>
                </TouchableOpacity>
                

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
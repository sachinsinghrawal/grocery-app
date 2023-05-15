import React,{Component} from "react";
import { Text, TextInput, View,Image, TouchableOpacity, ScrollView } from "react-native";
import { Icon } from 'react-native-elements'
import {  RFValue } from "react-native-responsive-fontsize";

export default class SignUp extends Component
{
    render()
    {
        return( 
            <View style={{flex:1,paddingTop:10}}>
              <ScrollView >
                <View style={{width:'10%'}}>
                 <Icon name='chevron-back-outline' type='ionicon' size={35} />
                </View>
                <View style={{width:'95%',alignSelf:'center',marginVertical:'5%',height:'40%',justifyContent:'space-between'}}>
                    <Text style={{fontSize:RFValue(18,580),fontWeight:'800',color:'black'}}>
                        Your Mobile Number
                    </Text>
                    <Text style={{fontSize:RFValue(13,580),fontWeight:'400'}}>
                        we will send an SMS with a confirmation code to this number.
                    </Text>
                    <Text>Phone Number:</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'95%',alignSelf:'center'}}>
                    <Image source={require('../imgs/Flag.jpg')} style={{height:20,width:20}}></Image>
                    <Text style={{fontSize:16,color:'black'}}>+91</Text>
                    <TextInput 
                    keyboardType="numeric"
                    placeholder=" your number" style={{height:50,width:'85%',borderWidth:1,borderRadius:10}}></TextInput>
                </View>

                <TouchableOpacity style={{backgroundColor:'orange',width:'95%',marginTop:'10%',justifyContent:"center",alignItems:'center',height:50,alignSelf:'center',borderRadius:10,marginBottom:'30%'}}
                onPress={()=>this.props.navigation.navigate('otp')}>
                    <Text  style={{fontSize:RFValue(16,580),color:'black',fontWeight:'500'}}>Next</Text>
                </TouchableOpacity>

              </ScrollView>
                
            </View>
        )
    }
}

import React,{Component} from "react";
import { Text, TextInput, View,Image, TouchableOpacity, ScrollView,Button} from "react-native";
import { Icon } from 'react-native-elements'
import {  RFValue } from "react-native-responsive-fontsize";

export default class Profile extends Component
{
    render()
    {
     return(
        
        <View style={{flex:1,}}>
         <ScrollView>

          <View style={{width:'10%',marginTop:10}}>
           <Icon name='chevron-back-outline' type='ionicon' size={35} />
          </View>

          <View style={{width:'95%',alignSelf:'center',marginTop:5,height:'15%',justifyContent:'space-between'}}>
              <Text style={{fontSize:RFValue(18,580),fontWeight:'800',color:'black'}}>
                  Create New Account
              </Text>
              <Text style={{fontSize:RFValue(12,580),fontWeight:'400'}}>
                  Enter Your details to create account.
              </Text>
          </View>

          <View style={{height:'40%',width:'95%',alignSelf:'center',justifyContent:'space-between',marginTop:30}}>
            <View >
                <Text>Name</Text>
                <TextInput style={{height:50,borderWidth:0.5,borderRadius:5}}></TextInput>
            </View>
            <View>
                <Text>Email Address</Text>
                <TextInput style={{height:50,borderWidth:0.5,borderRadius:5}}></TextInput>
            </View>          
          </View>

          <TouchableOpacity style={{backgroundColor:'orange',width:'95%',marginTop:'10%',justifyContent:"center",alignItems:'center',height:50,alignSelf:'center',borderRadius:10,marginBottom:50}}
                onPress={()=>this.props.navigation.navigate('drawer')}>
                    <Text  style={{fontSize:RFValue(14,580),color:'black',fontWeight:'500'}}> Create Profile </Text>
          </TouchableOpacity>

          </ScrollView>
          </View>

          )
    }
}

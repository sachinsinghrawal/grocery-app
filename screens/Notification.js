import React,{Component} from "react";
import { Text, TextInput, View,Image, TouchableOpacity, ScrollView,Button, Dimensions} from "react-native";
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";

export default class Notification extends Component
{
    render()
    {
        return(
            <View style={{flex:1}}>

                <TouchableOpacity style={{width:'12%',}}>
                    <Icon name='chevron-back-outline' type='ionicon' size={35}/>
                </TouchableOpacity>

                <View style={{width:'92%',alignSelf:'center',height:'100%'}}>               
                    <View style={{marginVertical:15}}>
                        <Text style={{fontSize:RFValue(18,580),fontWeight:'700',color:'black'}}>Notification</Text>
                        <Text style={{fontSize:RFValue(12,580),fontWeight:'300'}}>Please enable push Notification to get more offers and updates.</Text>
                    </View>
                    <View style={{height:'55%',width:'100%',marginTop:20,marginBottom:40}}>
                        <Image source={require('../imgs/notification.png')} style={{ height:'100%',width:'100%'}}/>
                    </View>
                    <TouchableOpacity style={{height:50,backgroundColor:'orange',justifyContent:'center',alignItems:'center',borderRadius:10}}>
                        <Text style={{fontSize:RFValue(13,580),color:'black',fontWeight:'500'}}>Allow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center',marginTop:10}}>
                        <Text style={{fontSize:RFValue(13,580),color:'black',fontWeight:'500'}}>Deny</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        )
    }
}
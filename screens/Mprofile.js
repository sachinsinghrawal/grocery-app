import React,{Component} from "react";
import { Text, TextInput, View,Image, TouchableOpacity, ScrollView,StyleSheet} from "react-native";
import { Header, Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";

export default class Mprofile extends Component
{

    renderLeftComponent=()=>{
        return(
            <View style={{flexDirection:'row',alignItems:'center',width:200}}>

                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                 <Icon name='chevron-back-outline' type='ionicon' size={25}/>
                </TouchableOpacity>
                
                <Text style={{paddingLeft:10,fontSize:RFValue(14,580),fontWeight:'700'}}>My Profile</Text>
            </View>
        )

    }   
    render()
    {
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Header
                leftComponent={this.renderLeftComponent()}
                containerStyle={{backgroundColor:'orange'}}
                />
               <ScrollView style={{width:'90%',alignSelf:'center'}}>

                
                    <Image source={require('../imgs/profile.png')} style={{height:400,width:370}}/>
                    <TextInput placeholder="Name" style={Styler.textInput }/>
                    <TextInput placeholder="email" style={Styler.textInput }/>
                    <TouchableOpacity style={Styler.btn}><Text style={{paddingLeft:10,fontSize:RFValue(14,580),fontWeight:'700'}}>Save</Text></TouchableOpacity>
                
                
              </ScrollView>
           </View> 
        )
    }
}

const Styler=StyleSheet.create({
    textInput:{
        borderRadius:30,
        backgroundColor:'#dedcd7',
        height:55,
        marginBottom:10,
        paddingHorizontal:17
    },
    btn:{
        height:50,
        backgroundColor:'orange',
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center'

    
    }

})

// function abc()
// {
//     console.log('hello');
// }


// abc();
import React,{Component} from "react";
import { Text,View,Image, TouchableOpacity,FlatList, Dimensions,StyleSheet} from "react-native";
import { CheckBox, Header, Icon } from 'react-native-elements'
import {  RFValue } from "react-native-responsive-fontsize";

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

export default class Favourite extends Component
{
    state={
        checked:true};

    renderItem=({item})=>{
        return (
            <View style={{width:'50%',height:Dimensions.get('screen').height/3.2,marginBottom:15,paddingHorizontal:10,}}>
                <View style={{backgroundColor:'white',width:'100%',height:'100%',shadowColor:'black',elevation:5,borderRadius:10,paddingHorizontal:3,justifyContent:'space-between',paddingBottom:5}}>
                    
                    
                    <View style={{width:55,alignSelf:'flex-end'}}>
                        <CheckBox
                        checked={this.state.checked}
                        checkedIcon="heart"
                        uncheckedIcon="heart-o"
                        checkedColor="red"
                        onPress={()=>{this.setState({checked:!this.state.checked})}}
                       />
                    </View>  
                    

                    <View style={{height:'40%',alignItems:'center',marginTop:'-22%',marginBottom:10}}>
                     <Image source={require('../imgs/bag.png')} style={{height:100,width:80}}/>
                    </View>

                    <View style={{alignItems:'center',justifyContent:'center',marginBottom:5}}>
                        <Text style={styler.txt}>₹150</Text>
                        <Text style={styler.txt}>India's </Text>
                        <Text style={styler.txt}>great Mangoes</Text>
                        <Text style={styler.txt}>1kg</Text>
                    </View>
                   
                   <TouchableOpacity style={{height:'15%',alignItems:'center',justifyContent:'center',backgroundColor:'orange',borderRadius:10}} onPress={()=>alert('added successfully')}>
                    <Text>Add to Bag</Text>
                   </TouchableOpacity>
                

                </View>

            </View>
        )
    }
    centerComponent=()=>{
        return(
            <View>
                <Text style={{fontSize:RFValue(15,580),fontWeight:'600',color:'black'}}>Favourite</Text>
            </View>
        )
    }

    render()
    {
        return (
            <View style={{flex:1}}>
                 <Header centerComponent={this.centerComponent()} containerStyle={{backgroundColor:'orange'}}/>
                 <View style={{marginTop:10,marginBottom:100}}>
                    <FlatList
                    data={DATA}
                    numColumns={2}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                    />
                </View>
            </View>

        );
    }
}

const styler=StyleSheet.create({
    txt:{
        fontSize:RFValue(10,580),
        color:'black',
        fontWeight:'400'
    }
})
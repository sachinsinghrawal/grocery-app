import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
import Swiper from 'react-native-swiper'

export default class Item extends Component {
  render() {
    return (
      <View style={{flex: 1,backgroundColor:'#fff'}}>
        <View style={{flex: 0.5,paddingHorizontal:20,borderBottomLeftRadius:20,borderBottomRightRadius:20,backgroundColor:'#fcb56d'}}>
          {/* top navigation */}
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <TouchableOpacity style={styles.topNav} onPress={()=>this.props.navigation.goBack()}><Icon name='chevron-back-outline' type='ionicon' size={30}/></TouchableOpacity>
                <TouchableOpacity style={styles.topNav}  onPress={()=>this.props.navigation.navigate('cart')}><Icon name='lock-closed-outline' type='ionicon' size={25}/></TouchableOpacity>
          </View>
          <Swiper
            style={{}}
            showsButtons={false}
            // paginationStyle={{marginRight: '80%', marginBottom: '5%'}}
            activeDotStyle={{width: 18}}>
            <View style={styles.slide}>
                <Image source={require('../imgs/orange.png')} style={{height:280,width:320}}/>
            </View>

            <View style={styles.slide}>
             <Image source={require('../imgs/orange.png')} style={{height:280,width:320}}/>
            </View>

            <View style={styles.slide}>
             <Image source={require('../imgs/orange.png')} style={{height:280,width:320}}/>
            </View>
          </Swiper>
        </View>
        <View style={{flex:0.5,backgroundColor:'#fcb56d'}}>
            <View style={{backgroundColor:'white',paddingHorizontal:20,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
            <Text style={{fontSize:RFValue(20,580),fontWeight:'600',marginVertical:'5%',color:'black'}}>
                Orange
            </Text>
            <View style={{flexDirection:'row'}}>
                <Icon name='star' type='ionicon' size={20}/>
                <Text style={{fontSize:RFValue(14,580),fontWeight:'400'}}> 4.9 {'(450 reviews)'}</Text>
            </View>
            <Text style={{fontSize:RFValue(16,580),fontWeight:'600',marginVertical:'5%',color:'black'}}>Description</Text>
            <Text style={{fontSize:RFValue(14,580),fontWeight:'600',paddingBottom:30}}>Energetically morph strategic e-trailers rather than flexible sources ,fem lorem ipusm dolor sit amet consetetut lilly morph.</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'20%',backgroundColor:'#fcb56d',paddingHorizontal:20}}>
                <Text style={{fontSize:RFValue(20,580),fontWeight:'600'}}>₹200</Text>
                <TouchableOpacity style={{justifyContent:'center',width:'30%',backgroundColor:'red',alignItems:'center',borderRadius:6}} onPress={()=>alert('item added to cart !')}>
                    <Text style={{fontSize:RFValue(12,580),fontWeight:'600',color:'white'}}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    // justifyContent: 'center',
    // alignItems: 'center',
    height:'100%',
    backgroundColor: '#fcb56d',
    justifyContent:'center',
    alignItems:'center',
    
  },
  topNav:{ 
    width:"12%",
    backgroundColor:'#fff',
    // shadowColor:'black',
    // elevation:10,
    borderRadius:5,
    // alignItems:'center',
    justifyContent:'center',
    height:40
},
});

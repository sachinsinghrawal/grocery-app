import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View,Image, TouchableOpacity, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import { Icon } from 'react-native-elements'
import {  RFValue } from "react-native-responsive-fontsize";


const styles = StyleSheet.create({
    wrapper: {},
    slide3: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: 'rgb(233,238,247)'
    },
    slide2: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: 'rgb(241,245,251)'
    },
    slide1: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: 'rgb(243,253,255)'
    },
    text: {
      color: 'black',
      fontSize: RFValue(14,580),
      fontWeight: 'bold'
    },
    textM: {
      color: 'grey',
      fontSize:RFValue(13,580),
      fontWeight: '600',
      marginTop:'5%'
    },
     textT: {
      color: 'black',
      fontSize: RFValue(13,580),
      fontWeight: '600',
      marginTop:'5%'
    },
    nxtbtn:{
      // backgroundColor:'green',
      position:'relative',
      top:Dimensions.get('screen').height/2.4
    }
  })
   
  export default class SwiperComponent extends Component {
    render() {
      return (
        <Swiper 
           style={styles.wrapper} 
           paginationStyle={{marginRight:'80%',marginBottom:'5%'}} 
           activeDotStyle={{width:18}} 
           showsButtons={false}
          //  nextButton={  <View style={styles.nxtbtn}>
          //                   <Icon name='arrow-forward-circle' type='ionicon' size={50}/>
          //                </View>
                         
          //             }
          //  prevButton={<Text></Text>}        
        >

          <View style={styles.slide1}>
            <TouchableOpacity style={{alignItems:'flex-end',width:'90%',alignSelf:'center'}} onPress={() =>this.props.navigation.navigate('SignUp')}>
              <Text style={styles.textT} >Skip</Text>
            </TouchableOpacity>
            <Image source={require('../imgs/bg1.jpg')} style={{height:'60%',width:'100%'}}/>
            <View style={{paddingVertical:'6%',paddingHorizontal:"3%"}}>
              <Text style={styles.text}>
                We offer Fresh and High Quality Groceries.
              </Text>
              <Text style={styles.textM}>a store that primarily retails a general range of food products, which may be fresh or packaged. 
              </Text>
            </View>
          </View>

          <View style={styles.slide2}>
            <TouchableOpacity style={{alignItems:'flex-end',width:'90%',alignSelf:'center'}} onPress={() =>this.props. navigation.navigate('SignUp')}>
              <Text style={styles.textT} >Skip</Text>
            </TouchableOpacity>
            <Image source={require('../imgs/bg2.png')} style={{height:'70%',width:'100%'}}/>
            <View style={{marginTop:'-18%',paddingHorizontal:"3%"}}>
              <Text style={styles.text}>
                We offer Fresh and High Quality Groceries.
              </Text>
              <Text style={styles.textM}>a store that primarily retails a general range of food products, which may be fresh or packaged. 
              </Text>
            </View>
          </View>

          <View style={styles.slide3}>
            <TouchableOpacity style={{alignItems:'flex-end',width:'90%',alignSelf:'center'}} onPress={() =>this.props. navigation.navigate('SignUp')}>
              <Text style={styles.textT} >Skip</Text>
            </TouchableOpacity>
            <Image source={require('../imgs/bg3.png')} style={{height:'70%',width:'100%'}}/>
            <View style={{marginTop:'-18%',paddingHorizontal:"3%"}}>
              <Text style={styles.text}>
                We offer Fresh and High Quality Groceries.
              </Text>
              <Text style={styles.textM}>a store that primarily retails a general range of food products, which may be fresh or packaged. 
              </Text>
            </View>
          </View>

        </Swiper>
      )
    }
  }
  
import React,{Component} from "react";
import { Text, TextInput, View,Image, TouchableOpacity, ScrollView,Button, Dimensions,StyleSheet} from "react-native";
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import MultiSlider from '@ptomasroos/react-native-multi-slider';

class RangeSlider extends React.Component {
    state = {
        values: [300, 2000],
    };
    // abc = this.props.alteredRange;
    multiSliderValuesChange = (values) => {
        this.setState({
            values,
        });
    }
    // abc(values[0], values[1]);

    render() {
        return (
            <View >
              <MultiSlider
                          values={[this.state.values[0], this.state.values[1]]}
                          sliderLength={330}
                          onValuesChange={this.multiSliderValuesChange}
                          min={100}
                          max={5000}
                          step={100}
              />
              <View style={{flexDirection:'row',justifyContent:'flex-start',height:50}}>
                    
                  <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:0,height:35}}>
                    <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'silver',width:50}}><Text style={{fontSize:15,fontWeight:'700'}}>{this.state.values[0]}</Text></View>
                    <View style={{justifyContent:'center',alignItems:'center',width:30}}><Text style={{fontSize:15,fontWeight:'700'}}>to</Text></View>
                    <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'silver',width:50}}><Text style={{fontSize:15,fontWeight:'700'}}>{this.state.values[1]}</Text></View>
                  </View>

              </View>
                
                {/* <Text style={{fontSize:25,color:'red'}}>Two Markers:</Text>
                <Text style={{fontSize:25,color:'red'}}>{this.state.values[0]}</Text>
                <Text style={{fontSize:25,color:'red'}}>{this.state.values[1]}</Text> */}
            </View>
        )
    }
}



export default class Filter extends Component
{
    state = {
        values: [300, 2000],
    };
    // abc = this.props.alteredRange;
    multiSliderValuesChange = (values) => {
        this.setState({
            values,
        });
    }
    render()
    {
        return(
            <View style={{flex:1,width:'93%',alignSelf:'center',paddingTop:20}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',width:'40%',alignItems:'center'}}>
                     <TouchableOpacity style={{width:'23%',backgroundColor:'#fff',borderRadius:5}} onPress={()=>this.props.navigation.goBack()}>
                        <Icon name='chevron-back-outline' type='ionicon' size={35}/>
                     </TouchableOpacity>
                     <Text style={{fontSize:RFValue(15,580),fontWeight:'600',paddingLeft:10,color:'black'}}>Filters</Text>
                    </View>
                    
                    <TouchableOpacity style={{width:'10%',backgroundColor:'#fff',justifyContent:'center',borderRadius:5}} onPress={()=>this.props.navigation.navigate('cart')}>
                        <Icon name='lock-closed-outline' type='ionicon' size={25}/>
                    </TouchableOpacity>
                </View>

                <Text style={{fontSize:RFValue(15,580),fontWeight:'500',color:'black',marginTop:30,marginBottom:20}}>Sort by</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={styler.sortby}><Text style={styler.sortbyText}>Lowest</Text></View>
                    <View style={styler.sortby}><Text style={styler.sortbyText}>highest</Text></View>
                    <View style={styler.sortby}><Text style={styler.sortbyText}>Best</Text></View>
                    <View style={styler.sortby}><Text style={styler.sortbyText}>Newest</Text></View>
                </View>

                <Text  style={{fontSize:RFValue(15,580),fontWeight:'500',color:'black',marginVertical:20}}>Filter</Text>
                <RangeSlider/>
                <Text style={{fontSize:RFValue(15,580),fontWeight:'500',color:'black',marginVertical:20}}>Categories</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={styler.sortby2}><Text style={styler.sortbyText}>Juice</Text></View>
                    <View style={styler.sortby2}><Text style={styler.sortbyText}>Fruits</Text></View>
                    <View style={styler.sortby2}><Text style={styler.sortbyText}>Vegetable</Text></View>
                    <View style={styler.sortby2}><Text style={styler.sortbyText}>Milk</Text></View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={styler.sortby2}><Text style={styler.sortbyText}>Rice</Text></View>
                    <View style={styler.sortby2}><Text style={styler.sortbyText}>seafood</Text></View>
                    <View style={styler.sortby2}><Text style={styler.sortbyText}>meats</Text></View>
                    <View style={styler.sortby2}><Text style={styler.sortbyText}>bakery</Text></View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={styler.sortby2}><Text style={styler.sortbyText}>Frozen products</Text></View>
                    <View style={styler.sortby2}><Text style={styler.sortbyText}>Household</Text></View>
                    <View style={styler.sortby2}><Text style={styler.sortbyText}>Baby and kids</Text></View>     
                </View>

                <TouchableOpacity style={{backgroundColor:'orange',height:50,borderRadius:10,alignItems:'center',justifyContent:'center',marginTop:'30%'}}>
                    <Text style={{fontSize:RFValue(15,580),fontWeight:'500',color:'black'}}>Apply</Text>
                </TouchableOpacity>



            </View>
        )
    }
}
const styler=StyleSheet.create(
    {
      sortby:{
        backgroundColor:'white',
        borderRadius:5,
        width:'23%',
        alignItems:'center'
        },
    sortby2:{
            // backgroundColor:'white',
            borderRadius:5,
            paddingHorizontal:5,
            paddingVertical:10,
            // width:'23%',
            alignItems:'center'
            },
      sortbyText:{
            fontSize:RFValue(13,580),
            paddingVertical:3
        }
    }
)
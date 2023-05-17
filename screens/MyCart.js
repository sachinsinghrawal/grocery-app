import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Icon, Header, CheckBox} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
import RBSheet from 'react-native-raw-bottom-sheet';

const DATA = [
  {
    id: '1',
    img: require('../imgs/a1.png'),
    title: 'Fruits kjalhgklajvjga;gvjkanahol;vmajkljv,.,.amnlajouoak,.nb',
    color: 'pink'
  },
  {
    id: '2',
     img: require('../imgs/a2.png'),
     title: 'Juice kjalhgklajvjga;gvjkanahol;vmajkljv,.,.amnlajouoak,.nb', 
     color: 'skyblue'
    },
  {
    id: '3', 
    img: require('../imgs/a3.png'), 
    title: 'Meat kjalhgklajvjga;gvjkanahol;vmajkljv,.,.amnlajouoak,.nb', 
    color: 'gold'},
  {
    id: '4',
    img: require('../imgs/a4.png'),
    title: 'Vegetable kjalhgklajvjga;gvjkanahol;vmajkljv,.,.amnlajouoak,.nb',
    color: 'lightgreen',
  },
  {
    id: '5', 
    img: require('../imgs/a5.png'), 
    title: 'rice kjalhgklajvjga;gvjkanahol;vmajkljv,.,.amnlajouoak,.nb', 
    color: 'pink'
  },
  {
    id: '6', 
    img: require('../imgs/a6.png'), 
    title: 'oils kjalhgklajvjga;gvjkanahol;vmajkljv,.,.amnlajouoak,.nb', 
    color: 'orange'
  },
  {
    id: '7',
    img: require('../imgs/a1.png'),
    title: 'dryfruits kjalhgklajvjga;gvjkanahol;vmajkljv,.,.amnlajouoak,.nb',
    color: 'skyblue',
  },
  {
    id: '8', 
    img: require('../imgs/a7.png'), 
    title: 'more kjalhgklajvjga;gvjkanahol;vmajkljv,.,.amnlajouoak,.nb', 
    color: '#d1eba2'
  },
];

export default class MyCart extends Component {
  state = {
    count: 1,
    selectedIndex:1,
    add:false
  };

  renderLeftComponent = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', width: 200}}>
        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}> 
          <Icon name="chevron-back-outline" type="ionicon" size={25} color='white'/>
        </TouchableOpacity>

        <Text
          style={{
            paddingLeft: 10,
            fontSize: RFValue(14, 580),
            fontWeight: '700',
            color:'white'
          }}>
          My Cart
        </Text>
      </View>
    );
  };

  renderItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding:10,
          marginHorizontal:8,
          borderBottomWidth:0.5
        }}>
        <View style={{borderWidth:0.5}}>
          <Image
            source={require('../imgs/profile.png')}
            style={{height: 100, width: 100}}
          />
        </View>
        <View style={{width: '70%'}}>
          <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
            <Text>HAIR CARE</Text>
            <Icon name="trash-bin-outline" type="ionicon" size={20} />
          </View>
          <Text>{item.title}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>{this.state.count}*₹250</Text>
            <Text>{this.state.count * 250}</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'flex-end',height:20}}>
            <TouchableOpacity
              style={styles.alterbutton}
              onPress={() => {
                this.setState({count: this.state.count - 1});
              }}>
              <Icon name="remove-outline" type="ionicon" size={20} />
            </TouchableOpacity>

            <View style={styles.alterEntry}>
              <Text style={{fontSize: RFValue(11, 580), color: 'black'}}>
                {this.state.count}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.alterbutton}
              onPress={() => {
                this.setState({count: this.state.count + 1});
              }}>
              <Icon name="add-outline" type="ionicon" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  renderItem2=()=>{
    return(
      <View style={{flexDirection:'row',justifyContent:'space-between',height:90,borderBottomWidth:0.5,paddingVertical:15,paddingHorizontal:10}}>
        <View style={{width:'60%'}}>
          <Text>Sachin singh</Text>
          <Text>17/1,aman vihar,shimla bypass,chandigarh,India,248007</Text>
        </View>
        <View style={{width:'14%'}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:'100%'}}>
            <Icon name='create-outline' type='ionicon' size={20}/>
            <Icon name='trash-bin-outline' type='ionicon' size={20}/>
          </View>
        </View>
      </View>
    )
  }
  AddNote=()=>{
    if(this.state.add==true)
    {
      return (
        <TextInput placeholder='add notes' style={{width:'95%',alignSelf:'center',shadowColor:'black',elevation:10,backgroundColor:'#fff',marginBottom:10,borderRadius:10}}/>
      )
    }
  }

  render() {
    return (
      <View>
        <ScrollView>
          <Header
            leftComponent={this.renderLeftComponent}
            containerStyle={{backgroundColor:'#faab5c'}}
          />

          <View style={{marginTop: 10,}}>
            <FlatList
              data={DATA}
              numColumns={1}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
              // horizontal={true}
              // showsVeticalScrollIndicator={false}
            />
          </View>

          {/* addmoreButton */}
          <TouchableOpacity style={{height:50,backgroundColor:'#f0c190',justifyContent:'center',alignItems:'center',marginBottom:5}} onPress={()=>this.props.navigation.navigate('search')}>
            <Text style={{color:'red',fontSize:RFValue(14,580),fontWeight:'600'}}>
              Add more Product
            </Text>
          </TouchableOpacity>
          
          {/* address section  */}
          <View style={{flexDirection:'row',marginBottom:10,padding:10,borderBottomWidth:1,borderTopWidth:1,justifyContent:'space-between'}}>
            <View>
              <Text>Change Address</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{backgroundColor:'silver',marginRight:10}}><Icon name='location-outline' type='ionicon' size={30}/></View>
                <Text>Sunaina,lakhi bagh,17/1,dehradun,Uttarakhand</Text>
              </View>             
            </View>
            <TouchableOpacity onPress={()=>{this.RBSheet.open();}}>
             <Text style={{color:'red'}}>change</Text>
            </TouchableOpacity>            
          </View>
           
          {/* deliveryMethod  */}
          <View style={{flexDirection:'row',justifyContent:'center'}}>
            <View style={{alignItems:'center'}}>
              <CheckBox
                checked={this.state.selectedIndex == 1}
                onPress={() => this.setState({selectedIndex:1})}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              />
              <Text style={{marginTop:-15}}>Delivery</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <CheckBox
                checked={this.state.selectedIndex == 2}
                onPress={() => this.setState({selectedIndex:2})}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              />
              <Text style={{marginTop:-15}}>Pick-up</Text>
            </View>            
          </View>
          
          <View style={{borderBottomWidth:1,}}>
           <View style={{flexDirection:'row',justifyContent:'space-between',padding:5}}>
            <Text>Delivery instruction</Text>
            <TouchableOpacity onPress={()=>{this.setState({add:!this.state.add})}}><Text style={{color:'red'}}>+ Add notes</Text></TouchableOpacity>
           </View>
           {this.AddNote()}
          </View>
          

          <Text style={{padding:5}}>Price Details</Text>

          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5,padding:5}}> 
            <View>
              <Text>Total Price</Text>
              <Text>{'(inclusive of all taxes)'}</Text>
            </View>
            <Text>₹ 8000/-</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10,padding:5}}>
              <Text>Total Price</Text>
              <Text>₹780/-</Text>
            </View>

          <TouchableOpacity style={{height:50,backgroundColor:'#faab5c',justifyContent:'center',alignItems:'center',marginBottom:20}} onPress={()=>this.props.navigation.navigate('checkout')}>
            <Text style={{color:'red',fontSize:RFValue(14,580),fontWeight:'600'}}>
              Checkout
            </Text>
          </TouchableOpacity>

          {/* RBSheet */}
          <RBSheet
                ref={ref => {
                  this.RBSheet = ref;
                }}
                height={400}
                openDuration={250}
                customStyles={{
                  container: {borderTopLeftRadius: 15, borderTopRightRadius: 15,paddingBottom:60},
                }}>
              <View>

                <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,padding:10,alignItems:'center'}}>
                  <Text> CHANGE ADDRESS</Text>
                  <TouchableOpacity style={{borderWidth:1,paddingVertical:5,paddingHorizontal:10,borderRadius:10}} onPress={()=>this.props.navigation.navigate('address')}>
                    <Text>ADD NEW</Text>
                  </TouchableOpacity>
                </View>

                <FlatList
                data={DATA}
                numColumns={1}
                renderItem={this.renderItem2}
                keyExtractor={item => item.id}
                // horizontal={true}
                // showsVeticalScrollIndicator={false}
               />

              </View>
          </RBSheet>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  alterbutton: {
    backgroundColor: 'rgb(211, 211, 211)',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  alterEntry: {
    width: 30,
    backgroundColor: 'rgb(229, 228, 226)',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    
  },
});

import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView, Button, FlatList, Dimensions } from "react-native";
import { Icon, Header, SearchBar } from 'react-native-elements'
import { RFValue } from "react-native-responsive-fontsize";

// import {
//   // SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';

// const insets = useSafeAreaInsets();

const DATA = [
  { id: '1', img: require('../imgs/a1.png'), title: 'Fruits', color: 'pink' },
  { id: '2', img: require('../imgs/a2.png'), title: 'Juice', color: 'skyblue' },
  { id: '3', img: require('../imgs/a3.png'), title: 'Meat', color: 'gold' },
  { id: '4', img: require('../imgs/a4.png'), title: 'Vegetable', color: 'lightgreen' },
  { id: '5', img: require('../imgs/a5.png'), title: 'rice', color: 'pink' },
  { id: '6', img: require('../imgs/a6.png'), title: 'oils', color: 'orange' },
  { id: '7', img: require('../imgs/a1.png'), title: 'dryfruits', color: 'skyblue' },
  { id: '8', img: require('../imgs/a7.png'), title: 'more', color: '#d1eba2' },
];

export default class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ''
    }
  }

  //for header left component
  renderLeftComponent() {
    return (
      <View style={{ width: win.width / 2 }}>
        <TouchableOpacity style={styler.topNav} onPress={() => this.props.navigation.openDrawer()}><Icon name='menu-outline' type='ionicon' size={30} /></TouchableOpacity>
      </View>

    )
  }

  //for header right component
  renderRightComponent() {
    return (
      <TouchableOpacity style={styler.topNav} onPress={() => this.props.navigation.navigate('cart')}><Icon name='lock-closed-outline' type='ionicon' size={25} /></TouchableOpacity>
    )
  }

  renderItem = ({ item }) => {
    return (
      <View
        style={{
          width: Dimensions.get('screen').width / 4.2,
          height: Dimensions.get('screen').height / 8,
          borderRadius: 15,
          marginVertical: 6,
          justifyContent: 'center',
          // // Paddings to handle safe area
          // paddingTop: insets.top,
          // paddingBottom: insets.bottom,
          // paddingLeft: insets.left,
          // paddingRight: insets.right,
        }}>
        <TouchableOpacity >
          <View
            style={{
              height: '70%',
              width: '75%',
              justifyContent: 'center',
              backgroundColor: '#fff',
              alignSelf: 'center',
              alignItems: 'center',
              borderRadius: 15,
              shadowColor: '#52006A',
              elevation: 5,
              backgroundColor: item.color,
              borderWidth: 0.5
            }}>
            <View>
              <Image source={item.img} style={{ height: 40, width: 40 }}></Image>
            </View>
          </View>

          <View>
            <Text
              style={{
                alignSelf: 'center',
                color: 'black',
                fontWeight: '800',
                paddingTop: 5,
              }}>
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  renderItem2 = ({ item }) => {
    return (
      <TouchableOpacity style={{ width: "47%", height: Dimensions.get('window').height / 3.2, justifyContent: "space-between", backgroundColor: item.color, margin: 10, marginHorizontal: 5, borderRadius: 20, shadowColor: 'black', elevation: 5, borderWidth: 0.5 }}
        onPress={() => { this.props.navigation.navigate('item') }}>
        <View style={{ flexDirection: "row", justifyContent: 'space-between', padding: 10 }}>
          <View>
            <Text style={{ fontSize: RFValue(13, 580), fontWeight: '600', color: 'black' }}>Apple</Text>
            <Text style={{ color: 'black', fontWeight: '600' }}>10 KG</Text>
            <Text style={{ fontSize: RFValue(13, 580), fontWeight: '600', color: 'black' }}>₹250</Text>
          </View>
          <View><Icon name='ellipsis-horizontal-outline' type="ionicon" size={30} /></View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: '3%' }}>
          <Image source={require('../imgs/pizza.png')} style={{ height: 110, width: 110 }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <View style={{
            width: '25%', height: 42, justifyContent: 'center', borderTopLeftRadius: 20,
            borderBottomRightRadius: 20, borderColor: 'red', borderWidth: 1
          }}>
            <Icon name="add-outline" type="ionicon" size={20} />
          </View>
        </View>

      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{ flex: 1, alignSelf: 'center' }}>
        <ScrollView showsVerticalScrollIndicator={false}>


          {/* top navigation */}
          <Header
            statusBarProps={{ barStyle: 'light-content' }}
            leftComponent={this.renderLeftComponent()}
            rightComponent={this.renderRightComponent()}
            containerStyle={{
              backgroundColor: '#F2F2F2',
            }}

          />

          {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <TouchableOpacity style={styler.topNav} onPress={() => this.props.navigation.openDrawer()}><Icon name='menu-outline' type='ionicon' size={30} /></TouchableOpacity>
            <TouchableOpacity style={styler.topNav} onPress={() => this.props.navigation.navigate('cart')}><Icon name='lock-closed-outline' type='ionicon' size={25} /></TouchableOpacity>
          </View> */}

          {/* title  */}
          <View style={styler.title}>
            <Text style={{ fontSize: RFValue(16, 580), fontWeight: '700', color: 'black' }}>
              Hey Sowkot,
            </Text>
            <Text style={{ fontSize: RFValue(11, 580) }}>
              Find Fresh Grocery Products !
            </Text>
          </View>

          {/* search section  */}
          {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '85%', borderWidth: 0.5, borderRadius: 10, backgroundColor: '#fff' }}>
              <Icon name='search-outline' size={25} type="ionicon" />
              <View style={{ width: '75%' }}>
                <TextInput placeholder=" Search your Products" />
              </View>
              <TouchableOpacity >
                <Icon name='close-outline' type="ionicon" size={30} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={[styler.topNav, { borderWidth: 0.5, borderRadius: 10 }]} onPress={() => this.props.navigation.navigate('map')}>
              <Icon name='location-outline' type="ionicon" size={30} />
            </TouchableOpacity>

          </View> */}

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, width: "100%" }}>

            <SearchBar placeholder="Search Products"
              lightTheme
              placeholderTextColor="#5d5d5d"
              clearIcon
              onClear={() => this.setState({ data: [] })}
              value={this.state.data}
              ref={ref => (this.textInputRef = ref)}
              onChangeText={e => console.log(e)}
              inputContainerStyle={{ backgroundColor: "white", height: 3, paddingBottom: 5, }}
              style={{ fontSize: 14, }}
              containerStyle={{
                backgroundColor: "white", color: "#fff", alignSelf: "center",
                width: "80%", height: 45, borderRadius: 10,left: 10
              }}
            />
            <TouchableOpacity style={styler.box} onPress={() => this.props.navigation.navigate('map')}>
              <Icon name='location-outline' type="ionicon" size={30} />
            </TouchableOpacity>
          </View>

          <View style={{ marginLeft: -5, marginTop: 10 }}>
            <FlatList
              data={DATA}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <Text style={{ fontSize: RFValue(16, 580), fontWeight: '800', color: 'black',paddingLeft:10 }}>
            Exclusive
          </Text>

          <View style={{ marginTop: 10 }}>
            <FlatList
              data={DATA}
              numColumns={2}
              renderItem={this.renderItem2}
              keyExtractor={item => item.id}
            // horizontal={true}
            showsVeticalScrollIndicator={false}
            />
          </View>

        </ScrollView>
      </View>

    )
  }
}

const win = Dimensions.get('window');

const styler = StyleSheet.create({
  topNav: {
    width: 50,
    backgroundColor: '#fff',
    // shadowColor:'black',
    // elevation:10,
    borderRadius: 5,
    // alignItems:'center',
    justifyContent: 'center',
    height: 50
  },
  title: {
    // height:100,
    // backgroundColor:'gold',
    padding: 10
  },
  box:{
    width: 45,
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    height: 45,
    right: 10
  }
}) 
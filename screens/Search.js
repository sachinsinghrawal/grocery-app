import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';

const DATA = [
  {id: '1', img: require('../imgs/a1.png'), title: 'Apple', color: 'pink'},
  {id: '2', img: require('../imgs/a2.png'), title: 'Orange', color: 'skyblue'},
  {id: '3', img: require('../imgs/a3.png'), title: 'Banana', color: 'gold'},
  {id: '4',img: require('../imgs/a4.png'),title: 'Water M.',color: 'lightgreen',},
  {id: '5', img: require('../imgs/a5.png'), title: 'Grapes', color: 'pink'},
  {id: '6', img: require('../imgs/a6.png'), title: 'Avacado', color: 'orange'},
  {
    id: '7',
    img: require('../imgs/a1.png'),
    title: 'Pineapple',
    color: 'skyblue',
  },
  {id: '8', img: require('../imgs/a7.png'), title: 'more', color: '#d1eba2'},
];

export default class Search extends Component {
  renderItem = ({item}) => {
    return (
      <View
        style={{
          width: '47.5%',
          height: 220,
          backgroundColor: '#fff',
          marginBottom: 10,
          marginHorizontal: 5,
          borderRadius: 10,
          padding: 5,
          shadowColor: 'black',
          elevation: 5,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '60%',
            backgroundColor: item.color,
            borderRadius: 10,
            marginBottom: '5%',
          }}>
          <Image
            source={require('../imgs/pizza.png')}
            style={{height: 100, width: 100}}
          />
        </View>

        <Text style={{fontSize: RFValue(13, 580), fontWeight: '600'}}>
          {item.title}
          <Text> 10kg </Text>
        </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="star" type="ionicon" size={13} color="orange" />
          <Text> 4.5 {'(560 reviews)'} </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{textDecorationLine: 'line-through'}}>₹290.00</Text>
          <Text style={{color: 'black', fontWeight: '600'}}>₹250.00</Text>
          <View style={{backgroundColor: 'orange', borderRadius: 3}}>
            <Icon name="add" type="ionicon" size={20} />
          </View>
        </View>
      </View>
    );
  };
  renderRightComponent = () => {
    return (
      <TouchableOpacity
        style={{
          width: 45,
          height:42,
          backgroundColor: '#fff',
          justifyContent: 'center',
          borderRadius: 5,
          shadowColor:'black',
          elevation:5
        }}
        onPress={() => this.props.navigation.navigate('cart')}>
        <Icon name="lock-closed-outline" type="ionicon" size={25} />
      </TouchableOpacity>
    );
  };

  renderLeftComponent = () => {
    return (
      <TouchableOpacity
        style={{width: 45, height:42, backgroundColor: '#fff', borderRadius: 5,justifyContent: 'center',shadowColor:'black',
        elevation:5}}
        onPress={() => this.props.navigation.goBack()}>
        <Icon name="chevron-back-outline" type="ionicon" size={30} />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{flex: 1, width: '93%', alignSelf: 'center', paddingTop: 5}}>
        <Header
          leftComponent={this.renderLeftComponent()}
          rightComponent={this.renderRightComponent()}
          containerStyle={{backgroundColor:'#F2F2F2',paddingHorizontal:0}}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: '85%',
              borderWidth: 0.5,
              borderRadius: 10,
              backgroundColor: '#fff',
            }}>
            <Icon name="search-outline" size={25} type="ionicon" />
            <View style={{width: '75%'}}>
              <TextInput placeholder=" Search your Products" />
            </View>
            <TouchableOpacity>
              <Icon name="close-outline" type="ionicon" size={30} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styler.topNav2}
            onPress={() => {
              this.props.navigation.navigate('filter');
            }}>
            <Icon name="options-outline" type="ionicon" size={30} />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              fontSize: RFValue(13, 580),
              fontWeight: '800',
              marginTop: 17,
              marginBottom: 10,
              color: 'black',
            }}>
            {' '}
            Search Result for 'Fruits'
          </Text>

          <View style={{marginTop: 10}}>
            <FlatList
              data={DATA}
              numColumns={2}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styler = StyleSheet.create({
  topNav: {
    width: '12%',
    backgroundColor: '#fff',
    // shadowColor:'black',
    // elevation:10,
    borderRadius: 5,
    // alignItems:'center',
    justifyContent: 'center',
    height: 40,
  },
  topNav2: {
    width: '12%',
    backgroundColor: 'orange',
    // shadowColor:'black',
    // elevation:10,
    borderRadius: 5,
    // alignItems:'center',
    justifyContent: 'center',
    height: 48,
  },
  title: {
    // height:100,
    // backgroundColor:'gold',
    marginTop: 10,
  },
});

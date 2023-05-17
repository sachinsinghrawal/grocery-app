import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  FlatList,
  Dimensions,
} from 'react-native';
import {Icon, Header, SearchBar} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const DATA = [
  {id: '1', img: require('../imgs/a1.png'), title: 'Fruits', color: 'pink'},
  {id: '2', img: require('../imgs/a2.png'), title: 'Juice', color: 'skyblue'},
  {id: '3', img: require('../imgs/a3.png'), title: 'Meat', color: 'gold'},
  {
    id: '4',
    img: require('../imgs/a4.png'),
    title: 'Vegetable',
    color: 'lightgreen',
  },
  {id: '5', img: require('../imgs/a5.png'), title: 'rice', color: 'pink'},
  {id: '6', img: require('../imgs/a6.png'), title: 'oils', color: 'orange'},
  {
    id: '7',
    img: require('../imgs/a1.png'),
    title: 'dryfruits',
    color: 'skyblue',
  },
  {id: '8', img: require('../imgs/a7.png'), title: 'more', color: '#d1eba2'},
];

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      categories: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetch_category();
  }

  fetch_category = () => {
    fetch(global.api + 'fetch-home-data-web', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // console.warn(json)
        if (json.status) {
          this.setState({categories: json.category});
        } else {
          this.setState({categories: []});
        }
      })
      .catch(error => {
        console.warn(error);
      })
      .finally(() => {
        this.setState({isLoading: false});
      });
  };

  //for header left component
  renderLeftComponent() {
    return (
      <TouchableOpacity
        style={styler.topNav}
        onPress={() => this.props.navigation.openDrawer()}>
        <Icon name="menu-outline" type="ionicon" size={30} />
      </TouchableOpacity>
    );
  }

  //for header right component
  renderRightComponent() {
    return (
      <TouchableOpacity
        style={styler.topNav}
        onPress={() => this.props.navigation.navigate('cart')}>
        <Icon name="lock-closed-outline" type="ionicon" size={25} />
      </TouchableOpacity>
    );
  }

  renderItem = ({item}) => {
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
        <TouchableOpacity>
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
              backgroundColor: 'white',
              borderWidth: 0.5,
            }}>
            <View>
              <Image
                source={{uri: global.img_url + item.image}}
                style={{height: 40, width: 40,borderRadius:10}}></Image>
            </View>
          </View>

          <View>
            <Text
              style={{
                alignSelf: 'center',
                color: 'black',
                fontWeight: '800',
                paddingTop: 5,
                fontSize:RFValue(9,580)
              }}>
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  renderItem2 = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          width: '47%',
          height: Dimensions.get('window').height / 3.2,
          justifyContent: 'space-between',
          backgroundColor: item.color,
          margin: 10,
          marginHorizontal: 5,
          borderRadius: 20,
          shadowColor: 'black',
          elevation: 5,
          borderWidth: 0.5,
        }}
        onPress={() => {
          this.props.navigation.navigate('item');
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <View>
            <Text
              style={{
                fontSize: RFValue(13, 580),
                fontWeight: '600',
                color: 'black',
              }}>
              Apple
            </Text>
            <Text style={{color: 'black', fontWeight: '600'}}>10 KG</Text>
            <Text
              style={{
                fontSize: RFValue(13, 580),
                fontWeight: '600',
                color: 'black',
              }}>
              ₹250
            </Text>
          </View>
          <View>
            <Icon name="ellipsis-horizontal-outline" type="ionicon" size={30} />
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '3%',
          }}>
          <Image
            source={require('../imgs/pizza.png')}
            style={{height: 110, width: 110}}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <View
            style={{
              width: '25%',
              height: 42,
              justifyContent: 'center',
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderColor: 'red',
              borderWidth: 1,
            }}>
            <Icon name="add-outline" type="ionicon" size={20} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <ScrollView>
        <View style={{flex: 1, width: '93%', alignSelf: 'center'}}>
          {/* top navigation */}
          {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <TouchableOpacity
              style={styler.topNav}
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu-outline" type="ionicon" size={30} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styler.topNav}
              onPress={() => this.props.navigation.navigate('cart')}>
              <Icon name="lock-closed-outline" type="ionicon" size={25} />
            </TouchableOpacity>
          </View> */}
          <Header
            statusBarProps={{barStyle: 'light-content'}}
            leftComponent={this.renderLeftComponent()}
            rightComponent={this.renderRightComponent()}
            containerStyle={{
              backgroundColor: '#F2F2F2',
              paddingHorizontal: 0,
            }}
          />

          {/* title  */}
          <View style={styler.title}>
            <Text
              style={{
                fontSize: RFValue(16, 580),
                fontWeight: '700',
                color: 'black',
              }}>
              Hey AAA,
            </Text>
            <Text style={{fontSize: RFValue(11, 580)}}>
              Find Fresh Grocery Products !
            </Text>
          </View>

          {/* swiperflatlist  */}
                   
          <View style={styles.container}>
            <SwiperFlatList
              autoplay
              autoplayDelay={2}
              autoplayLoop
              index={0}
              showPagination
              // paginationStyle={{}}
              paginationStyleItem={{height: 10, width: 10,shadowColor:'black',elevation:5}}>
              <View style={styles.child}>
                {/* <Text style={styles.text}>1</Text> */}
                <Image
                  source={require('../imgs/sf1.png')}
                  style={{
                    height:120,
                    width:'92%',
                    borderRadius: 15,
                    marginRight: 100,
                    borderColor: 'white',
                    borderWidth: 3,
                  }}
                />
              </View>
              <View style={[styles.child]}>
                {/* <Text style={styles.text}>2</Text> */}
                <Image
                  source={require('../imgs/sf2.png')}
                  style={{
                    height:120,
                    width:'92%',
                    borderRadius: 15,
                    marginRight: 100,
                    borderColor: 'white',
                    borderWidth: 3,
                  }}
                />
              </View>
              <View style={[styles.child]}>
                {/* <Text style={styles.text}>3</Text> */}
                <Image
                  source={require('../imgs/sf3.png')}
                  style={{
                    height:120,
                    width:'92%',
                    borderRadius: 15,
                    marginRight: 100,
                    borderColor: 'white',
                    borderWidth: 3,
                  }}
                />
              </View>
              <View style={[styles.child]}>
                {/* <Text style={styles.text}>4</Text> */}
                <Image
                  source={require('../imgs/sf4.png')}
                  style={{
                    height:120,
                    width:'92%',
                    borderRadius: 15,
                    marginRight: 100,
                    borderColor: 'white',
                    borderWidth: 3,
                  }}
                />
              </View>
              <View style={[styles.child]}>
                {/* <Text style={styles.text}>4</Text> */}
                <Image
                  source={require('../imgs/sf5.png')}
                  style={{
                    height:120,
                    width:'92%',
                    borderRadius: 20,
                    marginRight: 100,
                    borderColor: 'white',
                    borderWidth: 3,
                  }}
                />
              </View>
            </SwiperFlatList>
          </View>


          {/* search section  */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              // marginTop: ,
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
              style={{
                width: 45,
                backgroundColor: '#fff',
                borderWidth: 0.5,
                borderRadius: 10,
                borderRadius: 5,
                justifyContent: 'center',
                height: 48,
              }}
              onPress={() => this.props.navigation.navigate('map')}>
              <Icon name="location-outline" type="ionicon" size={30} />
            </TouchableOpacity>
          </View>

          <View style={{marginLeft: -5, marginTop: 10}}>
            <FlatList
              data={this.state.categories}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <Text
            style={{
              fontSize: RFValue(16, 580),
              fontWeight: '800',
              color: 'black',
            }}>
            Exclusive
          </Text>

          <View style={{marginTop: 10}}>
            <FlatList
              data={DATA}
              numColumns={2}
              renderItem={this.renderItem2}
              keyExtractor={item => item.id}
              // horizontal={true}
              // showsVeticalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styler = StyleSheet.create({
  topNav: {
    width: 45,
    backgroundColor: '#fff',
    shadowColor: 'black',
    elevation: 5,
    borderRadius: 5,
    // alignItems:'center',
    justifyContent: 'center',
    height: 42,
  },
  title: {
    // height:100,
    // backgroundColor:'gold',
    // marginTop: 0,
  },
});

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height * 0.21,
    // margin:'3%',
    // borderRadius:15,
    // borderWidth:2,
    // paddingVertical:20,
    // borderColor:'white',
    marginTop: 10,
    // overflow:'hidden'
  },
  child: {
    height: height * 0.16,
    width,
    justifyContent: 'center',
    // marginHorizontal:50,
    // overflow:'hidden',
  }
});
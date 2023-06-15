import 'react-native-gesture-handler';
import {AuthContext} from './AuthContext';
import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SwiperComponent from './screens/SwiperComponent';
import Toast from 'react-native-toast-message';
import {Icon} from 'react-native-elements';
import SignUp from './screens/SignUp';
import Otp from './screens/otp';
import Profile from './screens/Profile';
import HomePage from './screens/HomePage';
import Search from './screens/Search';
import Favourite from './screens/Favourite';
import Notification from './screens/Notification';
import Filter from './screens/filter';
import Item from './screens/item';
import Mprofile from './screens/Mprofile';
import GoogleMap from './screens/map';
import CheckOut from './screens/checkout';
import MyCart from './screens/MyCart';
import Address from './screens/Address';
import Thanks from './screens/thanks';
import Ongoing from './screens/Ongoing';
import History from './screens/history';
import MyOrders from './screens/MyOrders';
import OrderDetails from './screens/orderDetails';
import OrderTrack from './screens/orderTrack';
import DeliveryDetails from './screens/DeliveryDetails';
import Inside from './screens/Inside';
import contextDemo from './screens/contextDemo';

global.api = 'https://api.kiranmegamarket.in/api/';
global.api2 = 'https://beta-dine-api.weazy.in/api/';
global.img_url = 'https://cdn.kiranmegamarket.in/';

// top navigation
const TabTop = createMaterialTopTabNavigator();

export class MyTab extends Component {
  render() {
    return (
      <TabTop.Navigator>
        <TabTop.Screen name="ongoing" component={Ongoing} />
        <TabTop.Screen name="History" component={History} />
      </TabTop.Navigator>
    );
  }
}

// Bottom navigation
const Tab = createBottomTabNavigator();

class TabNav extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          title: '',
          tabBarStyle: {backgroundColor: '#fff'},
          headerShown: false,
          tabBarIcon: ({focused, color, tintColor}) => {
            let iconName;
            if (route.name == 'Home') {
              return (
                <Icon
                  name={focused ? 'home' : 'home-outline'}
                  type="ionicon"
                  color={focused ? '#fa7051' : 'gray'}
                  size={30}
                />
              );
            } else if (route.name == 'search') {
              return (
                <Icon
                  name={focused ? 'earth' : 'earth-outline'}
                  type="ionicon"
                  color={focused ? '#fa7051' : 'gray'}
                  size={30}
                />
              );
            } else if (route.name == 'favourite') {
              return (
                <Icon
                  name={focused ? 'bookmark' : 'bookmark-outline'}
                  type="ionicon"
                  color={focused ? '#fa7051' : 'gray'}
                  size={30}
                />
              );
            } else if (route.name == 'notification') {
              return (
                <Icon
                  name={focused ? 'reader' : 'reader-outline'}
                  type="ionicon"
                  color={focused ? '#fa7051' : 'gray'}
                  size={30}
                />
              );
            } else if (route.name == 'orders') {
              return (
                <Icon
                  name={focused ? 'cube' : 'cube-outline'}
                  type="ionicon"
                  color={focused ? '#fa7051' : 'gray'}
                  size={30}
                />
              );
            } else if (route.name == 'ProFile') {
              return (
                <Icon
                  name={focused ? 'person' : 'person-outline'}
                  type="ionicon"
                  color={focused ? '#fa7051' : 'gray'}
                  size={30}
                />
              );
            }
            return (
              <Icon name={iconName} color={color} type="ionicon" size={30} />
            );
          },
        })}>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="search" component={Search} />
        <Tab.Screen name="favourite" component={Favourite} />
        <Tab.Screen name="notification" component={Notification} />
        <Tab.Screen name="orders" component={MyOrders} />
        <Tab.Screen name="ProFile" component={Mprofile} />
      </Tab.Navigator>
    );
  }
}

// Drawer navigation
const Drawer = createDrawerNavigator();

class DrawerComponent extends Component {
  render() {
    return (
      <Drawer.Navigator
        // drawerContent={props => <DrawerData {...props} />}
        screenOptions={({route}) => ({
          swipeEnabled: true,
          headerShown: false,
        })}>
        <Drawer.Screen name="HOME" component={TabNav} />
        <Drawer.Screen name="Address" component={Address} />
      </Drawer.Navigator>
    );
  }
}

class DrawerData extends Component {
  render() {
    return (
      <View>
        <Text>HELLO DRAWER</Text>
      </View>
    );
  }
}

// stack navigation
const Stack = createNativeStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      islogin: true,
      Login:'',
      step: 'done',
      // netconnected: true,
      user: [],
      token: '',
      role: [{ role: 'owner', name: 'admin',  }]
    };
  }
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);


    // NetInfo.addEventListener(state => {
    //   this.handleConnectivityChange(state.isConnected);
    // });


    // AsyncStorage.getItem('@auth_login', (err, result) => {

    //   if (JSON.parse(result) != null) {

    //     // global.token = JSON.parse(result).token;
    //     // global.vendor = JSON.parse(result).vendor_id;
    //     // global.step = this.state.step
    //     global.msg = "Welcome Back"
    //     this.setState({ token: JSON.parse(result).token });
    //     this.setState({ islogin: true })
    //     this.get_profile(JSON.parse(result).token);
    //   }
    //   else {
    //     this.logout();
    //   }
    // });
  }

  read_user = async () => {
    try {
      const name = await AsyncStorage.getItem('login');
      this.read_user2();
      // const email = await AsyncStorage.getItem('email');
      this.setState({Login:name});
    } catch (e) {
      console.warn(e);
    }
  };

  read_user2 = async () => {
    try {
      const name = await AsyncStorage.getItem('login');
      alert(name);
      
    } catch (e) {
      console.warn(e);
    }
  };

  login = (step, user, role, token) => {
    this.setState({ islogin: true, step: step, user: user, role: role, token: token });
    this.setState({ isloading: false });

    // window.Pusher = Pusher;
    // window.Echo = new Echo({
    //   broadcaster: 'pusher',
    //   // key: '714d1999a24b68c8bf87', // for production
    //   key: 'b8ba8023ac2fc3612e90', //for testing
    //   cluster: 'ap2',
    //   forceTLS: true,
    //   disableStats: true,
    //   authEndpoint: global.api + 'broadcasting/auth',
    //   auth: {
    //     headers: {
    //       Accept: 'application/json',
    //       Authorization: token,
    //     },
    //   },
    // });
  }

  logout = () => {
    this.setState({ islogin: false, token: '', user: [] });
    this.setState({ isloading: false })
  }

  get_profile = (token) => {
    console.log(global.api + 'get_vendor_profile');
    fetch(global.api + 'get_vendor_profile', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({

      })
    }).then((response) => response.json())
      .then((json) => {
        // console.warn(json);
        if (json.message == "Unauthenticated.") {
          this.loggedOut();
        }
        if (!json.status) {
          this.logout();
        }
        else {
          this.login(json.step, json.data[0], json.user, token);

          json.data.map(value => {
            // alert(value.category_type)
            global.category_type = value.category_type
          })
        }

        // global.vendor = this.state.id,
        //   global.pic = this.state.image,
        //   global.name = this.state.name
        return json;
      }).catch((error) => {
        console.error(error);
      }).finally(() => {
        this.setState({ isloading: false })

      });
  }

  loggedOut = () => {
    fetch(global.api + 'logout_vendor', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': global.token
      },
      body: JSON.stringify({

      })
    }).then((response) => response.json())
      .then((json) => {
        AsyncStorage.setItem('@auth_login', '')
        global.token = null;
        //  Toast.show("Logout Successfully!")
        this.logout();

      }).catch((error) => {
        console.error(error);
      }).finally(() => {
        this.setState({ isLoading: false })
      });

  }
  render() {
    // if (this.state.isloading) {
    //   return <Splash />;
    // } else {
    //   if (!this.state.netconnected) {
    //     return <></>
    //   } else {


        // this.read_user();

        return (
          <AuthContext.Provider
            value={{
              login: this.login,
              logout: this.logout,
              role: this.state.role,
              user: this.state.user,
              token: this.state.token,
              getProfile: this.get_profile,
            }}>
            <NavigationContainer>
              <Stack.Navigator
                // initialRouteName={'Home'}
                screenOptions={{headerShown: false}}>
                
                    <Stack.Screen name="Hm" component={SwiperComponent} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="otp" component={Otp} />
                    <Stack.Screen name="Profile" component={Profile} />
                 
                    <Stack.Screen name="drawer" component={DrawerComponent} />
                    {/* <Stack.Screen name="ila" component={contextDemo} />   */}
                    {/* <Stack.Screen name="Home" component={HomePage} /> */}
                    <Stack.Screen name="filter" component={Filter} />
                    <Stack.Screen name="item" component={Item} />
                    <Stack.Screen name="mProfile" component={Mprofile} />
                    <Stack.Screen name="orderTrack" component={OrderTrack} />
                    <Stack.Screen
                      name="deliveryDetails"
                      component={DeliveryDetails}
                    />
                    <Stack.Screen
                      name="orderDetails"
                      component={OrderDetails}
                    />
                    <Stack.Screen name="cart" component={MyCart} />
                    <Stack.Screen name="checkout" component={CheckOut} />
                    {/* <Stack.Screen name="srch" component={Search} /> */}
                    <Stack.Screen name="address" component={Address} />
                    <Stack.Screen name="thanks" component={Thanks} />
                    <Stack.Screen name="Inside" component={Inside} />
                    <Stack.Screen name="map" component={GoogleMap} />
                 
                
              </Stack.Navigator>
            </NavigationContainer>
          </AuthContext.Provider>
        );
      }
    }


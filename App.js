import 'react-native-gesture-handler';
import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SwiperComponent from './screens/SwiperComponent';
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
          swipeEnabled: false,
          headerShown: false,
        })}>
        <Drawer.Screen name="btmnav" component={TabNav} />
        <Drawer.Screen name="address" component={Address}/>
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

  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName={'Profile'}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Hm" component={SwiperComponent} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="otp" component={Otp} />
          <Stack.Screen name="Profile" component={Profile} />
          {/* <Stack.Screen name="tabNav" component={TabNav} /> */}
          <Stack.Screen name="filter" component={Filter} />
          <Stack.Screen name="item" component={Item} />
          <Stack.Screen name="mProfile" component={Mprofile} />
          <Stack.Screen name="orderTrack" component={OrderTrack} />
          <Stack.Screen name="deliveryDetails" component={DeliveryDetails} />
          <Stack.Screen name="orderDetails" component={OrderDetails} />
          <Stack.Screen name="cart" component={MyCart} />
          <Stack.Screen name="checkout" component={CheckOut} />
          <Stack.Screen name="srch" component={Search} />
          <Stack.Screen name="address" component={Address} />
          <Stack.Screen name="thanks" component={Thanks} />
          <Stack.Screen name="map" component={GoogleMap} />
          <Stack.Screen name="drawer" component={DrawerComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

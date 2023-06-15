import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {CheckBox, Header, Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';

export default class Inside extends Component {
  constructor(props) {
    super(props);
    // console.warn(this.props.route.params.next_page)
    this.state = {
      //   data: '',
      // categories: [],
      exclusive: [],
      data: [],
      page: 1,
      isLoading: true,
    };
  }
  componentDidMount() {
    this.fetch_staples(this.props.route.params.next_page);
  }

  centerComponent = () => {
    return (
      <Text style={{fontWeight: '600', fontSize: RFValue(15, 580)}}>
        {this.props.route.params.next_page}
      </Text>
    );
  };
  renderLeftComponent = () => {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
        <Icon name="chevron-back-outline" type="ionicon" size={25} />
      </TouchableOpacity>
    );
  };

  fetch_staples = e => {
    // console.warn('fetching data',e)
    fetch(global.api + 'get-product-list-web', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category_link: 'all',
        subcategory_link: e,
        page: this.state.page,
      }),
    })
      .then(response => response.json())
      .then(json => {
        // console.warn('productlist',json.data.data)
        if (json.status) {
          // alert(json.data.current_page)
          if (this.state.page == 1) this.setState({exclusive: json.data.data});
          else
            this.setState({
              exclusive: [...this.state.exclusive, ...json.data.data],
            });
        } else {
          this.setState({exclusive: []});
        }
      })
      .catch(error => {
        console.warn(error);
      })
      .finally(() => {
        this.setState({isLoading: false});
      });
  };

  renderItem = ({item}) => {
    return (
      <View
        style={{
          width: '50%',
          height: Dimensions.get('screen').height / 3.2,
          marginBottom: 15,
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
            shadowColor: 'black',
            elevation: 5,
            borderRadius: 10,
            paddingHorizontal: 3,
            justifyContent: 'space-between',
            paddingBottom: 5,
          }}>
          <View style={{width: 55, alignSelf: 'flex-end'}}>
            <CheckBox
              checked={this.state.checked}
              checkedIcon="heart"
              uncheckedIcon="heart-o"
              checkedColor="red"
              onPress={() => {
                this.setState({checked: !this.state.checked});
              }}
            />
          </View>

          <View
            style={{
              height: '40%',
              alignItems: 'center',
              marginTop: '-22%',
              marginBottom: 10,
            }}>
            {!(item.picture.length == 0) ? (
              <Image
                source={{uri: global.img_url + item.picture[0].src}}
                style={{height: 100, width: 80}}
              />
            ) : (
              <Image
                source={{uri: global.img_url + '16790462996414369b89ee0.jpeg'}}
                style={{height: 100, width: 80}}
              />
            )}
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 5,
            }}>
            <Text style={styler.txt}>{item.name}</Text>
            <Text style={styler.txt}>{item.price}</Text>
            {/* <Text style={styler.txt}>great Mangoes</Text>
            <Text style={styler.txt}>1kg</Text> */}
          </View>

          <TouchableOpacity
            style={{
              height: '15%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'orange',
              borderRadius: 10,
            }}
            onPress={() => alert('added successfully')}>
            <Text>Add to Bag</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          centerComponent={this.centerComponent()}
          containerStyle={{backgroundColor: 'orange'}}
          leftComponent={this.renderLeftComponent()}
        />
        {this.state.isLoading ? (
          <View style={{justifyContent:'center',height:'80%'}}><ActivityIndicator size="large" color="red" /></View>
          
        ) : (
          <View style={{marginTop: 10, marginBottom: 100}}>
            <FlatList
              data={this.state.exclusive}
              numColumns={2}
              renderItem={this.renderItem}
              key={'#'}
              keyExtractor={item => '#' + item.id}
              onEndReached={() => {
                if (this.state.page <= 6) {
                  this.setState({page: this.state.page + 1});
                  this.fetch_staples(this.props.route.params.next_page);
                }
              }}
              // onEndReachedThreshold={0.5}
            />
          </View>
        )}
      </View>
    );
  }
}

const styler = StyleSheet.create({
  txt: {
    fontSize: RFValue(10, 580),
    color: 'black',
    fontWeight: '400',
  },
});

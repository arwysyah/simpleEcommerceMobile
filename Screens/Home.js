import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {Button} from 'native-base';
import response from './Data/data';



class Home extends Component {
  state = {
    product: response,
    itemAdd: [],
  };

  componentDidMount() {}
  addPoduct = data => {
    this.setState({itemAdd: [...this.state.itemAdd, data]});
    // console.log(data);
  };
  removeItem = id => {
    this.setState({
      itemAdd: this.state.itemAdd.filter(item => item.id_product !== id),
    });
  };
  handlePlus = index => {
    const cartItem = this.state.itemAdd;
    cartItem[index].quantity++;
    this.setState({itemAdd: cartItem});
  };
  handleMinus = index => {
    const cartItem = this.state.itemAdd;
    cartItem[index].quantity--;
    this.setState({itemAdd: cartItem});
  };
  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  render() {
    const {product, itemAdd} = this.state;
    // console.log('hezssll',this.state.name)
    let total = itemAdd.reduce(
      (prev, next) => prev + next.quantity * next.price,
      0
    );
    // console.log('total',total)
    let quantities = itemAdd.reduce((prev, next) => prev + next.quantity, 0);
    // console.log(quantities, "quan");
    
    return (
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={{paddingLeft: 30, fontSize: 20, top: 20}}>Product</Text>

          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.scroll}>
            <View
              style={{flexDirection: 'row', paddingRight: 20, marginTop: 15}}>
              {product.map((data, index) => (
                <View style={{top: 20, paddingRight: 20}} key={index}>
                    {/* {itemAdd.filter(fil=>item.id_product===fil.id_product).length>0 (
                      <View></View> */}
                  <TouchableOpacity
                    onPress={() => {
                      this.addPoduct({...data, quantity: 1});
                    }}>
                      
                    <Image
                      source={{uri: data.image_url}}
                      style={{borderRadius: 10, height: 150, width: 140}}
                    />
                    
                  </TouchableOpacity>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 10,
                      fontSize: 18,
                    }}>
                    {data.name}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('Detail', {
                        data: {...data},
                      });
                    }}>
                    <Text style={styles.button1}>Detail</Text>
                  </TouchableOpacity>
                  <View style={{top: 20}}>
                    <TouchableOpacity
                      onPress={() => {
                        this.addPoduct({...data, quantity: 1});
                      }}

                      style={styles.button}>
                       
                      <Text style={{left: 1, top: 2}}>add product</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* add product */}
        <View style={{alignItems: 'center'}}>
          <Text style={{top: 90, fontSize: 30, justifyContent: 'center'}}>
            Shopping Cart
          </Text>
        </View>
        <View style={styles.experienceView}>
          {itemAdd.map((item, index) => (
            <View style={{width: 160, marginTop: 30, height: 260,paddingHorizontal:10}} key={index}>
              
            
              <Image
                style={{height: 140, width: 145, borderRadius: 5, top: 8}}
                source={{uri: item.image_url}}
              />

              <Text style={{fontSize: 16, top: 15, color: 'grey'}}>
                Rp. {item.price}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  top: 20,
                }}>
                <Button
                  info
                  style={{
                    backgroundColor: 'yellow',
                    height: 20,
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                    top: 20,
                  }}
                  onPress={() => {
                    this.handleMinus(index);
                  }}>
                  <Text style={{fontSize: 15}}>-</Text>
                </Button>
                <Button
                  style={{
                    height: 20,
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                    top: 20,
                    backgroundColor:'white'
                  }}>
                  <Text style={{fontSize: 15}}>{item.quantity}</Text>
                </Button>
               
                <Button
                  info
                  style={{
                    backgroundColor: 'yellow',
                    height: 20,
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                    top: 20,
                  }}
                  onPress={() => {
                    this.handlePlus(index);
                  }}>
                    <Text>{item.quantity === 0 ? this.removeItem(item.id_product) : ""}</Text>
                  <Text style={{fontSize: 15}}>+</Text>
                  
                </Button>
              </View>
              <View style={{top: 20, alignItems: 'center'}}>
                <Button
                  info
                  style={{
                    backgroundColor: 'red',
                    height: 20,
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                    top: 30,
                  }}
                  onPress={() => {
                    this.removeItem(item.id_product);
                  }}>
                  <Text style={{fontSize: 15}}>Remove</Text>
                </Button>
              </View>
              <View style={{top: 20, alignItems: 'center'}}></View>
            </View>
          ))}

          <View style={{top: 40, paddingLeft: 10, alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 15,
                alignItems: 'center',
                color: 'grey',
              }}></Text>
          </View>
        </View>
        <View style={{alignItems:'center'}}>
          <Text style={{justifyContent:'center'}}>
            Total : Rp. {this.formatNumber(total)}
          </Text>
          <Text style={{justifyContent:'center'}}>
            Total quantity: {quantities}
          </Text>
        </View>
     
      </ScrollView>
    );
  }
}
export default Home;
const styles = StyleSheet.create({
  topNav: {
    backgroundColor: 'white',
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 40,
    marginLeft: 300,
    top: 30,
  },
  button: {
    alignItems: 'center',
    textAlign: 'center',
    height: 30,
    width: 100,
    alignSelf: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
    borderTopColor: 'black',
  },
  button1: {
    alignItems: 'center',

    textAlign: 'center',
    height: 20,
    width: 50,
    alignSelf: 'center',
    backgroundColor: 'grey',
    borderRadius: 10,
    borderTopColor: 'black',
  },
  experienceView: {
    marginTop: 90,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 29,
  },
  commonText: {
    fontSize: 16,
  },
  ViewData1: {
    shadowColor: 13,
    borderRadius: 12,
    height: 240,
    width: 220,
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 28,
    top: 35,
  },
  Badge: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    width: 145,
    height: 20,
  },
  scroll: {
    paddingLeft: 20,
    flexDirection: 'row',
    height: 300,
  },
  title: {
    fontSize: 28,
    marginTop: 5,
    fontWeight: 'bold',
    marginLeft: 25,
    color: 'white',
  },
});

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Button, Icon} from 'native-base';

export default class Detail extends Component {
  state = {
   data:this.props.navigation.getParam('data')
  };

  handlePlus = () => {
    this.setState({
      order: this.state.order + 1,
    });
    console.log('this', this);
  };
  handleMinus = () => {
    if (this.state.order !== 0) {
      this.setState({
        order: this.state.order - 1,
      });
    }
  };
  render() {
    const {data}=this.state
    console.log(data)

    return (
      <View>
        <View style={{backgroundColor: '#059dab'}}>
          <View>
            <View style={{backgroundColor: 'white'}}>
              <Button
                transparent
                onPress={() => {
                  this.props.navigation.goBack();
                }}>
                <Icon style={{color: 'black'}} name="arrow-back" />
                <Text style={styles.header}>Detail</Text>
              </Button>
            </View>
          </View>
          <ScrollView>
            <View
              style={{
                height: 400,

                backgroundColor: 'white',
                top: 20,
                borderRadius: 20,
              }}>
              <View style={styles.card}>
                <Image
                  source={{uri: data.image_url}}
                  style={{height: 160, width: 240, borderRadius: 10}}
                />

                <Text
                      style={styles.text}>
                   
               
                  {data.name}
                </Text>
                <Text
                    style={styles.text}>
                  Rp {data.price}
                </Text>
               <View style={{top:30}}>
               <Text
                  style={styles.text}>
                  {data.description}
                </Text>
               </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    color: 'black',
    fontSize: 23,
    alignContent: 'center',
    marginRight: 300,
    fontWeight: 'bold',
  },
  card: {
    height: 160,
    width: 240,
    backgroundColor: 'black',
    top: 40,
    left: 65,
    borderRadius: 10,
  },
  textinput: {
    backgroundColor: '#E5E6EE',
    borderWidth: 1,
    borderRadius: 7,
    left: 30,
    height: 40,
    width: 180,
    textAlign: 'center',
  },
  box: {
    height: 40,
    width: 120,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderRadius: 5,
    left: 100,
    top: -35,
  },
  button: {
    alignItems: 'center',

    textAlign: 'center',

    height: 50,
    width: 50,
    alignSelf: 'center',
    // shadowColor:'black',
    backgroundColor: 'yellow',
    borderRadius: 10,
    // shadowOpacity:100,
    borderTopColor: 'black',
    // shadowOffset:30,
    marginLeft: 200,
  },
  chat: {
    backgroundColor: 'yellow',
    height: 50,
    width: 50,
    borderRadius: 10,
    marginLeft: 345,
    marginTop: -160,
  },
  button1: {
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    height: 30,
    width: 120,
    // shadowColor:'black',
    backgroundColor: '#ffcd42',
    borderRadius: 5,
    // shadowOpacity:100,
    borderTopColor: 'black',
    // shadowOffset:30
  },
  map: {
    height: 400,
  },
  imaps: {
    height: 80,
    width: 80,
    marginTop: 10,
    left: 20,
  },
  text:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    top: 4,
  }
});

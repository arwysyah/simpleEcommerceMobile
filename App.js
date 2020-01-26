
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Home from './Screens/Home'
import Detail from './Screens/Detail'


const AppStack= createStackNavigator({
  Home :{
    screen:Home,
    navigationOptions: {
     headerShown: false
    }
  },
  Detail :{
    screen:Detail,
    navigationOptions: {
     headerShown: false
    }
  }

})




export default createAppContainer(AppStack);
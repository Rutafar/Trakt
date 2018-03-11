import { StackNavigator, DrawerNavigator } from 'react-navigation'
import React from 'react'
import { Text, Animated, Easing } from 'react-native'
import LaunchScreen from '../Containers/LaunchScreen'
import Login from "../Containers/Login"
import Movies from '../Containers/Movies'
import TvShows from '../Containers/TvShows'
import styles from './Styles/NavigationStyles'
import {Colors, Fonts} from '../Themes'
import DrawerContainer from '../Containers/DrawerContainer'
import Icon from 'react-native-vector-icons/Ionicons'

const DrawerStack = DrawerNavigator({
  screen1: { screen: Movies },
  screen2 : {screen: TvShows}
},
  {
    contentComponent: (props) => <DrawerContainer {...props} />

});


const drawerButton = (navigation) =>
  <Icon name="md-menu"

    onPress={() => {
      // Coming soon: navigation.navigate('DrawerToggle')
      // https://github.com/react-community/react-navigation/pull/2492
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }
    }
}/>

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#bf0000'},
    gesturesEnabled: false,
    headerLeft: drawerButton(navigation)
  })
})

const LoginStack = StackNavigator({

    loginScreen : {screen: Login}
},
{headerMode:'none'})


// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LoginStack : {screen: LoginStack},
  drawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginStack',
  title: 'Main'
})

export default PrimaryNav

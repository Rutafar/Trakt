import React from "react";
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

import { StatusBar, Platform } from 'react-native';
import Profile from 'trakt/src/screens/Profile/profile'
import Setting from 'trakt/src/screens/Settings/settings'
import Icon from 'react-native-vector-icons/Ionicons';
const DrawerIcon = ({ navigate }) => {
    if (Platform.OS === 'ios') {
        return null;
    }
    return (
        <Icon
            name='md-menu'
            size={28}
            color='white'
            onPress={() => navigate('DrawerOpen')}
            style={{ paddingLeft: 20 }}
        />
    )
}
export const Stack = StackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <DrawerIcon {...navigation} />,
            headerStyle: styles
        }),

    },
    Settings: {
        screen: Setting,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <DrawerIcon {...navigation} />,
             headerStyle: styles
        }),

    }
}, { initialRouteName: 'Profile' }
);

export const Drawer = DrawerNavigator({
    Profile: {
        screen: Stack,
        navigationOptions: {
            drawer: {
                label: 'Home'
            }
        }
    },
    Settings: {
        screen: Setting,
        navigationOptions: {
            drawer: {
                label: 'Settings'
            }
        }
    },

}, { initialRouteName: 'Profile' });

const styles= {
  paddingTop: StatusBar.currentHeight,
                height: 60 + StatusBar.currentHeight,
                backgroundColor: "#ED1C24"
}
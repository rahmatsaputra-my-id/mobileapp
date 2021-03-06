import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/HomeScreen';
import ProfileScreen from '../../Screens/ProfileScreen';
import { Colors, stylesGlobal } from '../Components/CThemes';
import { iconHome, iconProfile, iconSplitBill } from '../../Assets/Shared';
import SplitBillScreen from '../../Screens/SplitBillScreen';

const Tab = createBottomTabNavigator();

export default function BottomTab({ navigation }) {

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: Colors.darkGreen,
        showLabel: false
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Image source={iconHome} style={{ ...stylesGlobal.bottomTabIcon, tintColor: color }} />
          )
        }}
      />
      <Tab.Screen
        name="SplitBillScreen"
        component={SplitBillScreen}
        options={{
          tabBarLabel: 'Split Bill',
          tabBarIcon: ({ color }) => (
            <Image source={iconSplitBill} style={{ ...stylesGlobal.bottomTabIcon, tintColor: color }} />
          )
        }}
      />
      <Tab.Screen
        name="Profile Screen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Image source={iconProfile} style={{ ...stylesGlobal.bottomTabIcon, tintColor: color }} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

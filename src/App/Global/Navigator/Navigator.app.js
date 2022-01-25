import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import HomeScreen from '../../Screens/HomeScreen';
import CForm from '../Components/CForm';
import HomeDetailScreen from '../../Screens/HomeDetailScreen';
import ProfileScreen from '../../Screens/ProfileScreen';
import BottomTab from './BottomTab';
import LoginScreen from '../../Screens/LoginScreen';
import RegisterScreen from '../../Screens/RegisterScreen';
import VerifyOTPScreen from '../../Screens/VerifyOTPScreen';
import SplitBillScreen from '../../Screens/SplitBillScreen';
import SplitBillDetailScreen from '../../Screens/SplitBillDetailScreen';
import SplitBillHistoryScreen from '../../Screens/SplitBillHistoryScreen';

const Stack = createStackNavigator();

export const NavigatorApps = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SplitBillScreen"
          component={SplitBillScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SplitBillDetailScreen"
          component={SplitBillDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SplitBillHistoryScreen"
          component={SplitBillHistoryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CForm"
          component={CForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeDetailScreen"
          component={HomeDetailScreen}
          options={{
            title: 'News Detail',
            headerShown: false
          }}
        />
        <Stack.Screen
          name="VerifyOTPScreen"
          component={VerifyOTPScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 
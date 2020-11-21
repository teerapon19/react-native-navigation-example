import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import AboutScreen from '../screens/AboutScreen';
import OKNumberOneScreen from '../screens/OKNumberOneScreen';

const Stack = createStackNavigator();
const BottomTabNav = createBottomTabNavigator();

const BottomTabNavScreenGroup = () => {
  return (
    <BottomTabNav.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = '';
          switch (route.name) {
            case 'HomeScreen':
              iconName = 'home';
              break;
            case 'DetailScreen':
              iconName = 'folder';
              break;
            case 'ProfileScreen':
              iconName = 'account-circle';
              break;
            case 'SettingScreen':
              iconName = 'settings';
              break;
            default:
              iconName = 'grade';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <BottomTabNav.Screen
        options={{
          title: 'Home',
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <BottomTabNav.Screen
        options={{
          title: 'Detail',
        }}
        name="DetailScreen"
        component={DetailScreen}
      />
      <BottomTabNav.Screen
        options={{
          title: 'Profile',
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
      <BottomTabNav.Screen
        options={{
          title: 'Setting',
        }}
        name="SettingScreen"
        component={SettingScreen}
      />
    </BottomTabNav.Navigator>
  );
};

const MainStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SplashScreen"
        component={SplashScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="BottomTabNavScreenGroup"
        component={BottomTabNavScreenGroup}
      />
      <Stack.Screen
        options={{
          title: 'About',
        }}
        name="AboutScreen"
        component={AboutScreen}
      />
      <Stack.Screen
        options={{
          title: 'OK! Number One!',
        }}
        name="OKNumberOneScreen"
        component={OKNumberOneScreen}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStackScreen />
    </NavigationContainer>
  );
};

export default Navigation;

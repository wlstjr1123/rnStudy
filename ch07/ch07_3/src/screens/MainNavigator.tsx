import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from './Login';
import SignUp from './SignUp';
import HomeNavigator from './HomeNavigator';

import type {RouteProp, ParamListBase} from '@react-navigation/native';
import {Text} from '../theme';
import {MD2Colors} from 'react-native-paper';

type TabBarIconProps = {focused: boolean; color: string; size: number};

const icons: Record<string, string[]> = {
  HomeNavigator: ['homeC', 'home'],
  Login: ['loginC', 'login'],
  SignUp: ['signUpC', 'signUp'],
};

const screenOptions = ({route}: {route: RouteProp<ParamListBase, string>}) => {
  return {
    tabBarIcon: ({focused, color, size}: TabBarIconProps) => {
      const {name} = route;
      const focusedSize = focused ? size + 6 : size;
      const focusedColor = focused ? MD2Colors.lightBlue500 : color;
      const [icon, iconOutline] = icons[name];
      const iconName = focused ? icon : iconOutline;
      return (
        <Text style={{fontSize: focusedSize, color: focusedColor}}>
          {iconName}
        </Text>
      );
    },
  };
};

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{tabBarLabel: 'Home', tabBarBadge: 3}}
      />
    </Tab.Navigator>
  );
}

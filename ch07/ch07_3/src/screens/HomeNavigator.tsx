import {createStackNavigator} from '@react-navigation/stack';
import React, {useMemo} from 'react';
import type {StackNavigationOptions} from '@react-navigation/stack';
import {useNavigaationHorizontalInterpolator} from '../hooks';
import Home from './Home';
import HomeLeft from './HomeLeft';
import HmoeRight from './HomeRight';
// import {MD2Colors as Colors} from 'react-native-paper';

const Stack = createStackNavigator();

export default function MainNavigator() {
  const interpolator = useNavigaationHorizontalInterpolator();
  const leftOptions = useMemo<StackNavigationOptions>(
    () => ({
      gestureDirection: 'horizontal-inverted',
      cardStyleInterpolator: interpolator,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const rightOptions = useMemo<StackNavigationOptions>(
    () => ({
      gestureDirection: 'horizontal',
      cardStyleInterpolator: interpolator,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="HomeLeft"
        component={HomeLeft}
        options={leftOptions}
      />
      <Stack.Screen
        name="HomeRight"
        component={HmoeRight}
        options={rightOptions}
      />
    </Stack.Navigator>
  );
}

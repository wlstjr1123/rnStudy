import React, {useCallback, useState} from 'react';
import MainNavigator from './src/screens/MainNavigator';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {useColorScheme} from 'react-native';
import {ToggleThemeProvider} from './src/contexts';
import {Provider as ReduxProvider} from 'react-redux';
import {makeStore} from './src/store';

enableScreens();

const store = makeStore();

export default function App() {
  const scheme = useColorScheme();
  const [_theme, setTheme] = useState(
    scheme === 'dark' ? DarkTheme : DefaultTheme,
  );

  const toggleTheme = useCallback(
    () => setTheme(({dark}) => (dark ? DefaultTheme : DarkTheme)),
    [],
  );
  return (
    <ToggleThemeProvider toggleTheme={toggleTheme}>
      <SafeAreaProvider>
        <ReduxProvider store={store}>
          <NavigationContainer theme={_theme}>
            <MainNavigator />
          </NavigationContainer>
        </ReduxProvider>
      </SafeAreaProvider>
    </ToggleThemeProvider>
  );
}

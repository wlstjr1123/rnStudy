import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {MD3DarkTheme, Provider as PaperProvider} from 'react-native-paper'
import MainNavigator from './src/screens/MainNavigator'
import {ToggleThemeProvider} from './src/contexts'

const theme = {
  ...MD3DarkTheme,
}

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <ToggleThemeProvider toggleTheme={toggleTheme}>
          <MainNavigator />
        </ToggleThemeProvider>
      </PaperProvider>
    </SafeAreaProvider>
  )
}

import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { MD2Colors } from 'react-native-paper'
import Color from 'color'

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>Hello world!</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MD2Colors.blue500,
  },
  text: {
    fontSize: 20,
    color: Color(MD2Colors.blue500).alpha(0.7).lighten(0.9).string(),
  },
})

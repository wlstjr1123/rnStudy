import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Platform,
  Dimensions,
  View,
} from 'react-native'
import { MD2Colors } from 'react-native-paper'
import color from 'color'

const { width, height } = Dimensions.get('window')

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>os: {Platform.OS}</Text>
      <Text style={[styles.text]}>width: {width}</Text>
      <Text style={[styles.text]}>height: {height}</Text>

      <View style={[styles.box, styles.border]} />
      <View style={[styles.box, styles.border, { borderRadius: 20 }]} />
      <View
        style={[
          styles.box,
          styles.border,
          { borderTopLeftRadius: 40, borderBottomLeftRadius: 40 },
        ]}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: MD2Colors.blue500,
    flex: 1,
    paddingLeft: Platform.select({ ios: 0, android: 20 }),
  },
  text: {
    fontSize: 20,
    color: color(MD2Colors.blue500).lighten(0.9).string(),
    marginBottom: 10,
    marginLeft: 30,
  },
  box: {
    width: '70%',
    height: 100,
    backgroundColor: 'white',
    marginBottom: 10,
    marginLeft: Platform.select({ ios: 20, android: 0 }),
  },
  border: { borderWidth: 10, borderColor: color('black').apple(0.3).string() },
})

import React from 'react'
import { Alert, Platform, SafeAreaView, StyleSheet, View } from 'react-native'
import { MD2Colors } from 'react-native-paper'
import TopBar from './src/screens/TopBar'
import Content from './src/screens/Content'
import BottomBar from './src/screens/BottomBar'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const iconPressed = () => Alert.alert('Ico Pressed.')

export default function CopyMe() {
  return (
    <>
      <SafeAreaView style={styles.flex}>
        <TopBar />
        <Content />
        <BottomBar />
      </SafeAreaView>
      <View style={[styles.absoluteView]}>
        <Icon name="feather" size={50} color="white" onPress={iconPressed} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: MD2Colors.lightBlue100 },
  absoluteView: {
    backgroundColor: MD2Colors.purple900,
    position: 'absolute',
    right: 30,
    bottom: Platform.select({ ios: 100, android: 80 }),
    padding: 10,
    borderRadius: 35,
  },
})

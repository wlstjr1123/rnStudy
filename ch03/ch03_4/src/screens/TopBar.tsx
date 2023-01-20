import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { MD2Colors, Text } from 'react-native-paper'
import * as D from '../data'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const name = D.randomName()
const avatarUrl = D.randomAvatarUrl(name)

export default function TopBar() {
  return (
    <View style={[styles.view]}>
      <Image style={styles.avatar} source={{ uri: avatarUrl }} />
      <View style={styles.centerView}>
        <Text style={[styles.text]}>{name}</Text>
      </View>
      <Icon name="menu" size={24} color="white" />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    padding: 5,
    backgroundColor: MD2Colors.blue500,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: { fontSize: 20, textAlign: 'center' },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  centerView: { flex: 1 },
})

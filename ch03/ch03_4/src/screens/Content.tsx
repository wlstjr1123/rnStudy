import React from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import * as D from '../data'

// prettier-ignore
const avatars = D.makeArray(200).map((_notUsed) => D.randomAvatarUrl())

export default function Content() {
  const children = avatars.map((avatarUrl, index) => (
    <View key={index.toString()} style={styles.avatarView}>
      <Image style={styles.avatar} source={{ uri: avatarUrl }} />
    </View>
  ))

  return (
    <ScrollView contentContainerStyle={[styles.view]}>{children}</ScrollView>
  )
}

const styles = StyleSheet.create({
  view: {
    padding: 5,
    // backgroundColor: MD2Colors.blue500,
    flexDirection: 'row',
    // overflow: 'hidden',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // flex: 1,
  },
  text: { fontSize: 20 },
  avatarView: { padding: 3 },
  avatar: { width: 50, height: 50, borderRadius: 25 },
})

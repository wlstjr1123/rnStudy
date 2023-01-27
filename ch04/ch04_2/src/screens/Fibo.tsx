import React, { useMemo } from 'react'
// eslint-disable-next-line prettier/prettier
import {FlatList, StyleSheet, View} from 'react-native';
import { MD2Colors, Text } from 'react-native-paper'
import { fibonacci } from './fibonacci'
import * as D from '../data'

const title = 'Fibo'

export default function CopyMe() {
  const memoizedFibonacci = useMemo(() => fibonacci, [])
  const fibos = useMemo(
    () =>
      D.makeArray(20 + 1).map((_notUsed, index) => ({
        number: index,
        fibonacci: memoizedFibonacci(index),
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
      <FlatList
        contentContainerStyle={[styles.contentContainerStyle]}
        data={fibos}
        renderItem={({ item }) => (
          <Text style={[styles.text]}>
            {item.number} : {item.fibonacci}
          </Text>
        )}
        keyExtractor={(item) => item.number.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: { flex: 1, backgroundColor: MD2Colors.blue900 },
  text: { fontSize: 20, color: 'white' },
  contentContainerStyle: { alignItems: 'center' },
})

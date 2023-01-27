import React from 'react';
// eslint-disable-next-line prettier/prettier
import {StyleSheet, View} from 'react-native';
import {MD2Colors, Text} from 'react-native-paper';
const title = 'Country';

export default function CopyMe() {
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5, backgroundColor: MD2Colors.blue500},
  text: {fontSize: 20, color: 'white'},
});

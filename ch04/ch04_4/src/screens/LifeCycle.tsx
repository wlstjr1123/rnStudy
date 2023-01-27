import React, {useCallback, useEffect, useLayoutEffect} from 'react';
// eslint-disable-next-line prettier/prettier
import {Platform, StyleSheet, Text, View} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import type {LayoutChangeEvent} from 'react-native';

const title = 'LifeCycle';

export default function LifeCycle() {
  useEffect(() => {
    console.log(Platform.OS, 'useEffect called');
    return () => console.log(Platform.OS, 'useEffect finished');
  }, []);

  useLayoutEffect(() => {
    console.log(Platform.OS, 'useLayoutEffect called');
    return () => console.log(Platform.OS, 'useLayoutEffect finished');
  }, []);

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const {layout} = e.nativeEvent;
    console.log(Platform.OS, 'onLayout called', layout);
  }, []);

  console.log(Platform.OS, 'renderstart');

  return (
    <View onLayout={onLayout} style={[styles.view]}>
      <Text style={[styles.title]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', backgroundColor: MD2Colors.blue500},
  title: {fontSize: 30, fontWeight: '600'},
});

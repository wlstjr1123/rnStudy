import React, {useRef, useState, useCallback} from 'react';
import {StyleSheet, View, Text, Switch, FlatList} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useToggleTheme} from '../contexts';
import * as D from '../data';
import Person from './Person';

export default function Home() {
  const [people, setPeople] = useState<D.IPerson[]>([D.createRandomPerson()]);
  const theme = useTheme();
  const toggleTheme = useToggleTheme();

  const add = useCallback(() => {
    setPeople(people => [...people, D.createRandomPerson()]);
  }, []);
  const removeAll = useCallback(() => {
    setPeople(notUsed => []);
  }, []);

  const flatListRef = useRef<FlatList | null>(null);
  const onContentSizeChange = useCallback(
    () => flatListRef.current?.scrollToEnd(),
    [flatListRef.current],
  );

  return (
    <View
      style={[
        styles.view,
        {
          backgroundColor: theme.colors.background,
        },
      ]}>
      <View style={[styles.topBar, {backgroundColor: theme.colors.background}]}>
        <Text
          onPress={add}
          style={[styles.text, {color: theme.colors.primary}]}>
          add
        </Text>
        <Text
          onPress={removeAll}
          style={[styles.text, {color: theme.colors.primary}]}>
          remove all
        </Text>
        <View style={{flex: 1}} />
        <Switch value={theme.dark} onValueChange={toggleTheme} />
      </View>
      <FlatList
        ref={flatListRef}
        data={people}
        renderItem={({item}) => <Person person={item} />}
        keyExtractor={item => item.id}
        onContentSizeChange={onContentSizeChange}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1},
  topBar: {flexDirection: 'row', padding: 5},
  text: {marginRight: 10, fontSize: 20, color: 'white'},
});

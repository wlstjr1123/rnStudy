import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet, View, Text, Switch, FlatList} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useToggleTheme} from '../contexts';
import * as D from '../data';
import Person from './PersonInterpolate';

export default function Interpolate() {
  const [people, setPeople] = useState<D.IPerson[]>([]);
  const theme = useTheme();
  const toggleTheme = useToggleTheme();
  const addPerson = useCallback(() => {
    setPeople(people => [D.createRandomPerson(), ...people]); // 변경했습니다.
  }, []);
  const removeAllPersons = useCallback(() => {
    setPeople(notUsed => []);
  }, []);
  const deletePerson = useCallback(
    (id: string) => () =>
      setPeople(people => people.filter(person => person.id != id)),
    [],
  );
  useEffect(addPerson, []); // 초기 아이템을 하나 추가합니다.

  return (
    <View style={[styles.view, {backgroundColor: theme.colors.background}]}>
      <View
        style={[
          styles.topBar,
          {backgroundColor: theme.colors.elevation.level0},
        ]}>
        <Text onPress={addPerson} style={styles.text}>
          add
        </Text>
        <Text onPress={removeAllPersons} style={styles.text}>
          remove all
        </Text>
        <View style={{flex: 1}} />
        <Switch value={theme.dark} onValueChange={toggleTheme} />
      </View>
      <FlatList
        data={people}
        renderItem={({item}) => (
          <Person person={item} deletePressed={deletePerson(item.id)} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1},
  topBar: {flexDirection: 'row', padding: 5},
  text: {marginRight: 10, fontSize: 20},
});

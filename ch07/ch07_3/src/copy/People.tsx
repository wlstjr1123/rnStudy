import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {ScrollEnabledProvider, useScrollEnabled} from '../contexts';
import * as D from '../data';
import Person from './Person';
import {SafeAreaView, View, UnderlineText, TopBar} from '../theme/navigation';

export default function People() {
  const [scrollEnabled] = useScrollEnabled();
  const [people, setPeople] = useState<D.IPerson[]>([D.createRandomPerson()]);
  const add = useCallback(() => {
    setPeople(people => [...people, D.createRandomPerson()]);
  }, []);
  const removeAll = useCallback(() => {
    setPeople(_notUsed => []);
  }, []);

  const deletePerson = useCallback(
    (id: string) => () =>
      setPeople(people => people.filter(person => person.id != id)),
    [],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => D.makeArray(5).forEach(add), []);

  return (
    <SafeAreaView>
      <ScrollEnabledProvider>
        <View style={[styles.view]}>
          <TopBar>
            <UnderlineText onPress={add} style={styles.text}>
              add
            </UnderlineText>
            <UnderlineText onPress={removeAll} style={styles.text}>
              remove all
            </UnderlineText>
          </TopBar>
          <FlatList
            scrollEnabled={scrollEnabled}
            data={people}
            renderItem={({item}) => (
              <Person person={item} deletePressed={deletePerson(item.id)} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollEnabledProvider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1},
  text: {marginRight: 10, fontSize: 20},
});

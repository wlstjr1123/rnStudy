import React, {useState, useCallback, useEffect, useRef} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {ScrollEnabledProvider, useScrollEnabled} from '../contexts';
import * as D from '../data';
import Person from './Person';
import {
  SafeAreaView,
  View,
  UnderlineText,
  TopBar,
  Text,
} from '../theme/navigation';
import {useNavigation} from '@react-navigation/native';
import {LeftRightNavigation, LeftRightNavigationMethods} from '../components';
import {NavigationHeader} from '../theme';

export default function People() {
  //navigation
  const navigation = useNavigation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const goLeft = useCallback(() => navigation.navigate('HomeLeft'), []);
  const goRight = useCallback(
    () => navigation.navigate('HomeRight', {name: 'Jack', age: 32}),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const logout = useCallback(() => {
    navigation.navigate('Login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [scrollEnabled] = useScrollEnabled();
  const [people, setPeople] = useState<D.IPerson[]>([]);

  const leftRef = useRef<LeftRightNavigationMethods | null>(null);
  const add = useCallback(() => {
    setPeople(people => [D.createRandomPerson(), ...people]);
  }, []);
  const removeAll = useCallback(() => {
    setPeople(_notUsed => []);
    leftRef.current?.resetOffset();
  }, []);

  const deletePerson = useCallback(
    (id: string) => () => {
      setPeople(people => people.filter(person => person.id != id));
      leftRef.current?.resetOffset();
      flatListRef.current?.scrollToOffset({animated: true, offset: 0});
    },
    [],
  );

  const flatListRef = useRef<FlatList | null>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => D.makeArray(5).forEach(add), []);

  return (
    <SafeAreaView>
      <ScrollEnabledProvider>
        <View style={[styles.view]}>
          <NavigationHeader
            title="Home"
            Right={() => <Text onPress={logout}>logout</Text>}
          />
          <TopBar>
            <UnderlineText onPress={goLeft} style={styles.text}>
              go Left
            </UnderlineText>
            <UnderlineText onPress={goRight} style={styles.text}>
              go Right
            </UnderlineText>
          </TopBar>
          <TopBar>
            <UnderlineText onPress={add} style={styles.text}>
              add
            </UnderlineText>
            <UnderlineText onPress={removeAll} style={styles.text}>
              remove all
            </UnderlineText>
          </TopBar>
          <LeftRightNavigation
            ref={leftRef}
            distance={40}
            flatListRef={flatListRef}
            onLeftToRight={goLeft}
            onRightToLeft={goRight}>
            <FlatList
              scrollEnabled={scrollEnabled}
              data={people}
              renderItem={({item}) => (
                <Person person={item} deletePressed={deletePerson(item.id)} />
              )}
              keyExtractor={item => item.id}
            />
          </LeftRightNavigation>
        </View>
      </ScrollEnabledProvider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1},
  text: {marginRight: 10, fontSize: 20},
});

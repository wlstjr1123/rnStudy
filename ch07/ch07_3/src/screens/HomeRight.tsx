import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {SafeAreaView, View, Text, TopBar, UnderlineText} from '../theme/navigation';
import * as D from '../data';
import { NavigationHeader } from '../theme';
import { LeftRightNavigation } from '../components';

const title = 'HomeRight';
export default function HomeRight() {
  const navigation = useNavigation();
  const route = useRoute();
  const goBack = useCallback(
    () => () => navigation.canGoBack() && navigation.goBack(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const goHome = useCallback(() => navigation.navigate('Home'), []);

  return (
    <SafeAreaView>
      <View style={[styles.view]}>
        <NavigationHeader
          title={title}
          Left={() => <Text onPress={goBack}>goBack</Text>}
          Right={() => (
            <Text onPress={() => Alert.alert('menu pressed')}>menu</Text>
          )}
        />
        <TopBar>
          <Text onPress={goBack}>go back</Text>
          <Text onPress={goHome} style={{marginLeft: 10}}>
            go Home
          </Text>
        </TopBar>
        <LeftRightNavigation distance={40} onLeftToRight={goHome}>
          <View style={[styles.content]}>
            <Text style={[styles.text]}>{title}</Text>
            <Text style={[styles.text]}>
              route: {JSON.stringify(route, null, 2)}
            </Text>
          </View>
        </LeftRightNavigation>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1, padding: 5},
  text: {fontSize: 20},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

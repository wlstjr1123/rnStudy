import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {
  SafeAreaView,
  View,
  Text,
  TopBar,
  UnderlineText,
} from '../theme/navigation';
import * as D from '../data';
import { NavigationHeader } from '../theme';
import { LeftRightNavigation } from '../components';

const title = 'HomeLeft';
export default function HomeLeft() {
  const navigation = useNavigation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const goHome = useCallback(() => navigation.navigate('Home'), []);

  return (
    <SafeAreaView>
      <View style={[styles.view]}>
        <NavigationHeader Right={() => (<Text onPress={goHome}>close</Text> )} />
        <LeftRightNavigation distance={40} onRightToLeft={goHome}>
          <View style={[styles.content]}>
            <Text style={[styles.text]}>{title}</Text>
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

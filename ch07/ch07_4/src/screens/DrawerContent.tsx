import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {
  View,
  Text,
  NavigationHeader,
  UnderlineText,
  Switch,
  MaterialCommunityIcon as Icon,
} from '../theme';
import type {FC, PropsWithChildren} from 'react';
import type {DrawerContentComponentProps} from '@react-navigation/drawer';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import {Avatar} from '../components';
import * as D from '../data';

const loginUser = D.createRandomPerson();

const DrawerContent: FC<
  PropsWithChildren<DrawerContentComponentProps>
> = props => {
  const {navigation} = props;
  const close = useCallback(
    () => navigation.dispatch(DrawerActions.closeDrawer()),
    [navigation],
  );
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={[styles.view]}>
      <NavigationHeader Right={() => <Text onPress={close}>close</Text>} />
      <View style={[styles.content]}>
        <View style={[styles.row]}>
          <Avatar uri={loginUser.avatar} size={40} />
          <Text style={[styles.text, styles.m]}>{loginUser.name}</Text>
        </View>
        <View style={[styles.row]}>
          <UnderlineText
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[styles.text, styles.m]}>
            {loginUser.email}
          </UnderlineText>
        </View>
        <View style={[styles.row, {marginTop: 20}]}>
          <Switch />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
export default DrawerContent;

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5},
  row: {flexDirection: 'row', padding: 5, alignItems: 'center'},
  m: {marginLeft: 5},
  text: {fontSize: 20},
  content: {flex: 1, padding: 5},
});

import React, {useCallback, useMemo} from 'react';
import type {FC} from 'react';
import {View, Text, Image, Animated} from 'react-native';
//import {Colors} from 'react-native-paper'
import {MD2Colors as Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment-with-locales-es6';
import * as D from '../data';
import {useToggle, useTransformStyle, useAnimatedValues} from '../hooks';
import {interpolate} from '../utils';
import {Avatar} from '../components';
import {styles} from './Person.style';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};

const PersonParallel: FC<PersonProps> = ({person, deletePressed}) => {
  const [started, toggleStarted] = useToggle();
  const animValues = useAnimatedValues(3);
  const animations = useMemo(
    () =>
      animValues.map(animValue =>
        Animated.spring(animValue, {
          useNativeDriver: true,
          toValue: !started ? 1 : 0,
        }),
      ),
    [started],
  );
  const avatarPressed = useCallback(() => {
    Animated.parallel(animations).start(toggleStarted);
  }, [started]);
  const leftIconStyle = useTransformStyle({
    translateX: interpolate(animValues[0], !started ? [-1200, 0] : [0, -1200]),
  });
  const centerIconStyle = useTransformStyle({
    translateY: interpolate(animValues[1], !started ? [1200, 0] : [0, 1200]),
  });
  const rightIconStyle = useTransformStyle({
    translateX: interpolate(animValues[2], !started ? [1200, 0] : [0, 1200]),
  });

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar
          imageStyle={[styles.avatar]}
          uri={person.avatar}
          size={50}
          onPress={avatarPressed}
        />
        <Text style={[styles.text]}>Press Me</Text>
      </View>
      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]}>{person.email}</Text>
        <View style={[styles.dateView]}>
          <Text style={[styles.text]}>
            {moment(person.createdDate).startOf('day').fromNow()}
          </Text>
          <Icon
            name="trash-can-outline"
            size={26}
            color={Colors.lightBlue500}
            onPress={deletePressed}
          />
        </View>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={[styles.text, styles.comments]}>
          {person.comments}
        </Text>
        <Image style={[styles.image]} source={{uri: person.image}} />
        <View style={[styles.countsView]}>
          <AnimatedIcon
            style={[leftIconStyle]}
            name="comment"
            size={24}
            color={Colors.blue500}
          />
          <AnimatedIcon
            style={[centerIconStyle]}
            name="twitter"
            size={24}
            color={Colors.purple500}
          />
          <AnimatedIcon
            style={[rightIconStyle]}
            name="heart"
            size={24}
            color={Colors.red500}
          />
        </View>
      </View>
    </View>
  );
};
export default PersonParallel;

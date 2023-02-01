import React, {useState} from 'react';
import type {FC} from 'react';
import {Image} from 'react-native';
import {View, Text, UnderlineText, TouchableView} from '../theme/navigation';
import {MD2Colors as Colors} from 'react-native-paper';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment-with-locales-es6';
import * as D from '../data';
import {Avatar} from '../components';
import {styles} from './Person.style';

moment.locale('ko');

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};

const Person: FC<PersonProps> = ({person: initialPerson, deletePressed}) => {
  const [person, _setPerson] = useState<D.IPerson>(initialPerson);
  // const avatarPressed = useCallback(() => Alert.alert('avatar pressed.'), []);
  // const deletePressed = useCallback(() => Alert.alert('delete pressed.'), []);
  // const countIconPressed = useCallback(
  //   (name: string) => () => Alert.alert(`${name} pressed.`),
  //   [],
  // );
  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50} />
      </View>
      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <UnderlineText style={[styles.email]}>{person.email}</UnderlineText>
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
          <TouchableView style={[styles.countView]}>
            <Text>{person.counts.comment}</Text>
          </TouchableView>
          <TouchableView style={[styles.countView]}>
            <Text>{person.counts.retweet}</Text>
          </TouchableView>
          <TouchableView style={[styles.countView]}>
            <Text>{person.counts.heart}</Text>
          </TouchableView>
        </View>
      </View>
    </View>
  );
};
export default Person;

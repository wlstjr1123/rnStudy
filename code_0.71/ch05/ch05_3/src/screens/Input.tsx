import React, {useRef, useCallback, useState} from 'react';
// prettier-ignore
import {StyleSheet, View, Text, Switch, TextInput, Keyboard} from 'react-native'
import {useTheme} from 'react-native-paper';
import {useToggleTheme} from '../contexts';
import * as D from '../data';

export default function Input() {
  const [person, setPerson] = useState<D.IPerson>(D.createRandomPerson());
  const {dark, colors} = useTheme();
  const toggleTheme = useToggleTheme();
  const textInputRef = useRef<TextInput | null>(null);
  const setFocus = useCallback(
    () => textInputRef.current?.focus(),
    [textInputRef.current],
  );

  return (
    <View style={[styles.view, {backgroundColor: colors.surface}]}>
      <View style={[styles.topBar, {backgroundColor: colors.secondary}]}>
        <Text style={[styles.textButton]} onPress={setFocus}>
          focus
        </Text>
        <Text style={[styles.textButton]} onPress={Keyboard.dismiss}>
          dismiss keyboard
        </Text>
        <View style={{flex: 1}} />
        <Switch value={dark} onValueChange={toggleTheme} />
      </View>
      <View style={[{flex: 1}]} />
      <View style={[styles.textView]}>
        <Text style={[styles.text, {color: colors.primary}]}>email</Text>
        <TextInput
          ref={textInputRef}
          style={[
            styles.textInput,
            {color: colors.primary, borderColor: colors.surface},
          ]}
          value={person.email}
          placeholder="enter your email"
          onChangeText={email => setPerson(person => ({...person, email}))}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1},
  topBar: {flexDirection: 'row', padding: 5},
  textButton: {marginLeft: 10, fontSize: 20},
  keyboardAvoidingView: {
    flex: 1,
    padding: 10,
  },
  textView: {padding: 5},
  text: {fontSize: 24},
  textInput: {fontSize: 24, borderWidth: 1, borderRadius: 5},
});

import React, {useRef, useCallback, useState} from 'react'
// prettier-ignore
import {StyleSheet, Switch, TextInput as RNTextInput, Keyboard}
from 'react-native'
import {TextInput, Text, View} from '../theme/paper'
import {useTheme} from 'react-native-paper'
import {useToggleTheme, AutoFocusProvider, useAutoFocus} from '../contexts'
import * as D from '../data'

export default function Theme() {
  const [person, setPerson] = useState<D.IPerson>(D.createRandomPerson())
  const {dark} = useTheme()
  const toggleTheme = useToggleTheme()
  const textInputRef = useRef<RNTextInput | null>(null)
  const setFocus = useCallback(
    () => textInputRef.current?.focus(),
    [textInputRef.current]
  )
  const autoFocus = useAutoFocus()
  return (
    <View surface style={[styles.view]}>
      <View accent style={[styles.topBar]}>
        <Text style={[styles.textButton]} onPress={setFocus}>
          focus
        </Text>
        <Text style={[styles.textButton]} onPress={Keyboard.dismiss}>
          dismiss keyboard
        </Text>
        <View style={{flex: 1}} />
        <Switch value={dark} onValueChange={toggleTheme} />
      </View>
      <AutoFocusProvider contentContainerStyle={[styles.flex]}>
        <View style={[styles.flex]} />
        <View style={[styles.textView]}>
          <Text style={[styles.text]}>email</Text>
          <TextInput
            style={[styles.textInput]}
            onFocus={autoFocus}
            value={person.email}
            placeholder="enter your email"
            onChangeText={email => setPerson(person => ({...person, email}))}
          />
        </View>
        <View style={[styles.textView]}>
          <Text style={[styles.text]}>name</Text>
          <TextInput
            ref={textInputRef}
            style={[styles.textInput]}
            onFocus={autoFocus}
            value={person.name}
            placeholder="enter your name"
            onChangeText={name => setPerson(person => ({...person, name}))}
          />
        </View>
      </AutoFocusProvider>
    </View>
  )
}
const styles = StyleSheet.create({
  view: {flex: 1},
  topBar: {flexDirection: 'row', padding: 5},
  textButton: {marginLeft: 10, fontSize: 20},
  keyboardAvoidingView: {flex: 1, padding: 10},
  textView: {padding: 5},
  text: {fontSize: 24},
  textInput: {fontSize: 24, borderWidth: 1, borderRadius: 5},
  flex: {flex: 1}
})

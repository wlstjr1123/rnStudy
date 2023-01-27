import React, {useState, useCallback} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableView,
  UnderlineText,
} from '../theme';
import * as D from '../data';
import {useAutoFocus, AutoFocusProvider} from '../contexts';
import {loginAction} from '../store/login';

export default function SignUp() {
  const [email, setEmail] = useState<string>(D.randomEmail());
  const [name, setName] = useState<string>(D.randomName());
  const [password, setPassword] = useState<string>('1');
  const [confirmPassword, setConfirmPassword] = useState<string>(password);
  const focus = useAutoFocus();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const goHomeNavigator = useCallback(() => {
    if (password === confirmPassword) {
      dispatch(loginAction({name, email, password}));
      navigation.navigate('TabNavigator');
    } else Alert.alert('password is invalid');
  }, [dispatch, navigation, name, email, password, confirmPassword]);
  const goLogin = useCallback(() => navigation.navigate('Login'), [navigation]);

  return (
    <SafeAreaView>
      <View style={[styles.view]}>
        <AutoFocusProvider contentContainerStyle={[styles.keyboardAwareFocus]}>
          <View style={[styles.textView]}>
            <Text style={[styles.text]}>email</Text>
            <View border style={[styles.textInputView]}>
              <TextInput
                onFocus={focus}
                style={[styles.textInput]}
                value={email}
                onChangeText={setEmail}
                placeholder="enter your email"
              />
            </View>
          </View>
          <View style={[styles.textView]}>
            <Text style={[styles.text]}>name</Text>
            <View border style={[styles.textInputView]}>
              <TextInput
                onFocus={focus}
                style={[styles.textInput]}
                value={name}
                onChangeText={setName}
                placeholder="enter your name"
              />
            </View>
          </View>
          <View style={[styles.textView]}>
            <Text style={[styles.text]}>password</Text>
            <View border style={[styles.textInputView]}>
              <TextInput
                onFocus={focus}
                style={[styles.textInput]}
                value={password}
                onChangeText={setPassword}
                placeholder="enter your password"
              />
            </View>
          </View>
          <View style={[styles.textView]}>
            <Text style={[styles.text]}>confirm password</Text>
            <View border style={[styles.textInputView]}>
              <TextInput
                onFocus={focus}
                style={[styles.textInput]}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="confirm password"
              />
            </View>
          </View>
          <TouchableView
            notification
            style={[styles.touchableView]}
            onPress={goHomeNavigator}>
            <Text style={[styles.text]}>SignUp</Text>
          </TouchableView>
          <UnderlineText
            style={[styles.text, {marginTop: 15}]}
            onPress={goLogin}>
            Login
          </UnderlineText>
        </AutoFocusProvider>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {flex: 1, justifyContent: 'space-between', alignItems: 'center'},
  text: {fontSize: 20},
  keyboardAwareFocus: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {width: '100%', padding: 5, marginBottom: 10},
  textInput: {fontSize: 24, padding: 10},
  textInputView: {marginTop: 5, borderRadius: 10},
  touchableView: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 10,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

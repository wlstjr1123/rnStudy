import React, {useCallback, useEffect} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {MD2Colors as Colors} from 'react-native-paper';
import {SafeAreaView, View, Text, TopBar, UnderlineText} from '../theme';
import type {AppState} from '../store';
import * as H from '../store/humor';

export default function ThunkFetch() {
  const {humorText, loading, errorMessage} = useSelector<
    AppState,
    H.HumorState
  >(({humor}) => humor);

  const dispatch = useDispatch();
  const getHumor = useCallback(() => {
    dispatch<any>(H.requestHumor());
  }, [dispatch]);
  useEffect(getHumor, []);

  return (
    <SafeAreaView>
      <TopBar>
        <UnderlineText style={[styles.text]} onPress={getHumor}>
          get humor using thunk
        </UnderlineText>
      </TopBar>
      {loading && (
        <ActivityIndicator size="large" color={Colors.lightBlue500} />
      )}
      <View style={[styles.content]}>
        <Text style={[styles.text]}>{humorText}</Text>
        {errorMessage.length > 0 && (
          <Text style={[styles.text]}>{errorMessage}</Text>
        )}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  text: {fontSize: 20, textAlign: 'center'},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

import {useMemo} from 'react';
import {PanResponder} from 'react-native';

import type {
  GestureResponderEvent,
  PanResponderGestureState,
} from 'react-native';
import type {PanResponderCallbacks, PanResponderInstance} from 'react-native';

type Event = GestureResponderEvent;
type State = PanResponderGestureState;

const defaultCallback = {
  onStartShouldSetPanResponder: (_e: Event, _s: State) => true,
  onMoveShouldSetPanResponder: (_e: Event, _s: State) => true,
};

export const usePanResponder = (
  callbacks: PanResponderCallbacks,
  deps: any[] = [],
): PanResponderInstance => {
  const panResponder = useMemo<PanResponderInstance>(
    () => PanResponder.create({...defaultCallback, ...callbacks}),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps,
  );
  return panResponder;
};

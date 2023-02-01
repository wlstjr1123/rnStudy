import {Animated} from 'react-native';
import type {
  StackCardInterpolationProps,
  StackCardInterpolatedStyle,
  //   StackCardStyleInterpolator,
} from '@react-navigation/stack';
import {useCallback} from 'react';

export const useNavigaationHorizontalInterpolator = () => {
  const interpolator = useCallback(
    (props: StackCardInterpolationProps): StackCardInterpolatedStyle => {
      const {current, inverted, layouts} = props;
      return {
        cardStyle: {
          transform: [
            {
              translateX: Animated.multiply(
                current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [layouts.screen.width, 0],
                }),
                inverted,
              ),
            },
          ],
        },
      };
    },
    [],
  );
  return interpolator;
};

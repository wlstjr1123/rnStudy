import {Animated} from 'react-native'

export const interpolate = (
  animValue: Animated.Value,
  outputRange: number[] | string[],
  inputRange: number[] = [0, 1]
): Animated.AnimatedInterpolation<string|number> => {
  return animValue.interpolate({inputRange, outputRange})
}

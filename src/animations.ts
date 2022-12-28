import { interpolate } from 'react-native-reanimated';

export function fade(value: number) {
  'worklet';
  return {
    opacity: value,
  };
}

export function slideUp(value: number) {
  'worklet';
  return {
    opacity: value,
    transform: [{ translateY: interpolate(value, [0, 1], [10, 0]) }],
  };
}

export function scale(value: number) {
  'worklet';
  return {
    opacity: value,
    transform: [{ scale: interpolate(value, [0, 1], [0.8, 1]) }],
  };
}

import { useEffect } from 'react';
import { interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import type { Options } from '../types';

export function useAlertAnimatedStyle(
  visible: boolean,
  onShowAnimationEnd: () => void,
  onHideAnimationEnd: () => void,
  options: Options,
) {
  const visibility = useSharedValue(0);

  useEffect(() => {
    visibility.value = withTiming(visible ? 1 : 0, { duration: options.animationDuration }, () => {
      runOnJS(visibility.value ? onShowAnimationEnd : onHideAnimationEnd)();
    });
  }, [onHideAnimationEnd, onShowAnimationEnd, options.animationDuration, visible, visibility]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: visibility.value,
      transform: [{ translateY: interpolate(visibility.value, [0, 1], [10, 0]) }],
    };
  }, []);

  return animatedStyle;
}

import { useEffect } from 'react';
import { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import type { ModalProviderOptions } from '../types';

export function useAlertAnimatedStyle(
  visible: boolean,
  onShowAnimationEnd: () => void,
  onHideAnimationEnd: () => void,
  options: ModalProviderOptions,
) {
  const visibility = useSharedValue(0);

  useEffect(() => {
    const toValue = visible ? 1 : 0;
    visibility.value = withTiming(toValue, { duration: options.animationDuration }, () => {
      const value = visibility.value ? onShowAnimationEnd : onHideAnimationEnd;
      runOnJS(value)();
    });
  }, [onHideAnimationEnd, onShowAnimationEnd, options.animationDuration, visible, visibility]);

  const animatedStyle = useAnimatedStyle(() => options.animationWorklet(visibility.value), []);

  return animatedStyle;
}

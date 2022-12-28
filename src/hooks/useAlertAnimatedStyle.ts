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
    visibility.value = withTiming(visible ? 1 : 0, { duration: options.animationDuration }, () => {
      runOnJS(visibility.value ? onShowAnimationEnd : onHideAnimationEnd)();
    });
  }, [onHideAnimationEnd, onShowAnimationEnd, options.animationDuration, visible, visibility]);

  const animatedStyle = useAnimatedStyle(() => options.animationWorklet(visibility.value), []);

  return animatedStyle;
}

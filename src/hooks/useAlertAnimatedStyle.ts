import { useEffect } from 'react';
import { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import type { ModalProviderOptions } from '../types';

export function useAlertAnimatedStyle(visible: boolean, options: ModalProviderOptions, onHideAnimationEnd: () => void) {
  const visibility = useSharedValue(0);

  useEffect(() => {
    const toValue = visible ? 1 : 0;
    visibility.value = withTiming(toValue, { duration: options.animationDuration }, () => {
      if (!visibility.value) {
        runOnJS(onHideAnimationEnd)();
      }
    });
  }, [onHideAnimationEnd, options.animationDuration, visible, visibility]);

  const animatedStyle = useAnimatedStyle(() => options.animationWorklet(visibility.value), []);

  return animatedStyle;
}

import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { useTheme } from '../hooks/useTheme';
import { useModalsContext } from '../hooks/useModalsContext';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
});

/**
 * Translucent overlay under displaying component
 */
const ModalOverlay: React.FC = () => {
  const theme = useTheme();
  const { options, state } = useModalsContext();
  const overlayOpacity = useSharedValue(0);
  const hidden = state.renderList.length <= 1 && state.renderList[0]?.visible === false;

  useEffect(() => {
    const toValue = hidden ? 0 : 1;
    overlayOpacity.value = withTiming(toValue, { duration: options.animationDuration });
  }, [options.animationDuration, overlayOpacity, hidden]);

  const overlayStyle = useAnimatedStyle(() => {
    return {
      opacity: overlayOpacity.value,
    };
  });

  return <Animated.View style={[styles.overlay, { backgroundColor: theme.overlayBackgroundColor }, overlayStyle]} />;
};

export default ModalOverlay;

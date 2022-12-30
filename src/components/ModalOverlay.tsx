import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useModalsContext } from '../hooks/useModalsContext';

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    flex: 1,
  },
});

/**
 * Translucent overlay under displaying component
 */
const ModalOverlay: React.FC = () => {
  const { options, state } = useModalsContext();
  const overlayOpacity = useSharedValue(0);
  const hidden = state.renderList.length <= 1 && state.renderList[0]?.visible === false;

  useEffect(() => {
    const toValue = hidden ? 1 : 0;

    overlayOpacity.value = withTiming(toValue, { duration: options.animationDuration });
  }, [options.animationDuration, overlayOpacity, hidden]);

  const overlayStyle = useAnimatedStyle(() => {
    return {
      opacity: overlayOpacity.value,
    };
  });

  return <Animated.View style={[styles.overlay, overlayStyle]} />;
};

export default ModalOverlay;

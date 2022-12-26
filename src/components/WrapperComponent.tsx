import type { ReactNode } from 'react';
import { useCallback } from 'react';
import React from 'react';
import type { ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';

import { useAlertAnimatedStyle } from '../hooks/useAlertAnimatedStyle';
import { useModalsContext } from '../hooks/useModalsContext';
import { startHideAnimation } from '../state/action-creators';
import AvoidDismiss from './AvoidDismiss';
import type { CreateActionCallback } from '../types';

export interface WrapperComponentProps<D extends unknown, P, E extends unknown> {
  children: (data: D, createActionCallback: CreateActionCallback<E>, additionalProps: P) => ReactNode;
  style?: ViewStyle;
}

function WrapperComponent<D, P extends {} = {}, E = unknown>({ children, style }: WrapperComponentProps<D, P, E>) {
  const { additionalProps, dispatch, onAlertHideAnimationEnd, onAlertShowAnimationEnd, options, state } =
    useModalsContext();

  const wrapperStyle = useAlertAnimatedStyle(
    !!state.renderList[0]?.visible,
    onAlertShowAnimationEnd,
    onAlertHideAnimationEnd,
    options,
  );

  const actionCallback = useCallback<CreateActionCallback<E>>(
    (fn) => () => {
      dispatch(startHideAnimation());
      if (fn) {
        fn();
      }
    },
    [dispatch],
  );

  if (!state.renderList[0]) {
    return null;
  }

  return (
    <Animated.View style={[style, wrapperStyle]}>
      <AvoidDismiss>{children(state.renderList[0].data, actionCallback, additionalProps as any)}</AvoidDismiss>
    </Animated.View>
  );
}

export default WrapperComponent;

import type { ReactNode } from 'react';
import { useCallback } from 'react';
import React from 'react';
import type { ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';

import { useAlertAnimatedStyle } from '../hooks/useAlertAnimatedStyle';
import { useModalsContext } from '../hooks/useModalsContext';
import { hideAnimationFinished, hideAnimationStart } from '../state/action-creators';
import AvoidDismiss from './AvoidDismiss';
import type { ComponentName, CreateActionCallback, RegisteredComponents } from '../types';

export interface WrapperComponentProps<E extends unknown = unknown> {
  children: (
    data: RegisteredComponents[ComponentName] | any,
    createActionCallback: CreateActionCallback<E>,
  ) => ReactNode;
  style?: ViewStyle;
}

function WrapperComponent<E = unknown>({ children, style }: WrapperComponentProps<E>) {
  const { dispatch, options, state } = useModalsContext();

  const wrapperStyle = useAlertAnimatedStyle(!!state.renderList[0]?.visible, options, () =>
    dispatch(hideAnimationFinished()),
  );

  const actionCallback = useCallback<CreateActionCallback<E>>(
    (fn) => () => {
      dispatch(hideAnimationStart());
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
      <AvoidDismiss>{children(state.renderList[0].data, actionCallback)}</AvoidDismiss>
    </Animated.View>
  );
}

export default WrapperComponent;

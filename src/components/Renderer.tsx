import React, { useCallback } from 'react';

import Modal from './Modal';
import WrapperComponent from './WrapperComponent';

import { startHideAnimation } from '../state/action-creators';

import type { Dispatch, ReducerState } from '../types';

interface RendererProps {
  // TODO: Remove any
  components: {
    [k: string]: any;
  };
  dispatch: Dispatch;
  state: ReducerState;
}
const Renderer: React.FC<RendererProps> = ({ components, dispatch, state }) => {
  const [firstRenderItem] = state.renderList;

  const onDismiss = useCallback(() => {
    if (firstRenderItem?.options.cancelable) {
      dispatch(startHideAnimation());
    }
  }, [dispatch, firstRenderItem]);

  const Component = firstRenderItem ? components[firstRenderItem.componentName] : null;

  return (
    <Modal onDismiss={onDismiss} visible={!!state.renderList.length}>
      {Component && firstRenderItem && <Component WrapperComponent={WrapperComponent} />}
    </Modal>
  );
};

export default Renderer;

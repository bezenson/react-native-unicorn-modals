import type { PropsWithChildren } from 'react';
import React, { useCallback, useReducer } from 'react';

import Renderer from './components/Renderer';

import { hideAnimationFinished } from './state/action-creators';
import { initialState, reducer } from './state/state';

import { ModalsContext } from './context';

import type { ComponentsConfig, CreateModalProviderOptions, ModalProviderOptions } from './types';

function mergeOptionsWithDefault(options = {}): ModalProviderOptions {
  return {
    animationDuration: 350,
    hardwareAccelerated: true,
    ...options,
  };
}

/**
 * Create React context provider
 * @param componentsToRegister // TODO: TBD
 * @param options.animationDuration Show/hide animation duration
 * @returns React Provider Component
 */
export function createModalProvider<C, P extends {}>(
  componentsToRegister: ComponentsConfig<C>,
  options?: CreateModalProviderOptions,
) {
  const ProviderComponent: React.FC<PropsWithChildren<{}> & P> = ({ children, ...additionalProps }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // TODO: Do something with function
    const onAlertShowAnimationEnd = useCallback(() => {}, []);

    const onAlertHideAnimationEnd = useCallback(() => {
      dispatch(hideAnimationFinished());
    }, [dispatch]);

    return (
      <ModalsContext.Provider
        value={{
          additionalProps,
          dispatch,
          onAlertShowAnimationEnd,
          onAlertHideAnimationEnd,
          options: mergeOptionsWithDefault(options),
          state,
        }}
      >
        {children}
        <Renderer components={componentsToRegister} dispatch={dispatch} state={state} />
      </ModalsContext.Provider>
    );
  };

  return ProviderComponent;
}

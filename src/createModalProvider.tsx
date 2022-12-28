import type { PropsWithChildren } from 'react';
import React, { useCallback, useReducer } from 'react';

import Renderer from './components/Renderer';

import { hideAnimationFinished } from './state/action-creators';
import { initialState, reducer } from './state/state';

import { ModalsContext } from './context';

import type { ComponentsConfig, CreateModalProviderOptions, ModalProviderOptions } from './types';
import { slideUp } from './animations';

function mergeOptionsWithDefault(options = {}): ModalProviderOptions {
  return {
    animationDuration: 350,
    animationWorklet: slideUp,
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
  if (!componentsToRegister || !Object.keys(componentsToRegister).length) {
    throw new Error('You should pass at least one component into `createModalProvider` function');
  }
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

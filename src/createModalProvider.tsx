import React, { useMemo, useReducer } from 'react';
import type { PropsWithChildren } from 'react';

import Renderer from './components/Renderer';

import { initialState, reducer } from './state/state';

import { ModalsContext } from './context';

import { slideUp } from './animations';
import defaultLightTheme from './themes/default-light';
import { ThemeContext } from './theme-context';

import type {
  ComponentsConfig,
  CreateModalProviderOptions,
  ModalProviderOptions,
  ModalProviderProps,
  RegisteredComponents,
} from './types';

function mergeOptionsWithDefault(options = {}): ModalProviderOptions {
  return {
    animationDuration: 350,
    animationWorklet: slideUp,
    hardwareAccelerated: true,
    ...options,
  };
}

/**
 * Create React context provider.
 * @param componentsToRegister Object with React components.
 * @param options.animationDuration Show/hide animation duration.
 * @param options.animationWorklet Animation function (worklet).
 * @param options.hardwareAccelerated Android specific option nested from React Native default Modal component.
 * @returns React Provider Component
 */
export function createModalProvider<C extends RegisteredComponents>(
  componentsToRegister: ComponentsConfig<C>,
  options?: CreateModalProviderOptions,
) {
  if (!componentsToRegister || !Object.keys(componentsToRegister).length) {
    throw new Error('You should pass at least one component into `createModalProvider` function');
  }
  const ProviderComponent: React.FC<PropsWithChildren<ModalProviderProps>> = ({
    children,
    theme = defaultLightTheme,
  }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const optionsWithDefault = useMemo(() => mergeOptionsWithDefault(options), []);

    return (
      <ModalsContext.Provider value={{ dispatch, options: optionsWithDefault, state }}>
        <ThemeContext.Provider value={theme}>
          {children}
          <Renderer components={componentsToRegister} dispatch={dispatch} state={state} />
        </ThemeContext.Provider>
      </ModalsContext.Provider>
    );
  };

  return ProviderComponent;
}

import type React from 'react';
import type { ModalProps } from 'react-native';
import type WrapperComponent from './components/WrapperComponent';
import type * as actionCreators from './state/action-creators';

export interface RegisteredCompnents {
  alert: {
    buttons: any[];
    description: string;
    title: string;
  };
  menu: {
    items: any[];
  };
}

export type ActionsType = ReturnType<typeof actionCreators[keyof typeof actionCreators]>;

export interface ShowComponentOptions {
  cancelable?: boolean;
}

export interface RenderItemOptions {
  cancelable: boolean;
}

interface RenderItem {
  componentName: string;
  data: any;
  options: RenderItemOptions;
  visible: boolean;
}

export interface ReducerState {
  renderList: RenderItem[];
}

// === createModalProvider === //
export interface CreateModalProviderOptions {
  animationDuration?: number;
  hardwareAccelerated?: ModalProps['hardwareAccelerated'];
}

export interface Options {
  animationDuration: number;
  hardwareAccelerated: ModalProps['hardwareAccelerated'];
}

export interface RegisteredComponents {
  [key: string]: React.FC<RenderableComponentProps>;
}

export type Dispatch = React.Dispatch<ActionsType>;

export interface ContextType {
  additionalProps: unknown;
  dispatch: Dispatch;
  onAlertShowAnimationEnd: () => void;
  onAlertHideAnimationEnd: () => void;
  options: Options;
  state: ReducerState;
}

// === WrapperComponent === //
export type WrapperComponentT = typeof WrapperComponent;

export interface RenderableComponentProps {
  WrapperComponent: WrapperComponentT;
}

export type ActionCallback = Function | undefined;

export type CreateActionCallback<E> = (fn?: ActionCallback) => (arg: E) => void;

import type { ReactNode } from 'react';
import type React from 'react';
import type { ModalProps, ViewStyle } from 'react-native';
import type { AnimatedStyleProp } from 'react-native-reanimated';

import type * as actionCreators from './state/action-creators';

export type ComponentsConfig<C> = {
  [key in keyof C]: React.FC<RenderableComponentProps>;
};

// === createModalProvider === //
export type AnimationWorklet = (value: number) => AnimatedStyleProp<ViewStyle>;
export type AnimationWorkletReturn = ReturnType<AnimationWorklet>;

export interface ModalProviderOptions {
  /**
   * @default 350
   */
  animationDuration: number;
  /**
   * @default `slideUp`
   */
  animationWorklet: AnimationWorklet;
  /**
   * Android specific option nested from React Native default Modal component.
   * @default true
   */
  hardwareAccelerated: ModalProps['hardwareAccelerated'];
}
export type CreateModalProviderOptions = Partial<ModalProviderOptions>;

// === WrapperComponent === //
export type ActionCallback = Function | undefined;
export type CreateActionCallback<E extends unknown = any> = (fn?: ActionCallback) => (arg: E) => void;

export type WrapperComponentT<D, E, P> = React.FC<{
  children: (data: D, createActionCallback: CreateActionCallback<E>, additionalProps: P) => ReactNode;
  style?: ViewStyle;
}>;

export interface RenderableComponentProps<D = any, E extends unknown = any, P extends {} = any> {
  WrapperComponent: WrapperComponentT<D, E, P>;
}
export type RenderableComponent<D = any, E extends {} = any, P extends {} = any> = React.FC<
  RenderableComponentProps<D, E, P>
>;

// === State === //
export type ActionsType = ReturnType<typeof actionCreators[keyof typeof actionCreators]>;
export type Dispatch = React.Dispatch<ActionsType>;

export interface RenderItemOptions {
  cancelable: boolean;
}
export type ShowRenderItemOptions = Partial<RenderItemOptions>;
export interface RenderItem {
  componentName: string;
  data: any; // TODO: fix any
  options: RenderItemOptions;
  visible: boolean;
}
export interface ReducerState {
  renderList: RenderItem[];
}

export interface ContextType {
  // TODO: additionalProps
  additionalProps: unknown;
  dispatch: Dispatch;
  onAlertShowAnimationEnd: () => void;
  onAlertHideAnimationEnd: () => void;
  options: ModalProviderOptions;
  state: ReducerState;
}

// === Hooks === //
export type ShowModal<RC> = <K extends keyof RC>(type: K, data: RC[K], options?: ShowRenderItemOptions) => void;
export interface UseModalsReturn<RC> {
  show: ShowModal<RC>;
}

// === Predefined components === //
// Alert
export type AlertButtonVariant = 'default' | 'destructive' | 'cancel';
export interface AlertButtonT {
  onPress?: () => void;
  secondary?: boolean;
  style?: AlertButtonVariant;
  text: string;
}
export interface AlertData {
  buttons: AlertButtonT[];
  description: string;
  title: string;
}

// Menu
export interface MenuItemT {
  onPress?: () => void;
  text: string;
}
export interface MenuData {
  items: MenuItemT[];
}

export type PredefinedSupportedThemes = 'dark' | 'light';
export interface PredefinedSupportedProps {
  theme: PredefinedSupportedThemes;
}

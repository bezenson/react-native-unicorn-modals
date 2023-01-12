import type { ReactNode } from 'react';
import type React from 'react';
import type { ModalProps, ViewStyle } from 'react-native';
import type { AnimatedStyleProp } from 'react-native-reanimated';

import type * as actionCreators from './state/action-creators';

// === Common === //
/**
 * Extend it in your global.d.ts file.
 * Interface key is a component name (1st argument of `show` function)
 * Interface value is a component data interface (2nd argument of `show` function)
 */
export interface RegisteredComponents {}

export type ComponentName = string | number | symbol;

// === Themes === //
export interface DefaultTheme {
  actionButtonColor: {
    cancel: string;
    default: string;
    destructive: string;
  };
  cardBackgroundColor: string;
  lineColor: string;
  overlayBackgroundColor: string;
  textColor: string;
  titleTextColor: string;
}

export type Theme<P = {}> = DefaultTheme & P;

// === createModalProvider === //
export interface ModalProviderProps {
  theme?: DefaultTheme;
}

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
  /**
   * Determines whether your modal should go under the system statusbar.
   * @default true
   */
  statusBarTranslucent: boolean;
}
export type CreateModalProviderOptions = Partial<ModalProviderOptions>;

// === WrapperComponent === //
export type ActionCallback = Function | undefined;
export type CreateActionCallback<E extends unknown = any> = (fn?: ActionCallback) => (arg: E) => void;

export type WrapperComponentT<D, E> = React.FC<{
  children: (data: D, createActionCallback: CreateActionCallback<E>) => ReactNode;
  style?: ViewStyle;
}>;

export interface RenderableComponentProps<D = any, E extends {} = any> {
  WrapperComponent: WrapperComponentT<D, E>;
}
export type RenderableComponent<D, E extends {} = any> = React.FC<RenderableComponentProps<D, E>>;

export type ComponentsConfig<C extends RegisteredComponents = RegisteredComponents> = {
  [key in keyof C]: React.FC<RenderableComponentProps>;
};

// === State === //
export type ActionsType = ReturnType<(typeof actionCreators)[keyof typeof actionCreators]>;
export type Dispatch = React.Dispatch<ActionsType>;

export interface RenderItemOptions {
  cancelable: boolean;
}
export type ShowRenderItemOptions = Partial<RenderItemOptions>;
export interface RenderItem {
  componentName: ComponentName;
  data: unknown;
  options: RenderItemOptions;
  visible: boolean;
}
export interface ReducerState {
  renderList: RenderItem[];
}

export interface ContextType {
  dispatch: Dispatch;
  options: ModalProviderOptions;
  state: ReducerState;
}

// === Hooks === //
export type UseModalsShow<RC> = <K extends keyof RC>(
  componentName: K,
  data: RC[K],
  options?: ShowRenderItemOptions,
) => void;
export interface UseModalsReturn<RC extends Object> {
  show: UseModalsShow<RC>;
}

// === Renderable components === //
export type ActionButtonVariant = 'default' | 'destructive' | 'cancel';

// Alert
export interface AlertButtonT {
  onPress?: () => void;
  secondary?: boolean;
  variant?: ActionButtonVariant;
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
  variant?: ActionButtonVariant;
  text: string;
}
export interface MenuData {
  items: MenuItemT[];
}

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

export type ComponentName = keyof RegisteredComponents;

// === Themes === //
export interface DefaultTheme {
  actionButtonColor: {
    cancel: string;
    default: string;
    destructive: string;
  };
  cardBackgroundColor: string;
  lineColor: string;
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
}
export type CreateModalProviderOptions = Partial<ModalProviderOptions>;

// === WrapperComponent === //
export type ChildrenData<K extends ComponentName> = RegisteredComponents[K];

export type ActionCallback = Function | undefined;
export type CreateActionCallback<E extends unknown = any> = (fn?: ActionCallback) => (arg: E) => void;

export type WrapperComponentT<K extends ComponentName, E> = React.FC<{
  children: (data: ChildrenData<K>, createActionCallback: CreateActionCallback<E>) => ReactNode;
  style?: ViewStyle;
}>;

export interface RenderableComponentProps<K extends ComponentName = any, E extends {} = any> {
  WrapperComponent: WrapperComponentT<K, E>;
}
export type RenderableComponent<K extends ComponentName = any, E extends {} = any> = React.FC<
  RenderableComponentProps<K, E>
>;

export type ComponentsConfig<C extends RegisteredComponents = RegisteredComponents> = {
  [key in keyof C]: React.FC<RenderableComponentProps>;
};

// === State === //
export type ActionsType = ReturnType<typeof actionCreators[keyof typeof actionCreators]>;
export type Dispatch = React.Dispatch<ActionsType>;

export interface RenderItemOptions {
  cancelable: boolean;
}
export type ShowRenderItemOptions = Partial<RenderItemOptions>;
export interface RenderItem {
  componentName: ComponentName;
  data: RegisteredComponents[ComponentName];
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
export type ShowModal = <K extends ComponentName>(
  componentName: K,
  data: RegisteredComponents[K],
  options?: ShowRenderItemOptions,
) => void;
export interface UseModalsReturn {
  show: ShowModal;
}

// === Predefined components === //
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

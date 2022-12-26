export type Theme = 'dark' | 'light';

export type AlertButtonVariant = 'default' | 'destructive' | 'cancel';

export interface AlertButtonT {
  onPress?: () => void;
  secondary?: boolean;
  style?: AlertButtonVariant;
  text: string;
}

export interface AddionalProps {
  theme: Theme;
}

export interface MenuItemT {
  onPress?: () => void;
  text: string;
}

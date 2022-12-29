import 'react-native-unicorn-modals';
import type { Theme } from 'react-native-unicorn-modals';

declare module 'react-native-unicorn-modals' {
  export interface AppTheme extends Theme {
    buttonColor: string;
  }
  export function useTheme(): AppTheme;
}

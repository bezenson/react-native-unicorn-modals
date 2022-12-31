import 'react-native-unicorn-modals';
import type { AlertData, MenuData, Theme } from 'react-native-unicorn-modals';

declare module 'react-native-unicorn-modals' {
  export interface AppTheme extends Theme {
    // Custom style for `src/components/CustomModal.tsx`
    buttonColor: string;
  }
  export function useTheme(): AppTheme;

  export interface CustomModalData {
    title: string;
  }

  export interface RegisteredComponents {
    alert: AlertData;
    custom: CustomModalData;
    menu: MenuData;
  }
}

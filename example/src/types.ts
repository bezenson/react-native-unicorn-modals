import type { AlertData, MenuData, Theme } from 'react-native-unicorn-modals';

// Components
export interface CustomModalData {
  title: string;
}

export interface RegisteredComponents {
  alert: AlertData;
  custom: CustomModalData;
  menu: MenuData;
}

// Theme
interface AdditionalThemeProps {
  buttonColor: string;
}
export type AppTheme = Theme<AdditionalThemeProps>;

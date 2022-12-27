import type { AlertData, MenuData } from 'react-native-unicorn-modals';

export interface CustomModalData {
  title: string;
}

export interface RegisteredComponents {
  alert: AlertData;
  custom: CustomModalData;
  menu: MenuData;
}

import React, { useCallback, useState } from 'react';
import { createModalProvider, Alert, Menu, defaultThemeDark, defaultThemeLight } from 'react-native-unicorn-modals';

import CustomModal from './components/CustomModal';
import Example from './components/Example';

import type { AppTheme } from './types';

const lightTheme: AppTheme = {
  ...defaultThemeLight,
  buttonColor: '#284387',
};

const darkTheme: AppTheme = {
  ...defaultThemeDark,
  buttonColor: '#a537fd',
};

const Provider = createModalProvider(
  {
    alert: Alert,
    custom: CustomModal,
    menu: Menu,
  },
  {
    animationDuration: 400,
  },
);

const App = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const switchTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme]);

  return (
    <Provider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Example darkMode={theme === 'dark'} switchTheme={switchTheme} />
    </Provider>
  );
};

export default App;

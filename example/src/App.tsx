import React, { useCallback, useState } from 'react';

import { createModalProvider, Alert, Menu } from 'react-native-unicorn-modals';
import type { Theme } from 'react-native-unicorn-modals';

import Example from './components/Example';

interface AdditionalProps {
  theme: Theme;
}

interface ModalProviderConf {
  alert: {
    buttons: any[];
    description: string;
    title: string;
  };
  menu: string;
}

const Provider = createModalProvider<ModalProviderConf, AdditionalProps>(
  {
    alert: Alert,
    menu: Menu,
  },
  { animationDuration: 400 },
);

const App = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  const switchTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme]);

  return (
    <Provider theme={theme}>
      <Example darkMode={theme === 'dark'} switchTheme={switchTheme} />
    </Provider>
  );
};

export default App;

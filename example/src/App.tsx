import React, { useCallback, useState } from 'react';
import {
  createModalProvider,
  Alert,
  Menu,
  type PredefinedSupportedThemes,
  type PredefinedSupportedAddionalProps,
} from 'react-native-unicorn-modals';

import CustomModal from './components/CustomModal';
import Example from './components/Example';
import type { RegisteredComponents } from './types';

const Provider = createModalProvider<RegisteredComponents, PredefinedSupportedAddionalProps>(
  {
    alert: Alert,
    custom: CustomModal,
    menu: Menu,
  },
  { animationDuration: 400 },
);

const App = () => {
  const [theme, setTheme] = useState<PredefinedSupportedThemes>('dark');

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

import { createContext } from 'react';

import defaultLightTheme from './themes/default-light';

// TODO: Fix any
export const ThemeContext = createContext<any>(defaultLightTheme);

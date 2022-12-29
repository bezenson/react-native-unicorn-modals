import { createContext } from 'react';

import defaultLightTheme from './themes/default-light';

import type { Theme } from './types';

export const ThemeContext = createContext<Theme>(defaultLightTheme);

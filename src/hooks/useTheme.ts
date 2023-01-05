import { useContext } from 'react';

import type { DefaultTheme } from '../types';
import { ThemeContext } from '../theme-context';

export function useTheme<T = DefaultTheme>(): T {
  const theme = useContext(ThemeContext);
  return theme;
}

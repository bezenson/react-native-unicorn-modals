import { useContext } from 'react';

import { ThemeContext } from '../theme-context';

export function useTheme() {
  const theme = useContext(ThemeContext);
  return theme;
}

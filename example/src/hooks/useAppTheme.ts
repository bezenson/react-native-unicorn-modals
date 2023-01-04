import { useTheme } from 'react-native-unicorn-modals';

import type { AppTheme } from '../types';

/**
 * Typed wrapper around `useTheme`.
 */
export default function useAppTheme() {
  return useTheme<AppTheme>();
}

import { useModals } from 'react-native-unicorn-modals';

import type { RegisteredComponents } from '../types';

/**
 * Typed wrapper around `useModals`.
 */
export default function useAppModals() {
  return useModals<RegisteredComponents>();
}

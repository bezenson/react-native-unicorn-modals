import { useCallback } from 'react';

import { showModal } from '../state/action-creators';
import { useModalsContext } from './useModalsContext';
import type { ComponentName, RegisteredComponents, ShowRenderItemOptions, UseModalsReturn } from '../types';

export function useModals(): UseModalsReturn {
  const { dispatch } = useModalsContext();

  const show = useCallback(
    <K extends ComponentName>(type: K, data: RegisteredComponents[K], options?: ShowRenderItemOptions) => {
      dispatch(showModal(type, data, options));
    },
    [dispatch],
  );

  return { show };
}

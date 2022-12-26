import { useCallback } from 'react';

import { showComponent } from '../state/action-creators';
import { useModalsContext } from './useModalsContext';
import type { ShowModal, UseModalsReturn } from '../types';

export function useModals<RC>(): UseModalsReturn<RC> {
  const { dispatch } = useModalsContext();

  const show = useCallback<ShowModal<RC>>(
    (type, data, options) => {
      dispatch(showComponent(type, data, options));
    },
    [dispatch],
  );

  return { show };
}

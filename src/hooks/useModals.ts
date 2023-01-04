import { useCallback } from 'react';

import { showModal } from '../state/action-creators';
import { useModalsContext } from './useModalsContext';
import type { UseModalsReturn, UseModalsShow } from '../types';

export function useModals<RC extends Object>(): UseModalsReturn<RC> {
  const { dispatch } = useModalsContext();

  const show = useCallback<UseModalsShow<RC>>(
    (type, data, options) => dispatch(showModal(type, data, options)),
    [dispatch],
  );

  return { show };
}

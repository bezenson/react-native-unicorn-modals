import { useCallback } from 'react';

import { showComponent } from '../state/action-creators';
import type { RegisteredCompnents, ShowComponentOptions } from '../types';
import { useModalsContext } from './useModalsContext';

type Show = <K extends keyof RegisteredCompnents>(
  type: K,
  data: RegisteredCompnents[K],
  options?: ShowComponentOptions,
) => void;

export function useModals(): { show: Show } {
  const { dispatch } = useModalsContext();

  // TODO: `data` type should depend on `type` string.
  const show = useCallback<Show>(
    (type, data, options) => {
      dispatch(showComponent(type, data, options));
    },
    [dispatch],
  );

  return { show };
}

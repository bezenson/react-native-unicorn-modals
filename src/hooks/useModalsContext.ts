import { useContext } from 'react';

import { ModalsContext } from '../context';

export function useModalsContext() {
  const context = useContext(ModalsContext);

  if (!context) {
    throw new Error(
      '`useModalsContext` must be used insde a `ModalsContext.Provder. Have you wrapped your app with Provider, created via `createModalProvider`?',
    );
  }

  return context;
}

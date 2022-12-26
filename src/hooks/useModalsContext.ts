import { useContext } from 'react';

import { ModalsContext } from '../context';

export function useModalsContext() {
  const context = useContext(ModalsContext);

  if (!context) {
    throw new Error('useModalsContext must be used within a ModalProvider');
  }

  return context;
}

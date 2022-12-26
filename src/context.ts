import { createContext } from 'react';

import type { ContextType } from './types';

export const ModalsContext = createContext<ContextType>({} as ContextType);

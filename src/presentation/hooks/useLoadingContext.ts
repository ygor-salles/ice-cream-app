import { useContext } from 'react';

import { LoadingContext } from '~contexts/LoadingContext';

export function useLoadingContext() {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error('useLoadingContext must be used within LoadingProvider');
  }

  return context;
}

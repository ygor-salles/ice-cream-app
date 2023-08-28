import { useContext } from 'react';

import { ToastArrayContext } from '~contexts/ToastArrayContext';

export function useToastArrayContext() {
  const context = useContext(ToastArrayContext);

  if (!context) {
    throw new Error('useToastArrayContext must be used within ToastArrayProvider');
  }

  return context;
}

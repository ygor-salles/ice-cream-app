import { createContext, useCallback, useEffect, useState } from 'react';

import { LoadingProps, Loading } from '~components/Loading';

import { AppProviderProps, ILoadingContextData } from './types';

export const LoadingContext = createContext<ILoadingContextData>({} as ILoadingContextData);

const defaultValueLoading: LoadingProps = {
  open: false,
};

export function LoadingProvider({ children }: AppProviderProps) {
  const [loadingState, setLoadingState] = useState<LoadingProps>(defaultValueLoading);

  const addLoading = useCallback((message?: string) => {
    setLoadingState({ open: true, message });
  }, []);

  const removeLoading = useCallback(() => {
    setLoadingState(defaultValueLoading);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setLoadingState(defaultValueLoading), 5000);

    return () => clearTimeout(timeout);
  }, [loadingState.open]);

  return (
    <LoadingContext.Provider value={{ addLoading, removeLoading }}>
      <Loading {...loadingState} />
      {children}
    </LoadingContext.Provider>
  );
}

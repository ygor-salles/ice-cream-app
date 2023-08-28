import { createContext, useCallback, useEffect, useState } from 'react';

import { Toast } from '~components/Toast';
import { ToastEnum } from '~types/index';

import { AppProviderProps, IToastContextData, ToastProps } from './types';

export const ToastContext = createContext<IToastContextData>({} as IToastContextData);

const defaultValueToast: ToastProps = {
  open: false,
  message: '',
  type: ToastEnum.success,
};

export function ToastProvider({ children }: AppProviderProps) {
  const [toastState, setToastState] = useState<ToastProps>(defaultValueToast);

  const addToast = useCallback((message: string, type: ToastEnum) => {
    setToastState({ open: true, message, type });
  }, []);

  const removeToast = useCallback(() => {
    setToastState(defaultValueToast);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setToastState(defaultValueToast), 3000);

    return () => clearTimeout(timeout);
  }, [toastState.open]);

  return (
    <ToastContext.Provider value={{ addToast, removeToast, ...toastState }}>
      <Toast {...toastState} removeToast={removeToast} />
      {children}
    </ToastContext.Provider>
  );
}

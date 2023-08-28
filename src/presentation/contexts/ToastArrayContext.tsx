import { createContext, useCallback, useState } from 'react';

import { ToastArray } from '~components/ToastArray';
import { ToastEnum } from '~types/index';

import { AppProviderProps, IToastArrayContextData, ToastArrayProps } from './types';

export const ToastArrayContext = createContext<IToastArrayContextData>(
  {} as IToastArrayContextData,
);

const getRandomIdMessage = () => {
  const number = Math.trunc(Math.random() * 10000);
  return number;
};

export function ToastArrayProvider({ children }: AppProviderProps) {
  const [messages, setMessages] = useState<ToastArrayProps[]>([]);

  const addToast = useCallback(
    (message: string, type: ToastEnum) => {
      setMessages([...messages, { id: getRandomIdMessage(), message, type }]);
    },
    [messages],
  );

  const onHide = useCallback(
    (message: string) => {
      setMessages(() => messages.filter(currentMessage => currentMessage.message !== message));
    },
    [messages],
  );

  return (
    <ToastArrayContext.Provider value={{ addToast, messages }}>
      <ToastArray messages={messages} onHide={onHide} />
      {children}
    </ToastArrayContext.Provider>
  );
}
